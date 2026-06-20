import { BusinessRule, Acl } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

BusinessRule({
    $id: 'br-validate-contract-dates',
    table: 'x_snc_chargeback_customer',
    name: 'Validate Customer Contract Dates',
    order: 100,
    active: true,
    when: 'before',
    action: ['insert', 'update'],
    script: `
        if (current.contract_end_date &&
            current.contract_start_date &&
            current.contract_end_date < current.contract_start_date) {
            gs.addErrorMessage('Contract end date must be after start date');
            current.setAbortAction(true);
            return;
        }

        if (current.termination_date &&
            current.contract_start_date &&
            current.termination_date < current.contract_start_date) {
            gs.addErrorMessage('Termination date must be after contract start date');
            current.setAbortAction(true);
            return;
        }
    `,
})

BusinessRule({
    $id: 'br-validate-rate-price',
    table: 'x_snc_chargeback_rate_card',
    name: 'Validate Rate Card Price',
    order: 100,
    active: true,
    when: 'before',
    action: ['insert', 'update'],
    script: `
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
    `,
})

BusinessRule({
    $id: 'br-validate-license-allocation',
    table: 'x_snc_chargeback_license_allocation',
    name: 'Validate License Allocation',
    order: 100,
    active: true,
    when: 'before',
    action: ['insert', 'update'],
    script: `
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
    `,
})

BusinessRule({
    $id: 'br-calc-invoice-totals',
    table: 'x_snc_chargeback_invoice_line',
    name: 'Calculate Invoice Line Totals',
    order: 100,
    active: true,
    when: 'before',
    action: ['insert', 'update'],
    script: `
        var count = parseFloat(current.getValue('license_count')) || 0;
        var price = parseFloat(current.getValue('unit_price')) || 0;
        var discount = parseInt(current.getValue('discount_percent'), 10) || 0;

        var lineTotal = count * price;
        var discountAmount = lineTotal * (discount / 100);
        var netTotal = lineTotal - discountAmount;

        current.setValue('line_total', Math.round(lineTotal * 100) / 100);
        current.setValue('discount_amount', Math.round(discountAmount * 100) / 100);
        current.setValue('net_total', Math.round(netTotal * 100) / 100);
    `,
})

BusinessRule({
    $id: 'br-lock-invoiced-run',
    table: 'x_snc_chargeback_chargeback_run',
    name: 'Lock Invoiced Chargeback Run',
    order: 100,
    active: true,
    when: 'before',
    action: ['update'],
    script: `
        if (previous.status === 'invoiced' || previous.status === 'paid') {
            gs.addErrorMessage('Cannot modify a chargeback run that has been invoiced or paid');
            current.setAbortAction(true);
            return;
        }
    `,
})

Acl({
    $id: 'acl-customer-read',
    type: 'record',
    table: 'x_snc_chargeback_customer',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-customer-write',
    type: 'record',
    table: 'x_snc_chargeback_customer',
    operation: 'write',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-customer-create',
    type: 'record',
    table: 'x_snc_chargeback_customer',
    operation: 'create',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-customer-delete',
    type: 'record',
    table: 'x_snc_chargeback_customer',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-lictype-read',
    type: 'record',
    table: 'x_snc_chargeback_license_type',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-lictype-write',
    type: 'record',
    table: 'x_snc_chargeback_license_type',
    operation: 'write',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-lictype-create',
    type: 'record',
    table: 'x_snc_chargeback_license_type',
    operation: 'create',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-lictype-delete',
    type: 'record',
    table: 'x_snc_chargeback_license_type',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-ratecard-read',
    type: 'record',
    table: 'x_snc_chargeback_rate_card',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-ratecard-write',
    type: 'record',
    table: 'x_snc_chargeback_rate_card',
    operation: 'write',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-ratecard-create',
    type: 'record',
    table: 'x_snc_chargeback_rate_card',
    operation: 'create',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-ratecard-delete',
    type: 'record',
    table: 'x_snc_chargeback_rate_card',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-licalloc-read',
    type: 'record',
    table: 'x_snc_chargeback_license_allocation',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-licalloc-write',
    type: 'record',
    table: 'x_snc_chargeback_license_allocation',
    operation: 'write',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-licalloc-create',
    type: 'record',
    table: 'x_snc_chargeback_license_allocation',
    operation: 'create',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-licalloc-delete',
    type: 'record',
    table: 'x_snc_chargeback_license_allocation',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-cbrun-read',
    type: 'record',
    table: 'x_snc_chargeback_chargeback_run',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-cbrun-write',
    type: 'record',
    table: 'x_snc_chargeback_chargeback_run',
    operation: 'write',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-cbrun-create',
    type: 'record',
    table: 'x_snc_chargeback_chargeback_run',
    operation: 'create',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-cbrun-delete',
    type: 'record',
    table: 'x_snc_chargeback_chargeback_run',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-invline-read',
    type: 'record',
    table: 'x_snc_chargeback_invoice_line',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-invline-write',
    type: 'record',
    table: 'x_snc_chargeback_invoice_line',
    operation: 'write',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-invline-create',
    type: 'record',
    table: 'x_snc_chargeback_invoice_line',
    operation: 'create',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-invline-delete',
    type: 'record',
    table: 'x_snc_chargeback_invoice_line',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-onboard-read',
    type: 'record',
    table: 'x_snc_chargeback_onboarding_request',
    operation: 'read',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-onboard-write',
    type: 'record',
    table: 'x_snc_chargeback_onboarding_request',
    operation: 'write',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-onboard-create',
    type: 'record',
    table: 'x_snc_chargeback_onboarding_request',
    operation: 'create',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    decisionType: 'allow',
    active: true,
})

Acl({
    $id: 'acl-onboard-delete',
    type: 'record',
    table: 'x_snc_chargeback_onboarding_request',
    operation: 'delete',
    roles: ['x_snc_chargeback.admin'],
    decisionType: 'allow',
    active: true,
})