import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  type: string
  priceFrom?: number
  priceTo?: number
  areaFrom?: number
  areaTo?: number
  location: string
  turnkey: boolean
}

interface Props {
  onFilter: (query: string) => void
}

const CommercialFilters: React.FC<Props> = ({ onFilter }) => {
  const { register, watch, handleSubmit } = useForm<FormData>({
    defaultValues: {
      type: '',
      location: '',
      turnkey: false,
    },
  })

  const [count, setCount] = useState(0)
  const watchAll = watch()

  useEffect(() => {
    const query = new URLSearchParams()

    for (const [key, value] of Object.entries(watchAll)) {
      if (value !== '' && value !== undefined && !(typeof value === 'number' && isNaN(value))) {
        query.append(key, String(value))
      }
    }

    fetch(`/api/commercial/count?${query.toString()}`, { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setCount(data.totalDocs ?? 0))

    onFilter(query.toString())
  }, [JSON.stringify(watchAll)])

  return (
    <form onSubmit={handleSubmit(() => {})} className="flex flex-wrap gap-4">
      <select {...register('type')} className="px-3 py-2 border rounded min-w-[150px]">
        <option value="">Тип</option>
        <option value="office">Офис</option>
        <option value="shop">Магазин</option>
        <option value="warehouse">Склад</option>
      </select>

      <input
        type="number"
        placeholder="Стоимость от"
        {...register('priceFrom', { valueAsNumber: true })}
        className="px-3 py-2 border rounded w-24"
      />
      <input
        type="number"
        placeholder="до"
        {...register('priceTo', { valueAsNumber: true })}
        className="px-3 py-2 border rounded w-24"
      />

      <input
        type="number"
        placeholder="Площадь от"
        {...register('areaFrom', { valueAsNumber: true })}
        className="px-3 py-2 border rounded w-24"
      />
      <input
        type="number"
        placeholder="до"
        {...register('areaTo', { valueAsNumber: true })}
        className="px-3 py-2 border rounded w-24"
      />

      <input
        type="text"
        placeholder="Локация"
        {...register('location')}
        className="px-3 py-2 border rounded min-w-[250px]"
      />

      <label className="flex items-center space-x-2">
        <input type="checkbox" {...register('turnkey')} />
        <span>Под ключ</span>
      </label>

      <div className="w-full flex justify-between items-center mt-4">
        <button type="button" className="text-blue-600 underline">
          Расширенный поиск
        </button>
        <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">
          Показать {count.toLocaleString()} объектов
        </button>
      </div>
    </form>
  )
}

export default CommercialFilters
