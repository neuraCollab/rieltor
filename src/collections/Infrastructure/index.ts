import { CollectionConfig } from 'payload'

export const Infrastructure: CollectionConfig = {
  slug: 'infrastructure',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: ['park', 'school', 'mall', 'hospital'],
    },
  ],
}
