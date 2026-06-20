(function execute() {
    var run = new GlideRecord('x_snc_chargeback_chargeback_run');
    run.initialize();
    var gdt = new GlideDateTime();
    var startDate = gdt.getMonthStart().getDate();
    var endDate = gdt.getMonthEnd().getDate();
    run.setValue('name', 'Auto-Run ' + gdt.getDisplayValue());
    run.setValue('billing_period_start', startDate);
    run.setValue('billing_period_end', endDate);
    run.setValue('run_date', gdt);
    var runId = run.insert();
    if (runId) {
        var engine = new ChargebackEngine();
        engine.runCalculation(runId);
    }
})();