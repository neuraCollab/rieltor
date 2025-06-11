import React from 'react'

interface Props {
  title: string
  price: number
  area?: number
  location: string
  withLand?: boolean
  imageUrl?: string
}

const HouseLandCard: React.FC<Props> = ({ title, price, area, location, withLand, imageUrl }) => {
  return (
    <div className="card w-full md:w-80 bg-base-100 shadow-md border">
      {imageUrl ? (
        <figure>
          <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
        </figure>
      ) : (
        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          Нет фото
        </div>
      )}
      <div className="card-body p-4">
        <h2 className="card-title text-lg">{title}</h2>
        <p className="text-sm text-gray-500">{location}</p>
        {area !== undefined && (
          <p className="text-sm">
            Площадь: <span className="font-medium">{area} м²</span>
          </p>
        )}
        {withLand && <p className="text-sm">С участком</p>}
        <div className="card-actions justify-end mt-2">
          <span className="font-bold text-red-500 text-lg">{price?.toLocaleString() || 0} ₽</span>
        </div>
      </div>
    </div>
  )
}

export default HouseLandCard
