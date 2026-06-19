import { BusinessRule, Acl } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

BusinessRule({
    table: 'x_snc_chargeback_customer',
    name: 'Validate Customer Contract Dates',
    order: 100,
    active: true,
    when: 'before',
    action: ['insert', 'update'],
    script: (current: any, previous: any) => {
        if (current.getValue('contract_end_date') &&
            current.getValue('contract_start_date') &&
            current.getValue('contract_end_date') < current.getValue('contract_start_date')) {
            gs.addErrorMessage('Contract end date must be after start date');
            current.setAbortAction(true);
            return;
        }

        if (current.getValue('termination_date') &&
            current.getValue('contract_start_date') &&
            current.getValue('termination_date') < current.getValue('contract_start_date')) {
            gs.addErrorMessage('Termination date must be after contract start date');
            current.setAbortAction(true);
            return;
        }
    },
})

BusinessRule({
    table: 'x_snc_chargeback_rate_card',
    name: 'Validate Rate Card Price',
    order: 100,
    active: true,
    when: 'before',
    action: ['insert', 'update'],
    script: (current: any, previous: any) => {
        var price = parseFloat(current.getValue('unit_price'));
        if (isNaN(price) || price < 0) {
            gs.addErrorMessage('Unit price must be a positive number');
            current.setAbortAction(true);
            return;
        }

        if (!current.getValue('effective_start')) {
            current.setValue('effective_start', new GlideDateTime().getDate());
        }

        if (!current.getValue('name')) {
            var ltName = current.getDisplayValue('license_type');
            var custName = current.getDisplayValue('customer') || 'Default';
            current.setValue('name', 'Rate - ' + ltName + ' - ' + custName);
        }
    },
})

BusinessRule({
    table: 'x_snc_chargeback_license_allocation',
    name: 'Validate License Allocation',
    order: 100,
    active: true,
    when: 'before',
    action: ['insert', 'update'],
    script: (current: any, previous: any) => {
        var count = parseInt(current.getValue('allocated_count'), 10);
        if (isNaN(count) || count < 0) {
            gs.addErrorMessage('Allocated count must be a non-negative number');
            current.setAbortAction(true);
            return;
        }

        if (!current.getValue('effective_date')) {
            current.setValue('effective_date', new GlideDateTime().getDate());
        }

        if (!current.getValue('end_date')) {
            var endDate = new GlideDateTime();
            endDate.addYearsLocalTime(1);
            current.setValue('end_date', endDate.getDate());
        }

        if (!current.getValue('name')) {
            var custName = current.getDisplayValue('customer');
            var ltName = current.getDisplayValue('license_type');
            current.setValue('name', 'ALLO - ' + custName + ' - ' + ltName);
        }
    },
})

BusinessRule({
    table: 'x_snc_chargeback_invoice_line',
    name: 'Calculate Invoice Line Totals',
    order: 100,
    active: true,
    when: 'before',
    action: ['insert', 'update'],
    script: (current: any, previous: any) => {
        var count = parseFloat(current.getValue('license_count')) || 0;
        var price = parseFloat(current.getValue('unit_price')) || 0;
        var discount = parseInt(current.getValue('discount_percent'), 10) || 0;

        var lineTotal = count * price;
        var discountAmount = lineTotal * (discount / 100);
        var netTotal = lineTotal - discountAmount;

        current.setValue('line_total', Math.round(lineTotal * 100) / 100);
        current.setValue('discount_amount', Math.round(discountAmount * 100) / 100);
        current.setValue('net_total', Math.round(netTotal * 100) / 100);
    },
})

BusinessRule({
    table: 'x_snc_chargeback_chargeback_run',
    name: 'Lock Invoiced Chargeback Run',
    order: 100,
    active: true,
    when: 'before',
    action: ['update'],
    script: (current: any, previous: any) => {
        if (previous.getValue('status') === 'invoiced' || previous.getValue('status') === 'paid') {
            gs.addErrorMessage('Cannot modify a chargeback run that has been invoiced or paid');
            current.setAbortAction(true);
            return;
        }
    },
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_customer',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_customer',
    operation: 'write',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_customer',
    operation: 'create',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_customer',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_license_type',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_license_type',
    operation: 'write',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_license_type',
    operation: 'create',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_license_type',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_rate_card',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_rate_card',
    operation: 'write',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_rate_card',
    operation: 'create',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_rate_card',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_license_allocation',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_license_allocation',
    operation: 'write',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_license_allocation',
    operation: 'create',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_license_allocation',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_chargeback_run',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_chargeback_run',
    operation: 'write',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_chargeback_run',
    operation: 'create',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_chargeback_run',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_invoice_line',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_invoice_line',
    operation: 'write',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_invoice_line',
    operation: 'create',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_invoice_line',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_onboarding_request',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_onboarding_request',
    operation: 'write',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_onboarding_request',
    operation: 'create',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    type: 'record',
    table: 'x_snc_chargeback_onboarding_request',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})
