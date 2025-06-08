import { CollectionConfig } from 'payload'

export const Flats: CollectionConfig = {
  slug: 'flats',
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
      name: 'subtitle',
      type: 'text',
      label: 'Своя ставка',
    },
    {
      name: 'address',
      type: 'text',
      required: true,
    },
    {
      name: 'metro_station',
      type: 'text',
      label: 'Ближайшая станция метро',
    },
    {
      name: 'metro_distance',
      type: 'text',
      label: 'Время до метро (например, "38 мин. (2.5 км)")',
    },
    {
      name: 'secondary_metro_station',
      type: 'text',
      label: 'Вторая станция метро',
    },
    {
      name: 'secondary_metro_distance',
      type: 'text',
      label: 'Время до второй станции',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'price_per_m2',
      type: 'number',
      label: 'Цена за м²',
    },
    {
      name: 'service_fee',
      type: 'number',
      label: 'Стоимость услуг для покупателя',
    },
    {
      name: 'suggested_price',
      type: 'number',
      label: 'Предложить свою стоимость',
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
    // Характеристики - Основное
    {
      name: 'code',
      type: 'text',
      label: 'Код объекта',
    },
    {
      name: 'area',
      type: 'number',
      label: 'Общая площадь (м²)',
    },
    {
      name: 'repair',
      type: 'text',
      label: 'Ремонт',
    },
    {
      name: 'year_built',
      type: 'number',
      label: 'Год постройки',
    },
    {
      name: 'floor',
      type: 'number',
      label: 'Этаж',
    },
    {
      name: 'floor_total',
      type: 'number',
      label: 'Всего этажей',
    },
    {
      name: 'walls',
      type: 'text',
      label: 'Стены',
    },
    {
      name: 'kitchen_area',
      type: 'number',
      label: 'Площадь кухни (м²)',
    },
    // О квартире
    {
      name: 'rooms',
      type: 'number',
      label: 'Количество комнат',
    },
    {
      name: 'ceiling_height',
      type: 'number',
      label: 'Высота потолков (м)',
    },
    {
      name: 'position_on_floor',
      type: 'text',
      label: 'Расположение на этаже',
    },
    // О доме
    {
      name: 'lift',
      type: 'text',
      label: 'Лифт (перечислить)',
    },
    {
      name: 'house_number',
      type: 'text',
      label: 'Номер дома',
    },
    {
      name: 'yard_type',
      type: 'text',
      label: 'Двор',
    },
    {
      name: 'parking',
      type: 'text',
      label: 'Парковка',
    },
    {
      name: 'playground',
      type: 'checkbox',
      label: 'Есть детская площадка?',
    },
    // Привязка к комплексу
    {
      name: 'complex',
      type: 'relationship',
      relationTo: 'residential-complexes',
    },
    // Изображение / планировка
    {
      name: 'layout',
      type: 'relationship',
      relationTo: 'media',
    },
  ],
}
