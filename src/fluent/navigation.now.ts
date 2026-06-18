import { ApplicationMenu, Record } from '@servicenow/sdk/core'

const appMenu = ApplicationMenu({
  $id: Now.ID['app-menu-chargeback'],
  title: 'DWhackathon',
  active: true,
  order: 100,
})

Record({
  $id: Now.ID['mod-cb-group'],
  table: 'sys_app_module',
  data: {
    title: 'DW Chargeback',
    application: appMenu,
    link_type: 'SEPARATOR',
    active: true,
    order: 100,
  },
})

Record({
  $id: Now.ID['mod-lobs'],
  table: 'sys_app_module',
  data: {
    title: 'LOBs',
    application: appMenu,
    link_type: 'LIST',
    name: 'x_snc_chargeback_lob',
    active: true,
    order: 100,
  },
})

Record({
  $id: Now.ID['mod-customers'],
  table: 'sys_app_module',
  data: {
    title: 'Customers',
    application: appMenu,
    link_type: 'LIST',
    name: 'x_snc_chargeback_customer',
    active: true,
    order: 200,
  },
})

Record({
  $id: Now.ID['mod-rate-cards'],
  table: 'sys_app_module',
  data: {
    title: 'Rate Cards',
    application: appMenu,
    link_type: 'LIST',
    name: 'x_snc_chargeback_rate_card',
    active: true,
    order: 250,
  },
})

Record({
  $id: Now.ID['mod-charge-models'],
  table: 'sys_app_module',
  data: {
    title: 'Charge Models',
    application: appMenu,
    link_type: 'LIST',
    name: 'x_snc_chargeback_charge_model',
    active: true,
    order: 300,
  },
})
