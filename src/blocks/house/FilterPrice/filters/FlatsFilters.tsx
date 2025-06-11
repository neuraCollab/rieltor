import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useWatch } from 'react-hook-form'

type FormData = {
  type?: 'flat' | 'apartment' | 'townhouse'
  category?: 'buy' | 'rent'
  rooms?: string
  priceFrom?: number
  priceTo?: number
  areaFrom?: number
  areaTo?: number
  city?: string
  district?: string
  address?: string
}

interface Props {
  onFilter: (query: string) => void
}

const FlatsFilters: React.FC<Props> = ({ onFilter }) => {
  const { register, watch, handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      type: 'flat',
      category: 'buy',
    },
  })

  const [count, setCount] = useState(0)
  const watchFields = watch()
  const watched = useWatch({ control })

  useEffect(() => {
    const query = new URLSearchParams()
    for (const [key, value] of Object.entries(watched)) {
      if (value !== '' && value !== undefined) {
        query.append(key, String(value))
      }
    }

    fetch(`/api/flats/count?${query.toString()}`, { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setCount(data.count ?? 0))

    onFilter(query.toString())
  }, [watched])

  return (
    <form onSubmit={handleSubmit(() => {})} className="flex flex-wrap gap-4">
      <select {...register('type')} className="px-3 py-2 border rounded min-w-[150px]">
        <option value="">Тип</option>
        <option value="flat">Квартира</option>
        <option value="apartment">Апартаменты</option>
        <option value="townhouse">Таунхаус</option>
      </select>

      <select {...register('category')} className="px-3 py-2 border rounded min-w-[150px]">
        <option value="">Категория</option>
        <option value="buy">Купить</option>
        <option value="rent">Снять</option>
      </select>

      <select {...register('rooms')} className="px-3 py-2 border rounded min-w-[150px]">
        <option value="">Комнат</option>
        <option value="studio">Студия</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4+">4+</option>
      </select>

      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Цена от"
          {...register('priceFrom', { valueAsNumber: true })}
          className="px-3 py-2 border rounded w-24"
        />
        <input
          type="number"
          placeholder="до"
          {...register('priceTo', { valueAsNumber: true })}
          className="px-3 py-2 border rounded w-24"
        />
      </div>

      <div className="flex gap-2">
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
      </div>

      <input
        type="text"
        placeholder="Город"
        {...register('city')}
        className="px-3 py-2 border rounded min-w-[150px]"
      />
      <input
        type="text"
        placeholder="Район"
        {...register('district')}
        className="px-3 py-2 border rounded min-w-[150px]"
      />
      <input
        type="text"
        placeholder="Адрес"
        {...register('address')}
        className="px-3 py-2 border rounded min-w-[150px]"
      />

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

export default FlatsFilters
