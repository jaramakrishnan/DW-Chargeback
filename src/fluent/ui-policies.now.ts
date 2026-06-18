import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
  $id: Now.ID['uip-customer-tier-fields'],
  table: 'x_snc_chargeback_customer',
  shortDescription: 'Show tier fields only when charge model is Tiered Package',
  onLoad: true,
  global: true,
  reverseIfFalse: true,
  conditions: "charge_model.name=Tiered Package",
  actions: [
    { field: 'monthly_tier_fee', visible: true },
    { field: 'tier_package', visible: true },
  ],
})
