import { Table, StringColumn, ReferenceColumn, DecimalColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_snc_chargeback_invoice_line = Table({
    name: 'x_snc_chargeback_invoice_line',
    label: 'Invoice Line',
    display: 'name',
    extensible: false,
    schema: {
        name: StringColumn({ label: 'Line Name', maxLength: 200 }),
        chargeback_run: ReferenceColumn({ label: 'Chargeback Run', referenceTable: 'x_snc_chargeback_chargeback_run', mandatory: true }),
        customer: ReferenceColumn({ label: 'Customer', referenceTable: 'x_snc_chargeback_customer', mandatory: true }),
        license_type: ReferenceColumn({ label: 'License Type', referenceTable: 'x_snc_chargeback_license_type', mandatory: true }),
        license_count: IntegerColumn({ label: 'License Count', mandatory: true, default: 0 }),
        unit_price: DecimalColumn({ label: 'Unit Price', scale: 2, mandatory: true }),
        line_total: DecimalColumn({ label: 'Line Total', scale: 2, default: 0 }),
        discount_percent: IntegerColumn({ label: 'Discount %', default: 0, min: 0, max: 100 }),
        discount_amount: DecimalColumn({ label: 'Discount Amount', scale: 2, default: 0 }),
        net_total: DecimalColumn({ label: 'Net Total', scale: 2, default: 0 }),
        currency: StringColumn({ label: 'Currency', maxLength: 3, default: 'USD' }),
        billing_period_start: StringColumn({ label: 'Billing Period Start (from run)' }),
        billing_period_end: StringColumn({ label: 'Billing Period End (from run)' }),
        notes: StringColumn({ label: 'Notes', maxLength: 1000, isFullUTF8: true }),
    },
})
