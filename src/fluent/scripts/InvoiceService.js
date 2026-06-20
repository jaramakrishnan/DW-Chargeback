var InvoiceService = Class.create();
InvoiceService.prototype = {
    initialize: function() {},
    markAsInvoiced: function(chargebackRunSysId) {
        var run = new GlideRecord('x_snc_chargeback_chargeback_run');
        run.get(chargebackRunSysId);
        if (run.getValue('status') !== 'calculated') {
            return JSON.stringify({ success: false, error: 'Run must be in calculated status' });
        }
        run.setValue('status', 'invoiced');
        run.update();
        return JSON.stringify({ success: true });
    },
    type: 'InvoiceService'
};