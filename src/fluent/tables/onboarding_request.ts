import { Table, StringColumn, ChoiceColumn, DateColumn, ReferenceColumn, EmailColumn, IntegerColumn, JsonColumn } from '@servicenow/sdk/core'

Table({
    name: 'x_snc_chargeback_onboarding_request',
    label: 'Onboarding Request',
    display: 'name',
    extensible: false,
    schema: {
        name: StringColumn({ label: 'Request Name', maxLength: 200 }),
        customer_name: StringColumn({ label: 'Customer Name', maxLength: 200, mandatory: true }),
        customer_email: EmailColumn({ label: 'Customer Email', maxLength: 200 }),
        contact_name: StringColumn({ label: 'Contact Name', maxLength: 200 }),
        contact_email: EmailColumn({ label: 'Contact Email', maxLength: 200 }),
        industry: StringColumn({ label: 'Industry', maxLength: 100 }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                new: { label: 'New' },
                review: { label: 'Under Review' },
                approved: { label: 'Approved' },
                onboarded: { label: 'Onboarded' },
                rejected: { label: 'Rejected' },
            } as const,
            default: 'new',
            dropdown: 'dropdown_without_none',
        }),
        requested_licenses: JsonColumn({ label: 'Requested Licenses (JSON)' }),
        estimated_users: IntegerColumn({ label: 'Estimated Users', default: 0 }),
        contract_term_months: IntegerColumn({ label: 'Contract Term (months)', default: 12 }),
        requested_by: ReferenceColumn({ label: 'Requested By', referenceTable: 'sys_user' }),
        assigned_to: ReferenceColumn({ label: 'Assigned To', referenceTable: 'sys_user' }),
        approval_date: DateColumn({ label: 'Approval Date' }),
        onboarding_date: DateColumn({ label: 'Onboarding Date' }),
        rejection_reason: StringColumn({ label: 'Rejection Reason', maxLength: 1000, isFullUTF8: true }),
        notes: StringColumn({ label: 'Notes', maxLength: 4000, isFullUTF8: true }),
    },
})
