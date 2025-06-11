import React from 'react'
import { Heart, Phone } from 'lucide-react'
import Link from 'next/link'

interface Props {
  id: string
  rooms: number
  price?: number
  area?: number
  floor?: number
  totalFloors?: number
  address: string
  imageUrl?: string
  pricePerM2?: number
  badge?: string
}

const ApartmentCard: React.FC<Props> = ({
  id,
  rooms,
  price,
  area,
  floor,
  totalFloors,
  address,
  imageUrl,
  pricePerM2,
  badge,
}) => {
  return (
    <Link href={`/apartments/${id}`} className="block">
      <div className="rounded-xl overflow-hidden shadow-md border bg-white max-w-[320px] hover:shadow-lg cursor-pointer transition">
        <div className="relative">
          {imageUrl ? (
            <img src={imageUrl} alt="Апартаменты" className="w-full h-[180px] object-cover" />
          ) : (
            <div className="h-[180px] bg-gray-200 flex items-center justify-center text-gray-500">
              Нет фото
            </div>
          )}

          <div className="absolute top-2 left-2 bg-white rounded-full p-1 shadow">
            <div className="w-4 h-4 bg-green-500 rounded-full" />
          </div>

          <div className="absolute top-2 right-2">
            <Heart className="w-5 h-5 text-white stroke-2 drop-shadow" />
          </div>

          {badge && (
            <div className="absolute bottom-2 left-2 bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">
              {badge}
            </div>
          )}

          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-0.5 rounded">
            1/68
          </div>
        </div>

        <div className="p-4 space-y-1">
          <div className="text-lg font-bold text-black">
            {price !== undefined ? `${price.toLocaleString()} ₽` : '—'}
          </div>
          {pricePerM2 !== undefined && (
            <div className="text-sm text-gray-500">{pricePerM2.toLocaleString()} ₽/м²</div>
          )}
          <div className="text-sm text-black">
            {rooms}-комн. кв.
            {area !== undefined && ` · ${area} м²`}
            {floor !== undefined && totalFloors !== undefined && ` · ${floor}/${totalFloors} эт.`}
          </div>
          <div className="text-sm text-gray-600">{address}</div>
          <button
            onClick={(e) => {
              e.preventDefault()
              // Здесь можно вставить открытие модалки или копирование телефона
            }}
            className="mt-3 w-full border rounded flex items-center justify-center gap-2 py-2 text-black"
          >
            <Phone size={16} /> Показать телефон
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ApartmentCard
