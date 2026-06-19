import { UiAction } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

UiAction({
    table: 'x_snc_chargeback_chargeback_run',
    name: 'Run Chargeback Calculation',
    actionName: 'calculate_chargeback',
    label: 'Calculate',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    showInsert: false,
    showUpdate: true,
    showList: true,
    button: true,
    formContextMenu: true,
    listContextMenu: true,
    condition: "current.status == 'draft'",
    onclick: `
        function calculateChargeback() {
            if (!confirm('Run chargeback calculation for this billing period?')) return;

            var ga = new GlideAjax('ChargebackEngine');
            ga.addParam('sysparm_name', 'runCalculation');
            ga.addParam('sysparm_chargeback_run', g_form.getUniqueValue());
            ga.getXMLAnswer(function(response) {
                var result = JSON.parse(response);
                if (result.success) {
                    g_form.addInfoMessage('Calculation complete. ' +
                        result.linesGenerated + ' invoice lines generated. ' +
                        'Total: ' + result.totalAmount);
                    g_form.refresh();
                } else {
                    g_form.addErrorMessage('Calculation failed: ' +
                        (result.error || 'Unknown error'));
                }
            });
        }
    `,
    active: true,
})

UiAction({
    table: 'x_snc_chargeback_chargeback_run',
    name: 'Generate Invoices',
    actionName: 'generate_invoices',
    label: 'Generate Invoices',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    showInsert: false,
    showUpdate: true,
    showList: true,
    button: true,
    formContextMenu: true,
    listContextMenu: true,
    condition: "current.status == 'calculated'",
    onclick: `
        function generateInvoices() {
            if (!confirm('Mark this chargeback run as Invoiced? This will lock the run.')) return;

            var ga = new GlideAjax('InvoiceService');
            ga.addParam('sysparm_name', 'markAsInvoiced');
            ga.addParam('sysparm_chargeback_run', g_form.getUniqueValue());
            ga.getXMLAnswer(function(response) {
                var result = JSON.parse(response);
                if (result.success) {
                    g_form.addInfoMessage('Invoices generated successfully');
                    g_form.refresh();
                } else {
                    g_form.addErrorMessage(result.error || 'Failed to generate invoices');
                }
            });
        }
    `,
    active: true,
})

UiAction({
    table: 'x_snc_chargeback_onboarding_request',
    name: 'Approve Onboarding Request',
    actionName: 'approve_onboarding',
    label: 'Approve',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    showInsert: false,
    showUpdate: true,
    button: true,
    formContextMenu: true,
    condition: "current.status == 'new' || current.status == 'review'",
    onclick: `
        function approveOnboarding() {
            if (!confirm('Approve this onboarding request?')) return;
            g_form.setValue('status', 'approved');
            g_form.setValue('approval_date', new Date().toISOString().split('T')[0]);
            g_form.save();

            // Auto-onboard
            var ga = new GlideAjax('CustomerOnboardingService');
            ga.addParam('sysparm_name', 'onboardCustomer');
            ga.addParam('sysparm_request', g_form.getUniqueValue());
            ga.getXMLAnswer(function(response) {
                var result = JSON.parse(response);
                if (result.success) {
                    g_form.addInfoMessage('Customer onboarded successfully. ' +
                        result.licensesCreated + ' licenses created.');
                    g_form.refresh();
                } else {
                    g_form.addErrorMessage(result.error || 'Onboarding failed');
                }
            });
        }
    `,
    active: true,
})

UiAction({
    table: 'x_snc_chargeback_onboarding_request',
    name: 'Reject Onboarding Request',
    actionName: 'reject_onboarding',
    label: 'Reject',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    showInsert: false,
    showUpdate: true,
    button: true,
    formContextMenu: true,
    condition: "current.status == 'new' || current.status == 'review'",
    onclick: `
        function rejectOnboarding() {
            var reason = prompt('Please provide a reason for rejection:');
            if (reason === null) return;
            g_form.setValue('status', 'rejected');
            g_form.setValue('rejection_reason', reason);
            g_form.save();
        }
    `,
    active: true,
})

UiAction({
    table: 'x_snc_chargeback_onboarding_request',
    name: 'Submit for Review',
    actionName: 'submit_for_review',
    label: 'Submit for Review',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.onboarding_specialist'],
    showInsert: false,
    showUpdate: true,
    button: true,
    formContextMenu: true,
    condition: "current.status == 'new'",
    onclick: `
        function submitForReview() {
            g_form.setValue('status', 'review');
            g_form.save();
        }
    `,
    active: true,
})
