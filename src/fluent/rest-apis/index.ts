import { ScriptedRestApi, Acl } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

ScriptedRestApi({
    name: 'Chargeback API',
    apiId: 'x_snc_chargeback',
    version: 'v1',
    active: true,
    requiresAuth: true,
    requiresAcl: true,
    resources: [
        {
            path: '/chargeback/{runId}/calculate',
            method: 'POST',
            script: Now.include('../rest-apis/runCalculation.js'),
        },
        {
            path: '/chargeback/{runId}/invoices',
            method: 'GET',
            script: Now.include('../rest-apis/getInvoices.js'),
        },
        {
            path: '/chargeback/{runId}/invoices/generate',
            method: 'POST',
            script: Now.include('../rest-apis/generateInvoices.js'),
        },
        {
            path: '/customers/{customerId}/allocations',
            method: 'GET',
            script: Now.include('../rest-apis/getAllocations.js'),
        },
        {
            path: '/customers/{customerId}/rates',
            method: 'GET',
            script: Now.include('../rest-apis/getRates.js'),
        },
        {
            path: '/customers/{customerId}/rates',
            method: 'POST',
            script: Now.include('../rest-apis/setRate.js'),
        },
        {
            path: '/onboarding/{requestId}/validate',
            method: 'POST',
            script: Now.include('../rest-apis/validateOnboarding.js'),
        },
    ],
})

Acl({
    type: 'REST_Endpoint',
    name: 'x_snc_chargeback.v1',
    operation: 'execute',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})
