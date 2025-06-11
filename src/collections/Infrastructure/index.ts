import { CollectionConfig } from 'payload'

export const Infrastructures: CollectionConfig = {
  slug: 'infrastructures',
  admin: {
    useAsTitle: 'name',
    group: 'Недвижимость',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Название объекта',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      label: 'Тип инфраструктуры',
      type: 'select',
      options: [
        { label: 'Школа', value: 'school' },
        { label: 'Детский сад', value: 'kindergarten' },
        { label: 'Парк', value: 'park' },
        { label: 'Магазин', value: 'shop' },
        { label: 'Больница', value: 'hospital' },
      ],
    },
    {
      name: 'distance',
      label: 'Расстояние (м)',
      type: 'number',
    },
    {
      name: 'city',
      label: 'Город',
      type: 'text',
    },
    {
      name: 'district',
      label: 'Район',
      type: 'text',
    },
    {
      name: 'address',
      label: 'Адрес',
      type: 'text',
    },
    {
      name: 'complex',
      label: 'Жилой комплекс',
      type: 'relationship',
      relationTo: 'residential-complexes',
    },
  ],
}
