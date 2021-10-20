/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  guides: [
    'guides',
  ],
  api: [
    'api',
    'api/authentication',
    'api/environments',
    'api/idempotency',
    'api/healthcheck',
    'api/errors',
    'api/metadata',
    {
      type: 'category',
      label: 'Entities',
      items: [
        'api/core/entities/object',
        'api/core/entities/create-individual',
        'api/core/entities/create-corporation',
        'api/core/entities/create-receive-only',
        'api/core/entities/retrieve',
        'api/core/entities/update',
        'api/core/entities/list',
      ],
    },
    {
      type: 'category',
      label: 'Accounts',
      items: [
        'api/core/accounts/object',
        'api/core/accounts/create',
        'api/core/accounts/retrieve',
        'api/core/accounts/list',
        {
          type: 'category',
          label: 'ACH Verification',
          items: [
            'api/core/accounts/ach-verification/object',
            'api/core/accounts/ach-verification/create-micro-deposits',
            'api/core/accounts/ach-verification/create-plaid',
            'api/core/accounts/ach-verification/create-mx',
            'api/core/accounts/ach-verification/update',
            'api/core/accounts/ach-verification/retrieve',
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'Merchants',
      items: [
        'api/core/merchants/object',
        'api/core/merchants/list',
        'api/core/merchants/retrieve',
      ],
    },
    {
      type: 'category',
      label: 'Payments',
      items: [
        'api/core/payments/object',
        'api/core/payments/create',
        'api/core/payments/retrieve',
        'api/core/payments/delete',
        'api/core/payments/list',
      ],
    },
    {
      type: 'category',
      label: 'Webhooks',
      items: [
        'api/core/webhooks/object',
        'api/core/webhooks/create',
        'api/core/webhooks/retrieve',
        'api/core/webhooks/delete',
        'api/core/webhooks/list',
        'api/core/webhooks/ip-whitelisting',
      ],
    },
    {
      type: 'category',
      label: 'Reports',
      items: [
        'api/core/reports/object',
        'api/core/reports/create',
        'api/core/reports/retrieve',
        'api/core/reports/download',
      ],
    },
    {
      type: 'category',
      label: 'Elements',
      items: [
        'api/elements/intro',
        'api/elements/events',
        {
          type: 'category',
          label: 'Link',
          items: [
            'api/elements/link/intro',
            {
              type: 'category',
              label: 'Implementation',
              items: [
                'api/elements/link/implementation/create-token',
                'api/elements/link/implementation/launch-link',
                'api/elements/link/implementation/exchange-public-accounts',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Connections',
          items: [
            'api/elements/connections/intro',
          ],
        },
        {
          type: 'category',
          label: 'Pay',
          items: [
            'api/elements/pay/intro',
          ],
        },
        {
          type: 'category',
          label: 'Money Transfer',
          items: [
            'api/elements/money-transfer/intro',
          ],
        },
        {
          type: 'category',
          label: 'Balance Transfer',
          items: [
            'api/elements/balance-transfer/intro',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Utils',
      items: [
        {
          type: 'category',
          label: 'BINs',
          items: [
            'api/utils/bins/object',
            'api/utils/bins/retrieve',
          ],
        },
        {
          type: 'category',
          label: 'Routing Numbers',
          items: [
            'api/utils/routing-numbers/object',
            'api/utils/routing-numbers/retrieve',
          ],
        },
      ],
    },
  ],
  libraries: [
    'libraries',
  ],
};
