import { Table, StringColumn, ChoiceColumn, BooleanColumn, IntegerColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_snc_chargeback_license_type = Table({
    name: 'x_snc_chargeback_license_type',
    label: 'License Type',
    display: 'name',
    extensible: false,
    schema: {
        name: StringColumn({ label: 'License Name', maxLength: 200, mandatory: true }),
        category: ChoiceColumn({
            label: 'Category',
            choices: {
                itsm: { label: 'ITSM' },
                csm: { label: 'CSM' },
                esm: { label: 'ESM' },
                itsm_pro: { label: 'ITSM Professional' },
                app_creator: { label: 'App Creator' },
                integration: { label: 'Integration' },
                custom: { label: 'Custom' },
            } as const,
            dropdown: 'dropdown_without_none',
        }),
        description: StringColumn({ label: 'Description', maxLength: 1000, isFullUTF8: true }),
        default_unit_price: DecimalColumn({ label: 'Default Unit Price (USD)', scale: 2, default: 0 }),
        is_active: BooleanColumn({ label: 'Active', default: true }),
        is_subscription: BooleanColumn({ label: 'Subscription-based', default: true }),
        min_commit_qty: IntegerColumn({ label: 'Minimum Commit Quantity', default: 0 }),
        max_allocations: IntegerColumn({ label: 'Max Allocations per Customer', default: 0 }),
        billing_frequency: ChoiceColumn({
            label: 'Billing Frequency',
            choices: {
                monthly: { label: 'Monthly' },
                yearly: { label: 'Yearly' },
                one_time: { label: 'One-Time' },
            } as const,
            default: 'monthly',
            dropdown: 'dropdown_without_none',
        }),
    },
})
