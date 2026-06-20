import { Table, StringColumn, ReferenceColumn, DecimalColumn, DateColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_snc_chargeback_rate_card = Table({
    name: 'x_snc_chargeback_rate_card',
    label: 'Rate Card',
    display: 'name',
    extensible: false,
    schema: {
        name: StringColumn({ label: 'Rate Name', maxLength: 200 }),
        customer: ReferenceColumn({ label: 'Customer', referenceTable: 'x_snc_chargeback_customer' }),
        license_type: ReferenceColumn({ label: 'License Type', referenceTable: 'x_snc_chargeback_license_type', mandatory: true }),
        unit_price: DecimalColumn({ label: 'Unit Price', scale: 2, mandatory: true }),
        currency: StringColumn({ label: 'Currency', maxLength: 3, default: 'USD' }),
        effective_start: DateColumn({ label: 'Effective Start Date' }),
        effective_end: DateColumn({ label: 'Effective End Date' }),
        is_default: BooleanColumn({ label: 'Default Rate (fallback)', default: false }),
        notes: StringColumn({ label: 'Notes', maxLength: 1000, isFullUTF8: true }),
    },
})
