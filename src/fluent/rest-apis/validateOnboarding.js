(function process(request, response) {
    var requestId = request.pathParams.requestId;
    var gr = new GlideRecord('x_snc_chargeback_onboarding_request');
    if (!gr.get(requestId)) {
        response.setStatus(404);
        response.setBody({ error: 'Request not found' });
        return;
    }

    var svc = new CustomerOnboardingService();
    var result = svc.validateRequest({
        customer_name: gr.getValue('customer_name'),
        contact_email: gr.getValue('contact_email'),
        requested_licenses: gr.getValue('requested_licenses'),
    });

    response.setStatus(200);
    response.setBody({ result: result });
})(request, response);
