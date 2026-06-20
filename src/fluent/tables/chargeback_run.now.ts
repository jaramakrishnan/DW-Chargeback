import { Table, StringColumn, ChoiceColumn, DateColumn, DateTimeColumn, DecimalColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_snc_chargeback_chargeback_run = Table({
    name: 'x_snc_chargeback_chargeback_run',
    label: 'Chargeback Run',
    display: 'name',
    extensible: false,
    schema: {
        name: StringColumn({ label: 'Run Name', maxLength: 200 }),
        billing_period_start: DateColumn({ label: 'Billing Period Start', mandatory: true }),
        billing_period_end: DateColumn({ label: 'Billing Period End', mandatory: true }),
        run_date: DateTimeColumn({ label: 'Run Date' }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                draft: { label: 'Draft' },
                calculated: { label: 'Calculated' },
                invoiced: { label: 'Invoiced' },
                paid: { label: 'Paid' },
                cancelled: { label: 'Cancelled' },
            } as const,
            default: 'draft',
            dropdown: 'dropdown_without_none',
        }),
        total_amount: DecimalColumn({ label: 'Total Amount', scale: 2, default: 0 }),
        customer_count: IntegerColumn({ label: 'Customer Count', default: 0 }),
        invoice_count: IntegerColumn({ label: 'Invoice Lines', default: 0 }),
        notes: StringColumn({ label: 'Notes', maxLength: 1000, isFullUTF8: true }),
    },
})
