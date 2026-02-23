import { GlobalConfig } from 'payload'

export const Content: GlobalConfig = {
  slug: 'content',
  fields: [
    {
      name: 'personalInfo',
      type: 'group',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'title', type: 'text' },
        { name: 'tagline', type: 'text' },
        { name: 'location', type: 'text' },
        { name: 'availability', type: 'text' },
        { name: 'email', type: 'text' },
        { name: 'phone', type: 'text' },
        { name: 'nationality', type: 'text' },
        { name: 'dateOfBirth', type: 'text' },
        { name: 'resumeUrl', type: 'text' },
      ],
    },
    {
      name: 'bio',
      type: 'group',
      fields: [
        { name: 'short', type: 'textarea' },
        { name: 'long', type: 'textarea' },
        {
          name: 'values',
          type: 'array',
          fields: [
            { name: 'value', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'ctaBanner',
      type: 'group',
      fields: [
        { name: 'text', type: 'text' },
        {
          name: 'primaryAction',
          type: 'group',
          fields: [
            { name: 'text', type: 'text' },
            { name: 'href', type: 'text' },
          ],
        },
        {
          name: 'secondaryAction',
          type: 'group',
          fields: [
            { name: 'text', type: 'text' },
            { name: 'href', type: 'text' },
          ],
        },
      ],
    },
  ],
}
