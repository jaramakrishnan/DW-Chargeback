(function process(request, response) {
    var customerId = request.pathParams.customerId;
    var svc = new LicenseAllocationService();
    var allocations = svc.getCustomerAllocations(customerId);

    response.setStatus(200);
    response.setBody({ result: allocations });
})(request, response);
