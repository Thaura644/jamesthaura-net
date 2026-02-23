import { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'categoryName',
  },
  fields: [
    {
      name: 'categoryName',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'text',
    },
    {
      name: 'skills',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'level',
          type: 'number',
        },
        {
          name: 'experience',
          type: 'text',
        },
      ],
    },
  ],
}
