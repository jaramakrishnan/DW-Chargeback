function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || isTemplate) return;
    if (!newValue || newValue === oldValue) return;

    if (newValue === 'cancelled' && oldValue !== 'draft') {
        if (!confirm('Are you sure you want to cancel this chargeback run? This will not delete existing invoice lines.')) {
            g_form.setValue('status', oldValue);
            return;
        }
    }

    if (newValue === 'paid' && oldValue !== 'invoiced') {
        alert('Chargeback run must be in Invoiced status before marking as Paid.');
        g_form.setValue('status', oldValue);
        return;
    }
}
