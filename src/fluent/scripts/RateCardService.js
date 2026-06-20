var RateCardService = Class.create();
RateCardService.prototype = {
    initialize: function() {},
    getRateForCustomer: function(customerSysId, licenseTypeSysId, effectiveDate) {
        var rate = new GlideRecord('x_snc_chargeback_rate_card');
        rate.addQuery('customer', customerSysId);
        rate.addQuery('license_type', licenseTypeSysId);
        rate.addQuery('effective_start', '<=', effectiveDate);
        rate.addQuery('effective_end', '>=', effectiveDate);
        rate.addQuery('is_default', false);
        rate.query();
        if (rate.next()) {
            return { price: parseFloat(rate.getValue('unit_price')), isDefault: false };
        }
        rate = new GlideRecord('x_snc_chargeback_rate_card');
        rate.addQuery('customer', customerSysId);
        rate.addQuery('license_type', licenseTypeSysId);
        rate.addQuery('effective_start', '<=', effectiveDate);
        rate.addQuery('is_default', true);
        rate.query();
        if (rate.next()) {
            return { price: parseFloat(rate.getValue('unit_price')), isDefault: true };
        }
        var lt = new GlideRecord('x_snc_chargeback_license_type');
        if (lt.get(licenseTypeSysId)) {
            return { price: parseFloat(lt.getValue('default_unit_price')), isDefault: true };
        }
        return null;
    },
    type: 'RateCardService'
};