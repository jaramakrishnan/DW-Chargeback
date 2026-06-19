function onSubmit() {
    var email = g_form.getValue('contact_email');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        g_form.showFieldMsg('contact_email', 'Please enter a valid email address', 'error');
        return false;
    }

    var customerEmail = g_form.getValue('customer_email');
    if (customerEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
        g_form.showFieldMsg('customer_email', 'Please enter a valid email address', 'error');
        return false;
    }

    return true;
}
