import {
  Table,
  StringColumn,
  BooleanColumn,
  IntegerColumn,
  DecimalColumn,
  ReferenceColumn,
} from '@servicenow/sdk/core'

export const x_snc_chargeback_lob = Table({
  name: 'x_snc_chargeback_lob',
  label: 'LOB',
  display: 'name',
  schema: {
    name: StringColumn({ label: 'Name', mandatory: true, maxLength: 100 }),
    cost_center: StringColumn({ label: 'Cost Center', maxLength: 40 }),
    active: BooleanColumn({ label: 'Active', default: true }),
    fulfiller_count: IntegerColumn({ label: 'Fulfiller Count', readOnly: true, default: 0 }),
    notes: StringColumn({ label: 'Notes', maxLength: 500 }),
    model_type: StringColumn({
      label: 'Model Type',
      choices: {
        headcount: 'Headcount',
        usage: 'Usage',
        hybrid: 'Hybrid',
        tiered: 'Tiered',
      },
      default: 'hybrid',
    }),
    charge_model: ReferenceColumn({
      label: 'Charge Model',
      referenceTable: 'x_snc_chargeback_charge_model',
      active: false,
    }),
    tier_package: StringColumn({
      label: 'Tier Package',
      choices: {
        basic: 'Basic',
        standard: 'Standard',
        premium: 'Premium',
      },
      active: false,
    }),
    monthly_tier_fee: DecimalColumn({
      label: 'Monthly Tier Fee',
      scale: 2,
      default: 0,
      active: false,
    }),
    parent_lob: ReferenceColumn({
      label: 'Parent LOB',
      referenceTable: 'x_snc_chargeback_lob',
    }),
  },
})

export const x_snc_chargeback_charge_model = Table({
  name: 'x_snc_chargeback_charge_model',
  label: 'Charge Model',
  display: 'name',
  schema: {
    name: StringColumn({ label: 'Name', mandatory: true, maxLength: 100, unique: true }),
    description: StringColumn({ label: 'Description', maxLength: 500 }),
    formula: StringColumn({ label: 'Formula', maxLength: 500 }),
    needs_user_count: BooleanColumn({ label: 'Needs User Count', default: false }),
    needs_transaction_count: BooleanColumn({ label: 'Needs Transaction Count', default: false }),
    needs_tier_lookup: BooleanColumn({ label: 'Needs Tier Lookup', default: false }),
    is_recommended: BooleanColumn({ label: 'Is Recommended', default: false }),
    active: BooleanColumn({ label: 'Active', default: true }),
    sort_order: IntegerColumn({ label: 'Sort Order', default: 0 }),
  },
})

export const x_snc_chargeback_customer = Table({
  name: 'x_snc_chargeback_customer',
  label: 'Customer',
  display: 'name',
  schema: {
    name: StringColumn({ label: 'Name', mandatory: true, maxLength: 100 }),
    lob: ReferenceColumn({
      label: 'LOB',
      referenceTable: 'x_snc_chargeback_lob',
      mandatory: true,
    }),
    cost_center: StringColumn({ label: 'Cost Center', maxLength: 40 }),
    active: BooleanColumn({ label: 'Active', default: true }),
    fulfiller_count: IntegerColumn({ label: 'Fulfiller Count', readOnly: true, default: 0 }),
    charge_model: ReferenceColumn({
      label: 'Charge Model',
      referenceTable: 'x_snc_chargeback_charge_model',
      mandatory: true,
    }),
    tier_package: StringColumn({
      label: 'Tier Package',
      choices: {
        basic: 'Basic',
        standard: 'Standard',
        premium: 'Premium',
      },
    }),
    monthly_tier_fee: DecimalColumn({ label: 'Monthly Tier Fee', scale: 2, default: 0 }),
    notes: StringColumn({ label: 'Notes', maxLength: 500 }),
  },
})
