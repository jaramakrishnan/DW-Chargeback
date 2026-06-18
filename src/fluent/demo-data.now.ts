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
  data: { name: 'LOB-A', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCIB = Record({
  $id: Now.ID['lob-cib'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'LOB-B', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobIP = Record({
  $id: Now.ID['lob-ip'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'LOB-C', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobEP = Record({
  $id: Now.ID['lob-ep'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'LOB-D', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCS = Record({
  $id: Now.ID['lob-cs'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'LOB-E', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobAMDP = Record({
  $id: Now.ID['lob-amdp'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'LOB-F', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobAWM = Record({
  $id: Now.ID['lob-awm'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'LOB-G', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCA = Record({
  $id: Now.ID['lob-ca'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'LOB-H', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCAO = Record({
  $id: Now.ID['lob-cao'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'LOB-I', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCB = Record({
  $id: Now.ID['lob-cb'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'LOB-J', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCDAO = Record({
  $id: Now.ID['lob-cdao'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'LOB-K', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

const lobCTO = Record({
  $id: Now.ID['lob-cto'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_lob',
  data: { name: 'CCTO', active: true, model_type: 'hybrid', fulfiller_count: 0, charge_model: cmHybrid },
})

Record({
  $id: Now.ID['cust-ccb-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-A Consumer Lending', lob: lobCCB, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CC-1001', notes: 'Retail lending portfolio',
  },
})

Record({
  $id: Now.ID['cust-ccb-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-A Mortgage Services', lob: lobCCB, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'CC-1002', notes: 'Loan processing and underwriting',
  },
})

Record({
  $id: Now.ID['cust-ccb-3'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-A Credit Cards', lob: lobCCB, active: true, fulfiller_count: 0, charge_model: cmUsage,
    cost_center: 'CC-1003',
  },
})

Record({
  $id: Now.ID['cust-cib-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-B Global Markets', lob: lobCIB, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CIB-2001', notes: 'Market operations and data',
  },
})

Record({
  $id: Now.ID['cust-cib-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-B Investment Banking', lob: lobCIB, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'CIB-2002',
  },
})

Record({
  $id: Now.ID['cust-cib-3'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-B Treasury Services', lob: lobCIB, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CIB-2003', notes: 'Cash management and liquidity services',
  },
})

Record({
  $id: Now.ID['cust-ip-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-C Private Banking', lob: lobIP, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'IP-3001', notes: 'Client services',
  },
})

Record({
  $id: Now.ID['cust-ip-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-C Wealth Advisory', lob: lobIP, active: true, fulfiller_count: 0, charge_model: cmTiered,
    cost_center: 'IP-3002', tier_package: 'premium', monthly_tier_fee: 250,
  },
})

Record({
  $id: Now.ID['cust-ep-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-D Expense Management', lob: lobEP, active: true, fulfiller_count: 0, charge_model: cmUsage,
    cost_center: 'EP-4001', notes: 'Expense reporting and approval',
  },
})

Record({
  $id: Now.ID['cust-ep-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-D Travel & Entertainment', lob: lobEP, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'EP-4002',
  },
})

Record({
  $id: Now.ID['cust-cs-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-E Retail Operations', lob: lobCS, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'CS-5001',
  },
})

Record({
  $id: Now.ID['cust-cs-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-E Digital Banking', lob: lobCS, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CS-5002', notes: 'Digital banking platforms',
  },
})

Record({
  $id: Now.ID['cust-cs-3'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-E Branch Banking', lob: lobCS, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CS-5003',
  },
})

Record({
  $id: Now.ID['cust-amdp-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-F Asset Management', lob: lobAMDP, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'AMDP-6001', notes: 'Asset management operations',
  },
})

Record({
  $id: Now.ID['cust-amdp-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-F Fund Administration', lob: lobAMDP, active: true, fulfiller_count: 0, charge_model: cmTiered,
    cost_center: 'AMDP-6002', tier_package: 'standard', monthly_tier_fee: 150,
  },
})

Record({
  $id: Now.ID['cust-awm-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-G Private Clients', lob: lobAWM, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'AWM-7001',
  },
})

Record({
  $id: Now.ID['cust-awm-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-G Family Offices', lob: lobAWM, active: true, fulfiller_count: 0, charge_model: cmTiered,
    cost_center: 'AWM-7002', tier_package: 'premium', monthly_tier_fee: 300,
    notes: 'Family office services',
  },
})

Record({
  $id: Now.ID['cust-awm-3'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-G Portfolio Advisory', lob: lobAWM, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'AWM-7003',
  },
})

Record({
  $id: Now.ID['cust-ca-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-H Compliance Advisory', lob: lobCA, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'CA-8001', notes: 'Compliance and advisory services',
  },
})

Record({
  $id: Now.ID['cust-ca-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-H Regulatory Reporting', lob: lobCA, active: true, fulfiller_count: 0, charge_model: cmUsage,
    cost_center: 'CA-8002',
  },
})

Record({
  $id: Now.ID['cust-cao-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-I Chief Architect Office', lob: lobCAO, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CAO-9001',
  },
})

Record({
  $id: Now.ID['cust-cao-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-I Architecture Review', lob: lobCAO, active: true, fulfiller_count: 0, charge_model: cmTiered,
    cost_center: 'CAO-9002', tier_package: 'basic', monthly_tier_fee: 75,
    notes: 'Architecture review board',
  },
})

Record({
  $id: Now.ID['cust-cb-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-J Community Banking', lob: lobCB, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CB-10001',
  },
})

Record({
  $id: Now.ID['cust-cb-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-J Business Lending', lob: lobCB, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'CB-10002', notes: 'Business lending and credit services',
  },
})

Record({
  $id: Now.ID['cust-cdao-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-K Data Governance', lob: lobCDAO, active: true, fulfiller_count: 0, charge_model: cmHeadcount,
    cost_center: 'CDAO-11001',
  },
})

Record({
  $id: Now.ID['cust-cdao-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-K Analytics Platform', lob: lobCDAO, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CDAO-11002', notes: 'Analytics and BI platform',
  },
})

Record({
  $id: Now.ID['cust-cdao-3'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'LOB-K AI/ML Services', lob: lobCDAO, active: true, fulfiller_count: 0, charge_model: cmTiered,
    cost_center: 'CDAO-11003', tier_package: 'premium', monthly_tier_fee: 400,
    notes: 'AI/ML model training and inference platform',
  },
})

Record({
  $id: Now.ID['cust-cto-1'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CCTO Infrastructure Services', lob: lobCTO, active: true, fulfiller_count: 0, charge_model: cmHybrid,
    cost_center: 'CTO-12001', notes: 'Cloud infrastructure and data center operations',
  },
})

Record({
  $id: Now.ID['cust-cto-2'],
  $meta: { installMethod: 'demo' },
  table: 'x_snc_chargeback_customer',
  data: {
    name: 'CCTO Platform Engineering', lob: lobCTO, active: true, fulfiller_count: 0, charge_model: cmUsage,
    cost_center: 'CTO-12002',
  },
})
