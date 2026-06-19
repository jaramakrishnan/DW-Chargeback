function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || isTemplate) return;
    if (!newValue) return;

    var ltSelect = g_form.getControl('license_type');
    var ltText = ltSelect ? ltSelect.options[ltSelect.selectedIndex].text : '';
    var customer = g_form.getValue('customer');

    if (customer) {
        var custSelect = g_form.getControl('customer');
        var custText = custSelect ? custSelect.options[custSelect.selectedIndex].text : '';
        g_form.setValue('name', 'Rate - ' + ltText + ' - ' + custText);
    } else {
        g_form.setValue('name', 'Rate - ' + ltText + ' - Default');
    }
}
