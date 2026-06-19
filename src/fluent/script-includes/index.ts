import { ScriptInclude, ScheduledScript } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

ScriptInclude({
    name: 'ChargebackEngine',
    script: Now.include('../scripts/ChargebackEngine.js'),
    description: 'Core chargeback calculation engine — processes billing periods and generates invoice lines',
    accessibleFrom: 'public',
    clientCallable: false,
    active: true,
})

ScriptInclude({
    name: 'RateCardService',
    script: Now.include('../scripts/RateCardService.js'),
    description: 'Manages rate card pricing — customer-specific rates, default rates, and fallback to license type defaults',
    accessibleFrom: 'public',
    clientCallable: true,
    active: true,
})

ScriptInclude({
    name: 'InvoiceService',
    script: Now.include('../scripts/InvoiceService.js'),
    description: 'Invoice generation and management — summary by customer, formatting, status transitions',
    accessibleFrom: 'public',
    clientCallable: true,
    active: true,
})

ScriptInclude({
    name: 'CustomerOnboardingService',
    script: Now.include('../scripts/CustomerOnboardingService.js'),
    description: 'Manages customer onboarding flow — validates requests, creates customer records, sets up licenses and rates',
    accessibleFrom: 'public',
    clientCallable: true,
    active: true,
})

ScriptInclude({
    name: 'LicenseAllocationService',
    script: Now.include('../scripts/LicenseAllocationService.js'),
    description: 'License allocation validation and history — validates constraints, retrieves allocation records',
    accessibleFrom: 'public',
    clientCallable: true,
    active: true,
})

ScheduledScript({
    name: 'Monthly Chargeback Auto-Run',
    script: Now.include('../scripts/MonthlyChargebackRun.js'),
    active: true,
    frequency: 'monthly',
    executionTime: { hours: 2, minutes: 0, seconds: 0 },
    runAs: 'admin',
    description: 'Automatically creates and calculates chargeback runs at the start of each month',
})
