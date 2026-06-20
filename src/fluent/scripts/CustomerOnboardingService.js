var CustomerOnboardingService = Class.create();
CustomerOnboardingService.prototype = {
    initialize: function() {},
    onboardCustomer: function(requestSysId) {
        var req = new GlideRecord('x_snc_chargeback_onboarding_request');
        if (!req.get(requestSysId)) {
            return JSON.stringify({ success: false, error: 'Request not found' });
        }
        var cust = new GlideRecord('x_snc_chargeback_customer');
        cust.initialize();
        cust.setValue('name', req.getValue('customer_name'));
        cust.setValue('contact_email', req.getValue('contact_email'));
        cust.setValue('industry', req.getValue('industry'));
        cust.setValue('onboarding_date', new GlideDateTime().getDate());
        var custId = cust.insert();
        if (!custId) {
            return JSON.stringify({ success: false, error: 'Failed to create customer' });
        }
        req.setValue('status', 'onboarded');
        req.update();
        return JSON.stringify({ success: true, customerId: custId, licensesCreated: 0 });
    },
    type: 'CustomerOnboardingService'
};