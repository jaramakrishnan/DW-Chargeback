import { Table, StringColumn, ReferenceColumn, IntegerColumn, DateColumn, ChoiceColumn } from '@servicenow/sdk/core'

Table({
    name: 'x_snc_chargeback_license_allocation',
    label: 'License Allocation',
    display: 'name',
    extensible: false,
    schema: {
        name: StringColumn({ label: 'Name', maxLength: 200 }),
        customer: ReferenceColumn({ label: 'Customer', referenceTable: 'x_snc_chargeback_customer', mandatory: true }),
        license_type: ReferenceColumn({ label: 'License Type', referenceTable: 'x_snc_chargeback_license_type', mandatory: true }),
        allocated_count: IntegerColumn({ label: 'Allocated Count', mandatory: true, default: 0 }),
        used_count: IntegerColumn({ label: 'Currently Used', default: 0 }),
        effective_date: DateColumn({ label: 'Effective Date' }),
        end_date: DateColumn({ label: 'End Date' }),
        allocation_type: ChoiceColumn({
            label: 'Allocation Type',
            choices: {
                new: { label: 'New Allocation' },
                renewal: { label: 'Renewal' },
                adjustment: { label: 'Adjustment' },
            } as const,
            default: 'new',
            dropdown: 'dropdown_without_none',
        }),
        notes: StringColumn({ label: 'Notes', maxLength: 1000, isFullUTF8: true }),
    },
})
