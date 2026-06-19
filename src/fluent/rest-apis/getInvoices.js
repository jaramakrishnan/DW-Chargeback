(function process(request, response) {
    var runId = request.pathParams.runId;
    var svc = new InvoiceService();

    var format = request.queryParams.format;
    if (format === 'summary') {
        var summary = svc.getInvoiceSummaryByCustomer(runId);
        response.setStatus(200);
        response.setBody({ result: summary });
    } else {
        var lines = svc.getInvoiceLines(runId);
        response.setStatus(200);
        response.setBody({ result: lines });
    }
})(request, response);
