import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  type: string
  priceFrom?: number
  priceTo?: number
  location: string
  withAccess: boolean
}

interface Props {
  onFilter: (query: string) => void
}

const GaragesFilters: React.FC<Props> = ({ onFilter }) => {
  const { register, watch, handleSubmit } = useForm<FormData>({
    defaultValues: {
      type: '',
      location: '',
      withAccess: false,
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

    fetch(`/api/garages/count?${query.toString()}`, { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setCount(data.totalDocs ?? 0))

    onFilter(query.toString())
  }, [JSON.stringify(watchAll)])

  return (
    <form onSubmit={handleSubmit(() => {})} className="flex flex-wrap gap-4">
      <select {...register('type')} className="px-3 py-2 border rounded min-w-[150px]">
        <option value="">Тип</option>
        <option value="indoor">Подземный</option>
        <option value="outdoor">Наземный</option>
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
        type="text"
        placeholder="Город, адрес, район, улица"
        {...register('location')}
        className="px-3 py-2 border rounded min-w-[250px]"
      />

      <label className="flex items-center space-x-2">
        <input type="checkbox" {...register('withAccess')} />
        <span>С подъездом</span>
      </label>

      <div className="w-full flex justify-between items-center mt-4">
        <button type="button" className="text-blue-600 underline">
          Расширенный поиск
        </button>
        <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">
          Показать {count.toLocaleString()} предложений
        </button>
      </div>
    </form>
  )
}

export default GaragesFilters
