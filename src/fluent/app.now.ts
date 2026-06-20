import { ApplicationMenu, Role, Property, CrossScopePrivilege } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

Role({
    name: 'x_snc_chargeback.admin',
    description: 'Chargeback Administrator — full access to all chargeback data and configuration',
    grantable: true,
    scopedAdmin: true,
})

Role({
    name: 'x_snc_chargeback.billing_manager',
    description: 'Billing Manager — can run chargeback calculations, generate invoices, manage rate cards',
    grantable: true,
})

Role({
    name: 'x_snc_chargeback.analyst',
    description: 'Chargeback Analyst — view reports and customer data, no modification rights',
    grantable: true,
})

Role({
    name: 'x_snc_chargeback.onboarding_specialist',
    description: 'Onboarding Specialist — manages customer onboarding requests and license allocations',
    grantable: true,
})

Property({
    $id: 'prop-default-currency',
    name: 'x_snc_chargeback.default_currency',
    value: 'USD',
    description: 'Default currency for all chargeback calculations',
})

Property({
    $id: 'prop-billing-cycle',
    name: 'x_snc_chargeback.billing_cycle',
    value: 'monthly',
    description: 'Default billing cycle: monthly, quarterly, annual',
})

Property({
    $id: 'prop-grace-period',
    name: 'x_snc_chargeback.grace_period_days',
    value: 30,
    description: 'Grace period in days for new customers before first chargeback',
})

Property({
    $id: 'prop-min-commit',
    name: 'x_snc_chargeback.min_commit_months',
    value: 12,
    description: 'Minimum commitment period in months for new customers',
})

Property({
    $id: 'prop-notif-email',
    name: 'x_snc_chargeback.notification_email',
    value: 'platform-team@company.com',
    description: 'Email address for chargeback notifications',
})

ApplicationMenu({
    $id: 'app-menu',
    title: 'DW Chargeback',
    roles: ['x_snc_chargeback.admin', 'x_snc_chargeback.billing_manager', 'x_snc_chargeback.analyst', 'x_snc_chargeback.onboarding_specialist'],
    order: 100,
    active: true,
})

CrossScopePrivilege({
    $id: 'csp-sys-user',
    targetScope: 'global',
    targetType: 'sys_db_object',
    targetName: 'sys_user',
    operation: 'read',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: 'csp-sys-group',
    targetScope: 'global',
    targetType: 'sys_db_object',
    targetName: 'sys_user_group',
    operation: 'read',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: 'csp-sys-choice',
    targetScope: 'global',
    targetType: 'sys_db_object',
    targetName: 'sys_choice',
    operation: 'read',
    status: 'allowed',
})
