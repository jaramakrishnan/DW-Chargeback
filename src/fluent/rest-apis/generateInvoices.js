(function process(request, response) {
    var runId = request.pathParams.runId;
    var svc = new InvoiceService();
    var resultStr = svc.markAsInvoiced(runId);
    var result = typeof resultStr === 'string' ? JSON.parse(resultStr) : resultStr;

    if (result.success) {
        response.setStatus(200);
        response.setBody({ result: { status: 'invoiced' } });
    } else {
        response.setStatus(400);
        response.setBody({ error: result.error });
    }
})(request, response);
