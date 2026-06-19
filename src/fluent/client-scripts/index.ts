import { ClientScript } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

ClientScript({
    table: 'x_snc_chargeback_onboarding_request',
    name: 'Validate Email on Onboarding Request',
    type: 'onSubmit',
    uiType: 'all',
    script: Now.include('../client-scripts/validateEmail.js'),
    active: true,
    global: true,
})

ClientScript({
    table: 'x_snc_chargeback_license_allocation',
    name: 'Validate Allocation Count',
    type: 'onChange',
    uiType: 'all',
    field: 'allocated_count',
    script: Now.include('../client-scripts/validateAllocationCount.js'),
    active: true,
    global: true,
})

ClientScript({
    table: 'x_snc_chargeback_rate_card',
    name: 'Auto-generate Rate Card Name',
    type: 'onChange',
    uiType: 'all',
    field: 'license_type',
    script: Now.include('../client-scripts/autoRateCardName.js'),
    active: true,
    global: true,
})

ClientScript({
    table: 'x_snc_chargeback_chargeback_run',
    name: 'Confirm Before Status Change',
    type: 'onChange',
    uiType: 'all',
    field: 'status',
    script: Now.include('../client-scripts/confirmStatusChange.js'),
    active: true,
    global: true,
})
