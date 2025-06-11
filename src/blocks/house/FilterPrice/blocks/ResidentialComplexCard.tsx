import React from 'react'

type ResidentialComplex = {
  id: string
  name: string
  developer?: string
  status?: 'completed' | 'building' | 'not_started'
  class?: 'economy' | 'business' | 'premium'
  city?: string
  district?: string
  address?: string
}

const ResidentialComplexCard: React.FC<{ data: ResidentialComplex }> = ({ data }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{data.name}</h3>
      {data.developer && (
        <p>
          <strong>Застройщик:</strong> {data.developer}
        </p>
      )}
      {data.status && (
        <p>
          <strong>Статус:</strong>{' '}
          {
            {
              completed: 'Сдан',
              building: 'Строится',
              not_started: 'Не начат',
            }[data.status]
          }
        </p>
      )}
      {data.class && (
        <p>
          <strong>Класс:</strong>{' '}
          {
            {
              economy: 'Эконом',
              business: 'Бизнес',
              premium: 'Премиум',
            }[data.class]
          }
        </p>
      )}
      {(data.city || data.district || data.address) && (
        <p>
          <strong>Адрес:</strong>{' '}
          {[data.city, data.district, data.address].filter(Boolean).join(', ')}
        </p>
      )}
    </div>
  )
}

export default ResidentialComplexCard
