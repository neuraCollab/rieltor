import { CollectionConfig } from 'payload'

export const ResidentialComplexes: CollectionConfig = {
  slug: 'residential-complexes',
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
      label: 'Название ЖК',
      type: 'text',
      required: true,
    },
    {
      name: 'developer',
      label: 'Застройщик',
      type: 'text',
    },
    {
      name: 'status',
      label: 'Статус',
      type: 'select',
      options: [
        { label: 'Сдан', value: 'completed' },
        { label: 'Строится', value: 'building' },
        { label: 'Не начат', value: 'not_started' },
      ],
      defaultValue: 'building',
    },
    {
      name: 'class',
      label: 'Класс недвижимости',
      type: 'select',
      options: [
        { label: 'Эконом', value: 'economy' },
        { label: 'Бизнес', value: 'business' },
        { label: 'Премиум', value: 'premium' },
      ],
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
      name: 'description',
      label: 'Описание',
      type: 'textarea',
    },
    {
      name: 'image',
      label: 'Логотип / фото',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'flats',
      label: 'Квартиры в ЖК',
      type: 'relationship',
      relationTo: 'flats',
      hasMany: true,
    },
  ],
}
