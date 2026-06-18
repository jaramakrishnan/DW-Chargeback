import { Form, default_view } from '@servicenow/sdk/core'

Form({
  table: 'x_snc_chargeback_lob',
  view: default_view,
  sections: [
    {
      caption: 'LOB Details',
      content: [
        {
          layout: 'two-column',
          leftElements: [
            { type: 'table_field', field: 'name' },
            { type: 'table_field', field: 'cost_center' },
            { type: 'table_field', field: 'fulfiller_count' },
            { type: 'table_field', field: 'parent_lob' },
          ],
          rightElements: [
            { type: 'table_field', field: 'active' },
            { type: 'table_field', field: 'model_type' },
            { type: 'table_field', field: 'notes' },
          ],
        },
      ],
    },
    {
      caption: 'Customers',
      content: [
        {
          layout: 'one-column',
          elements: [
            {
              type: 'list',
              listType: '12M',
              listRef: 'x_snc_chargeback_customer.lob',
            },
          ],
        },
      ],
    },
  ],
})

Form({
  table: 'x_snc_chargeback_customer',
  view: default_view,
  sections: [
    {
      caption: 'Customer Details',
      content: [
        {
          layout: 'two-column',
          leftElements: [
            { type: 'table_field', field: 'name' },
            { type: 'table_field', field: 'lob' },
            { type: 'table_field', field: 'fulfiller_count' },
            { type: 'table_field', field: 'tier_package' },
            { type: 'table_field', field: 'notes' },
          ],
          rightElements: [
            { type: 'table_field', field: 'active' },
            { type: 'table_field', field: 'cost_center' },
            { type: 'table_field', field: 'charge_model' },
            { type: 'table_field', field: 'monthly_tier_fee' },
          ],
        },
      ],
    },
  ],
})
