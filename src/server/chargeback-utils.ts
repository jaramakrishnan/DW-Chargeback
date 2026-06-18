import { GlideRecord } from '@servicenow/glide'
import { gs } from '@servicenow/glide'

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

export function validateRateCard(current: any) {
  const fixed = parseFloat(current.getValue('fixed_percentage'))
  const variable = parseFloat(current.getValue('variable_percentage'))

  if (fixed + variable !== 100) {
    current.setAbortAction(true)
    gs.addErrorMessage('Fixed + Variable percentage must equal 100')
    return
  }

  const totalCost = parseFloat(current.getValue('total_platform_cost'))
  current.setValue('fixed_cost_pool', (totalCost * fixed) / 100)
  current.setValue('variable_cost_pool', (totalCost * variable) / 100)

  if (current.isNewRecord()) {
    const gr = new GlideRecord('x_snc_chargeback_rate_card')
    gr.addQuery('month', current.getValue('month'))
    gr.addQuery('year', current.getValue('year'))
    gr.query()
    if (gr.getRowCount() > 0) {
      current.setAbortAction(true)
      gs.addErrorMessage('A Rate Card for this month and year already exists')
    }
  }
}
