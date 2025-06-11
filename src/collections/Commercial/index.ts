import { CollectionConfig } from 'payload'

export const Commercial: CollectionConfig = {
  slug: 'commercial',
  admin: {
    useAsTitle: 'title',
    group: 'Недвижимость',
    defaultColumns: ['title', 'type', 'price', 'area', 'city'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Название объекта',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      label: 'Тип коммерческой недвижимости',
      type: 'select',
      options: [
        { label: 'Офис', value: 'office' },
        { label: 'Магазин', value: 'retail' },
        { label: 'Склад', value: 'warehouse' },
        { label: 'Производство', value: 'manufacturing' },
        { label: 'Помещение свободного назначения', value: 'free-purpose' },
      ],
      required: true,
    },
    {
      name: 'category',
      label: 'Категория',
      type: 'select',
      options: [
        { label: 'Купить', value: 'buy' },
        { label: 'Снять', value: 'rent' },
      ],
      defaultValue: 'buy',
    },
    {
      name: 'price',
      label: 'Цена',
      type: 'number',
      required: true,
    },
    {
      name: 'currency',
      label: 'Валюта',
      type: 'select',
      options: [
        { label: 'RUB', value: 'RUB' },
        { label: 'USD', value: 'USD' },
        { label: 'EUR', value: 'EUR' },
      ],
      defaultValue: 'RUB',
    },
    {
      name: 'area',
      label: 'Площадь (м²)',
      type: 'number',
      required: true,
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
      name: 'isPublished',
      label: 'Опубликовано',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'images',
      label: 'Фото',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'contact',
      label: 'Контактное лицо',
      type: 'text',
    },
    {
      name: 'phone',
      label: 'Телефон',
      type: 'text',
    },
  ],
}
