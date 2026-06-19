import { wfa } from '@servicenow/sdk/automation'
import '@servicenow/sdk/global'

wfa.flow({
    name: 'Customer Onboarding Flow',
    description: 'Automates customer onboarding from request approval through license and rate setup',
    type: 'flow',
    trigger: wfa.trigger({
        type: 'record',
        table: 'x_snc_chargeback_onboarding_request',
        conditions: [
            { field: 'status', operator: 'changesTo', value: 'onboarded' },
        ],
    }),
    actions: [
        wfa.action({
            name: 'Get Request Details',
            type: 'action_get_record',
            inputs: {
                table: 'x_snc_chargeback_onboarding_request',
                sys_id: wfa.dataPill('trigger.sys_id'),
            },
            outputs: {
                record: wfa.dataPill('get_request_details.record'),
            },
        }),
        wfa.action({
            name: 'Check if Customer Already Exists',
            type: 'action_check_record',
            inputs: {
                table: 'x_snc_chargeback_customer',
                conditions: [
                    { field: 'customer_id', operator: '=', value: wfa.dataPill('get_request_details.record.customer_id') },
                ],
            },
            outputs: {
                exists: wfa.dataPill('check_if_customer_already_exists.exists'),
            },
        }),
        wfa.flowLogic.if({
            name: 'Customer Exists Check',
            condition: wfa.dataPill('check_if_customer_already_exists.exists'),
            then: [
                wfa.action({
                    name: 'Skip Duplicate',
                    type: 'action_log_message',
                    inputs: { message: 'Customer already exists — skipping onboarding' },
                }),
            ],
            else: [
                wfa.action({
                    name: 'Create Customer Record',
                    type: 'action_create_record',
                    inputs: {
                        table: 'x_snc_chargeback_customer',
                        values: {
                            customer_id: wfa.dataPill('get_request_details.record.customer_id'),
                            name: wfa.dataPill('get_request_details.record.customer_name'),
                            contact_email: wfa.dataPill('get_request_details.record.contact_email'),
                            status: 'active',
                            onboarding_date: wfa.dataPill('trigger.sys_created_on'),
                            billing_cycle: 'monthly',
                            currency: 'USD',
                        },
                    },
                    outputs: {
                        customer: wfa.dataPill('create_customer_record.customer'),
                    },
                }),
                wfa.action({
                    name: 'Send Welcome Notification',
                    type: 'action_send_event',
                    inputs: {
                        event_name: 'x_snc_chargeback.customer.onboarded',
                        record_sys_id: wfa.dataPill('create_customer_record.customer.sys_id'),
                    },
                }),
            ],
        }),
    ],
})

wfa.subflow({
    name: 'Setup Customer License Allocation',
    description: 'Creates license allocations for a newly onboarded customer',
    inputs: [
        { name: 'customer_sys_id', type: 'string', mandatory: true },
        { name: 'license_type_sys_id', type: 'string', mandatory: true },
        { name: 'quantity', type: 'integer', mandatory: true },
    ],
    actions: [
        wfa.action({
            name: 'Create License Allocation',
            type: 'action_create_record',
            inputs: {
                table: 'x_snc_chargeback_license_allocation',
                values: {
                    customer: wfa.dataPill('flow.inputs.customer_sys_id'),
                    license_type: wfa.dataPill('flow.inputs.license_type_sys_id'),
                    allocated_count: wfa.dataPill('flow.inputs.quantity'),
                    effective_date: wfa.dataPill('trigger.sys_created_on'),
                    allocation_type: 'new',
                },
            },
        }),
        wfa.action({
            name: 'Get License Type Default Price',
            type: 'action_get_record',
            inputs: {
                table: 'x_snc_chargeback_license_type',
                sys_id: wfa.dataPill('flow.inputs.license_type_sys_id'),
            },
            outputs: {
                license_type: wfa.dataPill('get_license_type_default_price.license_type'),
            },
        }),
        wfa.flowLogic.if({
            name: 'Has Default Price',
            condition: wfa.dataPill('get_license_type_default_price.license_type.default_unit_price') > 0,
            then: [
                wfa.action({
                    name: 'Create Default Rate Card',
                    type: 'action_create_record',
                    inputs: {
                        table: 'x_snc_chargeback_rate_card',
                        values: {
                            customer: wfa.dataPill('flow.inputs.customer_sys_id'),
                            license_type: wfa.dataPill('flow.inputs.license_type_sys_id'),
                            unit_price: wfa.dataPill('get_license_type_default_price.license_type.default_unit_price'),
                            is_default: false,
                            effective_start: wfa.dataPill('trigger.sys_created_on'),
                        },
                    },
                }),
            ],
        }),
    ],
})
