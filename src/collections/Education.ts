import { CollectionConfig } from 'payload'

export const Education: CollectionConfig = {
  slug: 'education',
  admin: {
    useAsTitle: 'degree',
  },
  fields: [
    {
      name: 'degree',
      type: 'text',
      required: true,
    },
    {
      name: 'institution',
      type: 'text',
      required: true,
    },
    {
      name: 'period',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'grade',
      type: 'text',
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
