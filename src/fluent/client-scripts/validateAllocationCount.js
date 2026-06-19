function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || isTemplate) return;

    var count = parseInt(newValue, 10);
    if (isNaN(count) || count < 0) {
        g_form.showFieldMsg('allocated_count', 'Count must be a non-negative number', 'error');
        return;
    }

    var licenseType = g_form.getValue('license_type');
    if (licenseType && count > 0) {
        var ga = new GlideAjax('LicenseAllocationService');
        ga.addParam('sysparm_name', 'validateAllocation');
        ga.addParam('sysparm_customer', g_form.getValue('customer'));
        ga.addParam('sysparm_license_type', licenseType);
        ga.addParam('sysparm_count', String(count));
        ga.getXMLAnswer(function(response) {
            var result = JSON.parse(response);
            if (!result.valid && result.errors) {
                result.errors.forEach(function(err) {
                    g_form.showFieldMsg('allocated_count', err, 'error');
                });
            }
        });
    }
}
