(function process(request, response) {
    var customerId = request.pathParams.customerId;
    var svc = new RateCardService();
    var rates = svc.getCustomerRates(customerId);

    response.setStatus(200);
    response.setBody({ result: rates });
})(request, response);
