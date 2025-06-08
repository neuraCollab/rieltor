import { CollectionConfig } from 'payload'

export const ResidentialComplexes: CollectionConfig = {
  slug: 'residential-complexes',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'address',
      type: 'text',
      required: true,
    },
    {
      name: 'developer',
      type: 'text',
      label: 'Застройщик',
    },
    {
      name: 'walls_material',
      type: 'text',
      label: 'Материал стен',
    },
    {
      name: 'delivery_date',
      type: 'text',
      label: 'Срок сдачи (как текст)',
    },
    {
      name: 'min_price',
      type: 'number',
      label: 'Минимальная стоимость квартиры',
    },
    {
      name: 'min_price_per_m2',
      type: 'number',
      label: 'Минимальная стоимость за м²',
    },
    {
      name: 'finishing',
      type: 'text',
      label: 'Отделка',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Особенности дома',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'masterplan',
      type: 'relationship',
      relationTo: 'media',
      label: 'Генплан',
    },
  ],
}
