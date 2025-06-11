import { CollectionConfig } from 'payload'

export const Flats: CollectionConfig = {
  slug: 'flats',
  admin: {
    useAsTitle: 'title',
    group: 'Недвижимость',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Название',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      label: 'Тип недвижимости',
      type: 'select',
      options: [
        { label: 'Квартира', value: 'flat' },
        { label: 'Апартаменты', value: 'apartment' },
        { label: 'Таунхаус', value: 'townhouse' },
      ],
      defaultValue: 'flat',
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
      name: 'rooms',
      label: 'Количество комнат',
      type: 'select',
      options: [
        { label: 'Студия', value: 'studio' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4+', value: '4+' },
      ],
    },
    {
      name: 'price',
      label: 'Цена',
      type: 'number',
    },
    {
      name: 'area',
      label: 'Площадь (м²)',
      type: 'number',
    },
    {
      name: 'floor',
      label: 'Этаж',
      type: 'number',
    },
    {
      name: 'totalFloors',
      label: 'Всего этажей',
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
      name: 'complex',
      label: 'Жилой комплекс',
      type: 'relationship',
      relationTo: 'residential-complexes',
      hasMany: false,
    },
  ],
}
