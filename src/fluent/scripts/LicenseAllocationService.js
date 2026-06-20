var LicenseAllocationService = Class.create();
LicenseAllocationService.prototype = {
    initialize: function() {},
    validateAllocation: function(customerSysId, licenseTypeSysId, count) {
        var lt = new GlideRecord('x_snc_chargeback_license_type');
        if (!lt.get(licenseTypeSysId)) {
            return { valid: false, error: 'License type not found' };
        }
        var maxAlloc = parseInt(lt.getValue('max_allocations')) || 0;
        if (maxAlloc > 0 && count > maxAlloc) {
            return { valid: false, error: 'Exceeds maximum allocations for this license type' };
        }
        return { valid: true };
    },
    type: 'LicenseAllocationService'
};