import { Table, StringColumn, ChoiceColumn, DateColumn, ReferenceColumn, EmailColumn, IntegerColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_snc_chargeback_customer = Table({
    name: 'x_snc_chargeback_customer',
    label: 'Customer',
    display: 'name',
    extensible: false,
    schema: {
        customer_id: StringColumn({ label: 'Customer ID', maxLength: 50, mandatory: true, unique: true }),
        name: StringColumn({ label: 'Customer Name', maxLength: 200, mandatory: true }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                pending: { label: 'Pending Onboarding' },
                active: { label: 'Active' },
                suspended: { label: 'Suspended' },
                terminated: { label: 'Terminated' },
            } as const,
            default: 'pending',
            dropdown: 'dropdown_without_none',
        }),
        industry: StringColumn({ label: 'Industry', maxLength: 100 }),
        primary_contact: ReferenceColumn({ label: 'Primary Contact', referenceTable: 'sys_user' }),
        billing_contact: ReferenceColumn({ label: 'Billing Contact', referenceTable: 'sys_user' }),
        contact_email: EmailColumn({ label: 'Contact Email', maxLength: 200 }),
        contact_phone: StringColumn({ label: 'Contact Phone', maxLength: 30 }),
        contract_start_date: DateColumn({ label: 'Contract Start Date' }),
        contract_end_date: DateColumn({ label: 'Contract End Date' }),
        billing_cycle: ChoiceColumn({
            label: 'Billing Cycle',
            choices: {
                monthly: { label: 'Monthly' },
                quarterly: { label: 'Quarterly' },
                annual: { label: 'Annual' },
            } as const,
            default: 'monthly',
            dropdown: 'dropdown_without_none',
        }),
        currency: StringColumn({ label: 'Currency', maxLength: 3, default: 'USD' }),
        onboarding_date: DateColumn({ label: 'Onboarding Date' }),
        termination_date: DateColumn({ label: 'Termination Date' }),
        notes: StringColumn({ label: 'Notes', maxLength: 4000, isFullUTF8: true }),
        is_tax_exempt: BooleanColumn({ label: 'Tax Exempt', default: false }),
        discount_percent: IntegerColumn({ label: 'Discount %', default: 0, min: 0, max: 100 }),
    },
})
