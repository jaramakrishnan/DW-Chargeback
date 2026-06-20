import { RestApi, Acl } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

RestApi({
    $id: 'api-chargeback',
    name: 'Chargeback API',
    serviceId: 'x_snc_chargeback',
    active: true,
    routes: [
        {
            $id: 'route-calculate',
            path: '/chargeback/{runId}/calculate',
            method: 'POST',
            script: Now.include('../rest-apis/runCalculation.js'),
        },
        {
            $id: 'route-get-invoices',
            path: '/chargeback/{runId}/invoices',
            method: 'GET',
            script: Now.include('../rest-apis/getInvoices.js'),
        },
        {
            $id: 'route-gen-invoices',
            path: '/chargeback/{runId}/invoices/generate',
            method: 'POST',
            script: Now.include('../rest-apis/generateInvoices.js'),
        },
        {
            $id: 'route-get-allocations',
            path: '/customers/{customerId}/allocations',
            method: 'GET',
            script: Now.include('../rest-apis/getAllocations.js'),
        },
        {
            $id: 'route-get-rates',
            path: '/customers/{customerId}/rates',
            method: 'GET',
            script: Now.include('../rest-apis/getRates.js'),
        },
        {
            $id: 'route-set-rate',
            path: '/customers/{customerId}/rates',
            method: 'POST',
            script: Now.include('../rest-apis/setRate.js'),
        },
        {
            $id: 'route-validate-onboard',
            path: '/onboarding/{requestId}/validate',
            method: 'POST',
            script: Now.include('../rest-apis/validateOnboarding.js'),
        },
    ],
})

Acl({
    $id: 'acl-api-chargeback',
    type: 'REST_Endpoint',
    name: 'x_snc_chargeback.v1',
    operation: 'execute',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager'],
    decisionType: 'allow',
    active: true,
})