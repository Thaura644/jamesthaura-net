import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'longDescription',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'category',
      type: 'array',
      fields: [
        {
          name: 'cat',
          type: 'text',
        },
      ],
    },
    {
      name: 'tech',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'challenges',
      type: 'array',
      fields: [
        {
          name: 'challenge',
          type: 'text',
        },
      ],
    },
    {
      name: 'impact',
      type: 'array',
      fields: [
        {
          name: 'metric',
          type: 'text',
        },
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'links',
      type: 'group',
      fields: [
        {
          name: 'code',
          type: 'text',
        },
        {
          name: 'demo',
          type: 'text',
        },
        {
          name: 'case',
          type: 'text',
        },
        {
          name: 'web',
          type: 'text',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Live', value: 'live' },
        { label: 'Development', value: 'development' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'year',
      type: 'text',
    },
    {
      name: 'architecture',
      type: 'group',
      fields: [
        {
          name: 'type',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}
