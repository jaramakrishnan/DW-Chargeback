(function process(request, response) {
    var customerId = request.pathParams.customerId;
    var body = request.body.data;

    if (!body.license_type || !body.unit_price) {
        response.setStatus(400);
        response.setBody({ error: 'license_type and unit_price are required' });
        return;
    }

    var svc = new RateCardService();
    var resultStr = svc.setRate({
        customer: customerId,
        licenseType: body.license_type,
        unitPrice: body.unit_price,
        currency: body.currency || 'USD',
        effectiveDate: body.effective_date,
    });
    var result = typeof resultStr === 'string' ? JSON.parse(resultStr) : resultStr;

    response.setStatus(result.success ? 200 : 500);
    response.setBody({ result: result });
})(request, response);
