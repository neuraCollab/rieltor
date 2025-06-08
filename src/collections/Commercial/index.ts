import { CollectionConfig } from 'payload'

export const CommercialObjects: CollectionConfig = {
  slug: 'commercial-objects',
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
      name: 'object_type',
      type: 'select',
      required: true,
      options: [
        { label: 'Земельный участок', value: 'land' },
        { label: 'Коммерческое помещение', value: 'commercial_space' },
        { label: 'Производственная база', value: 'industrial' },
        { label: 'Склад', value: 'warehouse' },
        { label: 'Другое', value: 'other' },
      ],
    },
    {
      name: 'area',
      type: 'number',
      label: 'Площадь (сотки или м²)',
    },
    {
      name: 'city',
      type: 'text',
    },
    {
      name: 'address',
      type: 'text',
      label: 'Адрес (если есть)',
    },
    {
      name: 'map_location',
      type: 'text',
      label: 'Местоположение на карте (координаты или описание)',
    },
    {
      name: 'price',
      type: 'number',
      label: 'Стоимость',
    },
    {
      name: 'price_per_unit',
      type: 'number',
      label: 'Стоимость за единицу (сотка или м²)',
    },
    {
      name: 'service_fee',
      type: 'text',
      label: 'Стоимость услуг',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'updated_at',
      type: 'date',
      label: 'Дата обновления',
    },
    {
      name: 'object_code',
      type: 'text',
      label: 'Код объекта',
    },
    {
      name: 'direction',
      type: 'text',
      label: 'Направление (например, Тюмень)',
    },
    {
      name: 'line',
      type: 'text',
      label: 'Линия (например, Первая)',
    },
    {
      name: 'cadastral_category',
      type: 'text',
      label: 'Категория земель',
    },
    {
      name: 'land_dimensions',
      type: 'text',
      label: 'Размеры участка (например, "88м х 246м")',
    },
    {
      name: 'surveying',
      type: 'checkbox',
      label: 'Межевание есть?',
    },
    {
      name: 'transport_access',
      type: 'text',
      label: 'Транспортная доступность',
    },
    {
      name: 'usage_options',
      type: 'textarea',
      label: 'Варианты использования / стратегии инвестиций',
    },
  ],
}
