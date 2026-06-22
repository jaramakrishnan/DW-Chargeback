import { Table, StringColumn, ReferenceColumn, IntegerColumn, DecimalColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_snc_chargeback_chargeback_result = Table({
    name: 'x_snc_chargeback_chargeback_result',
    label: 'Chargeback Result',
    display: 'month_year',
    extensible: false,
    schema: {
        customer: ReferenceColumn({ label: 'Customer', referenceTable: 'x_snc_chargeback_customer', mandatory: true }),
        rate_card: ReferenceColumn({ label: 'Rate Card', referenceTable: 'x_snc_chargeback_rate_card', mandatory: true }),
        month_year: StringColumn({ label: 'Month/Year', maxLength: 20 }),
        user_count: IntegerColumn({ label: 'User Count', default: 0 }),
        transaction_count: IntegerColumn({ label: 'Transaction Count', default: 0 }),
        fixed_charge: DecimalColumn({ label: 'Fixed Charge', scale: 2, default: 0 }),
        variable_charge: DecimalColumn({ label: 'Variable Charge', scale: 2, default: 0 }),
        tier_charge: DecimalColumn({ label: 'Tier Charge', scale: 2, default: 0 }),
        total_charge: DecimalColumn({ label: 'Total Charge', scale: 2, default: 0 }),
        charge_model_used: ReferenceColumn({ label: 'Charge Model Used', referenceTable: 'x_snc_chargeback_charge_model' }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                calculated: { label: 'Calculated' },
                approved: { label: 'Approved' },
                disputed: { label: 'Disputed' },
                billed: { label: 'Billed' },
                paid: { label: 'Paid' },
            } as const,
            default: 'calculated',
            dropdown: 'dropdown_without_none',
        }),
        notes: StringColumn({ label: 'Notes', maxLength: 500 }),
    },
    index: [
        {
            name: 'idx_unique_customer_rate_card',
            unique: true,
            element: ['customer', 'rate_card'],
        },
    ],
})
