import { GlideRecord } from '@servicenow/glide'

export function countFulfillers(current: any) {
  const lobName = current.getValue('name')
  if (!lobName) return

  const gr = new GlideRecord('sys_user')
  gr.addQuery('department.name', lobName)
  gr.addQuery('active', true)
  gr.query()

  const count = gr.getRowCount()
  current.setValue('fulfiller_count', count)
}

export function countCustomerFulfillers(current: any) {
  const customerName = current.getValue('name')
  if (!customerName) return

  const gr = new GlideRecord('sys_user')
  gr.addQuery('department.name', customerName)
  gr.addQuery('active', true)
  gr.query()

  current.setValue('fulfiller_count', gr.getRowCount())
}

export function autoPopulateCustomerChargeModel(current: any) {
  if (current.isNewRecord() && !current.getValue('charge_model')) {
    const lobGr = new GlideRecord('x_snc_chargeback_lob')
    if (lobGr.get(current.getValue('lob'))) {
      current.setValue('charge_model', lobGr.getValue('charge_model'))
    }
  }
}

export function processCustomer(current: any) {
  countCustomerFulfillers(current)
  autoPopulateCustomerChargeModel(current)
}
