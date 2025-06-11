import React from 'react'

interface Props {
  type: string
  price: number
  area: number
  location: string
  imageUrl?: string
}

const CommercialCard: React.FC<Props> = ({ type, price, area, location, imageUrl }) => {
  return (
    <div className="card w-full md:w-80 bg-base-100 shadow-md border">
      {imageUrl ? (
        <figure>
          <img src={imageUrl} alt={type} className="h-48 w-full object-cover" />
        </figure>
      ) : (
        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          Нет фото
        </div>
      )}
      <div className="card-body p-4">
        <h2 className="card-title text-lg">{type}</h2>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm">{area} м²</p>
        <div className="card-actions justify-end mt-2">
          <span className="font-bold text-red-500 text-lg">{price?.toLocaleString() || 0} ₽</span>
        </div>
      </div>
    </div>
  )
}

export default CommercialCard
