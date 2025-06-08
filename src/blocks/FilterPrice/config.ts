import { Block } from 'payload'

export const RealEstateFilterBlock: Block = {
  slug: 'real-estate-filter-block',
  labels: {
    singular: 'Real Estate Filter',
    plural: 'Real Estate Filters',
  },
  fields: [
    {
      name: 'buttonLabel',
      type: 'text',
      label: 'Label для кнопки Показать',
      defaultValue: 'Показать предложения',
    },
    {
      name: 'defaultCount',
      type: 'number',
      label: 'Количество предложений по умолчанию',
      defaultValue: 50035,
    },
  ],
}
