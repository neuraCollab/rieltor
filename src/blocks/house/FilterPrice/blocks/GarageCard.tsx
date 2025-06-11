import React from 'react'

interface Props {
  type: 'indoor' | 'outdoor'
  price: number
  location: string
  withAccess: boolean
  imageUrl?: string
}

const GarageCard: React.FC<Props> = ({ type, price, location, withAccess, imageUrl }) => {
  const typeLabel = type === 'indoor' ? 'Подземный' : 'Наземный'

  return (
    <div className="card w-full md:w-80 bg-base-100 shadow-md border">
      {imageUrl ? (
        <figure>
          <img src={imageUrl} alt={typeLabel} className="h-48 w-full object-cover" />
        </figure>
      ) : (
        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          Нет фото
        </div>
      )}
      <div className="card-body p-4">
        <h2 className="card-title text-lg">{typeLabel} гараж</h2>
        <p className="text-sm text-gray-500">{location}</p>
        {withAccess && <p className="text-sm">С удобным подъездом</p>}
        <div className="card-actions justify-end mt-2">
          <span className="font-bold text-red-500 text-lg">{price.toLocaleString()} ₽</span>
        </div>
      </div>
    </div>
  )
}

export default GarageCard
