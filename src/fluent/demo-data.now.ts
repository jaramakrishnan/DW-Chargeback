import { Record } from '@servicenow/sdk/core'

const cmHybrid = Record({
  $id: Now.ID['cm-hybrid'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_charge_model',
  data: {
    name: 'Hybrid 70/30',
    description: '70% fixed by users + 30% variable by transactions. Industry standard for platform teams. RECOMMENDED.',
    formula: '(Fixed Pool / Total Users * LOB Users) + (Variable Pool / Total Transactions * LOB Transactions)',
    needs_user_count: true,
    needs_transaction_count: true,
    needs_tier_lookup: false,
    is_recommended: true,
    active: true,
    sort_order: 3,
  },
})

const cmHeadcount = Record({
  $id: Now.ID['cm-headcount'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_charge_model',
  data: {
    name: 'Headcount Split',
    description: 'Total cost divided by total users. Simplest model. Good for starting out.',
    formula: '(Total Cost / Total Users) * LOB Users',
    needs_user_count: true,
    needs_transaction_count: false,
    needs_tier_lookup: false,
    is_recommended: false,
    active: true,
    sort_order: 1,
  },
})

const cmUsage = Record({
  $id: Now.ID['cm-usage'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_charge_model',
  data: {
    name: 'Usage Meter',
    description: 'Total cost divided by total tickets. Rarely used alone in banking due to budget unpredictability.',
    formula: '(Total Cost / Total Transactions) * LOB Transactions',
    needs_user_count: false,
    needs_transaction_count: true,
    needs_tier_lookup: false,
    is_recommended: false,
    active: true,
    sort_order: 2,
  },
})

const cmTiered = Record({
  $id: Now.ID['cm-tiered'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_charge_model',
  data: {
    name: 'Tiered Package',
    description: 'Fixed monthly fee per user by tier. Best for LOBs wanting predictable budgets.',
    formula: 'LOB Users * Tier Monthly Fee',
    needs_user_count: true,
    needs_transaction_count: false,
    needs_tier_lookup: true,
    is_recommended: false,
    active: true,
    sort_order: 4,
  },
})

const lobCCB = Record({
  $id: Now.ID['lob-ccb'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'CCB', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCIB = Record({
  $id: Now.ID['lob-cib'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'CIB', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobIP = Record({
  $id: Now.ID['lob-ip'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'IP', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobEP = Record({
  $id: Now.ID['lob-ep'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'EP', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCS = Record({
  $id: Now.ID['lob-cs'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'CS', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobAMDP = Record({
  $id: Now.ID['lob-amdp'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'AMDP', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobAWM = Record({
  $id: Now.ID['lob-awm'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'AWM', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCA = Record({
  $id: Now.ID['lob-ca'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'CA', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCAO = Record({
  $id: Now.ID['lob-cao'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'CAO', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCB = Record({
  $id: Now.ID['lob-cb'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'CB', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCDAO = Record({
  $id: Now.ID['lob-cdao'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'CDAO', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCTO = Record({
  $id: Now.ID['lob-cto'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'CTO', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

Record({
  $id: Now.ID['cust-ccb-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CCB - Consumer Lending', lob: lobCCB, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CC-1001', notes: 'Retail lending portfolio - mortgages and personal loans',
  },
})

Record({
  $id: Now.ID['cust-ccb-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CCB - Mortgage Services', lob: lobCCB, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'CC-1002', notes: 'Home loan processing and underwriting',
  },
})

Record({
  $id: Now.ID['cust-ccb-3'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CCB - Credit Cards', lob: lobCCB, active: true, fulfiller_count: 0, charge_model: cmUsage,
    cost_center: 'CC-1003',
  },
})

Record({
  $id: Now.ID['cust-cib-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CIB - Global Markets', lob: lobCIB, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CIB-2001', notes: 'Trading floor operations and market data',
  },
})

Record({
  $id: Now.ID['cust-cib-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CIB - Investment Banking', lob: lobCIB, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'CIB-2002',
  },
})

Record({
  $id: Now.ID['cust-cib-3'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CIB - Treasury Services', lob: lobCIB, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CIB-2003', notes: 'Cash management and liquidity services',
  },
})

Record({
  $id: Now.ID['cust-ip-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'IP - Private Banking', lob: lobIP, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'IP-3001', notes: 'High net worth client services',
  },
})

Record({
  $id: Now.ID['cust-ip-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'IP - Wealth Advisory', lob: lobIP, active: true, fulfiller_count: 0, charge_model: cmTiered,
    cost_center: 'IP-3002', tier_package: 'premium', monthly_tier_fee: 250,
  },
})

Record({
  $id: Now.ID['cust-ep-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'EP - Expense Management', lob: lobEP, active: true, fulfiller_count: 0, charge_model: cmUsage,
    cost_center: 'EP-4001', notes: 'Corporate expense reporting and approval',
  },
})

Record({
  $id: Now.ID['cust-ep-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'EP - Travel & Entertainment', lob: lobEP, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'EP-4002',
  },
})

Record({
  $id: Now.ID['cust-cs-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CS - Retail Operations', lob: lobCS, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'CS-5001',
  },
})

Record({
  $id: Now.ID['cust-cs-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CS - Digital Banking', lob: lobCS, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CS-5002', notes: 'Mobile and online banking platforms',
  },
})

Record({
  $id: Now.ID['cust-cs-3'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CS - Branch Banking', lob: lobCS, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CS-5003',
  },
})

Record({
  $id: Now.ID['cust-amdp-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'AMDP - Asset Management', lob: lobAMDP, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'AMDP-6001', notes: 'Institutional asset management operations',
  },
})

Record({
  $id: Now.ID['cust-amdp-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'AMDP - Fund Administration', lob: lobAMDP, active: true, fulfiller_count: 0, charge_model: cmTiered,
    cost_center: 'AMDP-6002', tier_package: 'standard', monthly_tier_fee: 150,
  },
})

Record({
  $id: Now.ID['cust-awm-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'AWM - Private Clients', lob: lobAWM, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'AWM-7001',
  },
})

Record({
  $id: Now.ID['cust-awm-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'AWM - Family Offices', lob: lobAWM, active: true, fulfiller_count: 0, charge_model: cmTiered,
    cost_center: 'AWM-7002', tier_package: 'premium', monthly_tier_fee: 300,
    notes: 'Ultra high net worth family office services',
  },
})

Record({
  $id: Now.ID['cust-awm-3'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'AWM - Portfolio Advisory', lob: lobAWM, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'AWM-7003',
  },
})

Record({
  $id: Now.ID['cust-ca-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CA - Compliance Advisory', lob: lobCA, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'CA-8001', notes: 'Regulatory compliance and advisory services',
  },
})

Record({
  $id: Now.ID['cust-ca-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CA - Regulatory Reporting', lob: lobCA, active: true, fulfiller_count: 0, charge_model: cmUsage,
    cost_center: 'CA-8002',
  },
})

Record({
  $id: Now.ID['cust-cao-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CAO - Chief Architect Office', lob: lobCAO, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CAO-9001',
  },
})

Record({
  $id: Now.ID['cust-cao-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CAO - Architecture Review', lob: lobCAO, active: true, fulfiller_count: 0, charge_model: cmTiered,
    cost_center: 'CAO-9002', tier_package: 'basic', monthly_tier_fee: 75,
    notes: 'Enterprise architecture review board',
  },
})

Record({
  $id: Now.ID['cust-cb-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CB - Community Banking', lob: lobCB, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CB-10001',
  },
})

Record({
  $id: Now.ID['cust-cb-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CB - Business Lending', lob: lobCB, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'CB-10002', notes: 'SMB lending and credit services',
  },
})

Record({
  $id: Now.ID['cust-cdao-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CDAO - Data Governance', lob: lobCDAO, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'CDAO-11001',
  },
})

Record({
  $id: Now.ID['cust-cdao-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CDAO - Analytics Platform', lob: lobCDAO, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CDAO-11002', notes: 'Enterprise analytics and BI platform',
  },
})

Record({
  $id: Now.ID['cust-cdao-3'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CDAO - AI/ML Services', lob: lobCDAO, active: true, fulfiller_count: 0, charge_model: cmTiered,
    cost_center: 'CDAO-11003', tier_package: 'premium', monthly_tier_fee: 400,
    notes: 'AI/ML model training and inference platform',
  },
})

Record({
  $id: Now.ID['cust-cto-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CTO - Infrastructure Services', lob: lobCTO, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CTO-12001', notes: 'Cloud infrastructure and data center operations',
  },
})

Record({
  $id: Now.ID['cust-cto-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CTO - Platform Engineering', lob: lobCTO, active: true, fulfiller_count: 0, charge_model: cmUsage,
    cost_center: 'CTO-12002',
  },
})
