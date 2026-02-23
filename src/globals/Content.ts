import { GlobalConfig } from 'payload'

export const Content: GlobalConfig = {
  slug: 'content',
  fields: [
    {
      name: 'intro',
      type: 'textarea',
    },
    {
      name: 'values',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
  ],
}
