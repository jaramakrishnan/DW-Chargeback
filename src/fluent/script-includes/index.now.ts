import { ScriptInclude, ScheduledScript } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

ScriptInclude({
    $id: 'si-chargeback-engine',
    name: 'ChargebackEngine',
    script: Now.include('../scripts/ChargebackEngine.js'),
    description: 'Core chargeback calculation engine — processes billing periods and generates invoice lines',
    accessibleFrom: 'public',
    clientCallable: false,
    active: true,
})

ScriptInclude({
    $id: 'si-ratecard-service',
    name: 'RateCardService',
    script: Now.include('../scripts/RateCardService.js'),
    description: 'Manages rate card pricing — customer-specific rates, default rates, and fallback to license type defaults',
    accessibleFrom: 'public',
    clientCallable: true,
    active: true,
})

ScriptInclude({
    $id: 'si-invoice-service',
    name: 'InvoiceService',
    script: Now.include('../scripts/InvoiceService.js'),
    description: 'Invoice generation and management — summary by customer, formatting, status transitions',
    accessibleFrom: 'public',
    clientCallable: true,
    active: true,
})

ScriptInclude({
    $id: 'si-onboarding-service',
    name: 'CustomerOnboardingService',
    script: Now.include('../scripts/CustomerOnboardingService.js'),
    description: 'Manages customer onboarding flow — validates requests, creates customer records, sets up licenses and rates',
    accessibleFrom: 'public',
    clientCallable: true,
    active: true,
})

ScriptInclude({
    $id: 'si-licalloc-service',
    name: 'LicenseAllocationService',
    script: Now.include('../scripts/LicenseAllocationService.js'),
    description: 'License allocation validation and history — validates constraints, retrieves allocation records',
    accessibleFrom: 'public',
    clientCallable: true,
    active: true,
})

ScheduledScript({
    $id: 'ss-monthly-cbrun',
    name: 'Monthly Chargeback Auto-Run',
    script: Now.include('../scripts/MonthlyChargebackRun.js'),
    active: true,
    frequency: 'monthly',
    executionTime: { hours: 2, minutes: 0, seconds: 0 },
    runAs: 'admin',
})
