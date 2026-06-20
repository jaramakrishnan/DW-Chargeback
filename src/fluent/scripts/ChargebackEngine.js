var ChargebackEngine = Class.create();
ChargebackEngine.prototype = {
    initialize: function() {},
    runCalculation: function(chargebackRunSysId) {
        var run = new GlideRecord('x_snc_chargeback_chargeback_run');
        run.get(chargebackRunSysId);
        var result = { success: true, linesGenerated: 0, totalAmount: 0 };

        var startDate = run.getValue('billing_period_start');
        var endDate = run.getValue('billing_period_end');

        var invLine = new GlideRecord('x_snc_chargeback_invoice_line');
        invLine.addQuery('chargeback_run', chargebackRunSysId);
        invLine.deleteMultiple();

        var cust = new GlideRecord('x_snc_chargeback_customer');
        cust.addQuery('status', 'active');
        cust.query();

        var lineCount = 0;
        var totalAmount = 0;

        while (cust.next()) {
            var alloc = new GlideRecord('x_snc_chargeback_license_allocation');
            alloc.addQuery('customer', cust.getUniqueValue());
            alloc.addQuery('effective_date', '<=', endDate);
            alloc.addQuery('end_date', '>=', startDate);
            alloc.query();

            while (alloc.next()) {
                var rate = new GlideRecord('x_snc_chargeback_rate_card');
                rate.addQuery('customer', cust.getUniqueValue());
                rate.addQuery('license_type', alloc.getValue('license_type'));
                rate.addQuery('effective_start', '<=', endDate);
                rate.addQuery('effective_end', '>=', startDate);
                rate.query();

                var unitPrice = 0;
                if (rate.next()) {
                    unitPrice = parseFloat(rate.getValue('unit_price')) || 0;
                }

                var line = new GlideRecord('x_snc_chargeback_invoice_line');
                line.initialize();
                line.setValue('chargeback_run', chargebackRunSysId);
                line.setValue('customer', cust.getUniqueValue());
                line.setValue('license_type', alloc.getValue('license_type'));
                line.setValue('license_count', alloc.getValue('allocated_count'));
                line.setValue('unit_price', unitPrice);
                line.setValue('line_total', unitPrice * parseInt(alloc.getValue('allocated_count')));
                line.setValue('billing_period_start', startDate);
                line.setValue('billing_period_end', endDate);
                var lineId = line.insert();

                if (lineId) {
                    lineCount++;
                    totalAmount += unitPrice * parseInt(alloc.getValue('allocated_count'));
                }
            }
        }

        run.setValue('total_amount', totalAmount);
        run.setValue('customer_count', lineCount);
        run.setValue('status', 'calculated');
        run.update();

        result.linesGenerated = lineCount;
        result.totalAmount = totalAmount;
        return JSON.stringify(result);
    },
    type: 'ChargebackEngine'
};