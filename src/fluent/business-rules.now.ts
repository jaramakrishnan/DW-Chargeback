import { BusinessRule } from '@servicenow/sdk/core'
import { countFulfillers, processCustomer } from '../server/chargeback-utils'

BusinessRule({
  $id: Now.ID['br-count-fulfillers'],
  name: 'Count LOB Fulfillers',
  table: 'x_snc_chargeback_lob',
  when: 'after',
  action: ['insert', 'update'],
  order: 100,
  script: countFulfillers,
})

BusinessRule({
  $id: Now.ID['br-customer-fulfillers'],
  name: 'Count Customer Fulfillers & Set Charge Model',
  table: 'x_snc_chargeback_customer',
  when: 'after',
  action: ['insert', 'update'],
  order: 100,
  script: processCustomer,
})
