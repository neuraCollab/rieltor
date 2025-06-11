import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  developer: string
  status?: 'completed' | 'building' | 'not_started'
  class?: 'economy' | 'business' | 'premium'
  city: string
  district: string
  address: string
}

interface Props {
  onFilter: (query: string) => void
}

const ResidentialComplexesFilters: React.FC<Props> = ({ onFilter }) => {
  const { register, watch, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: '',
      developer: '',
      city: '',
      district: '',
      address: '',
    },
  })

  const [count, setCount] = useState(0)
  const watchAll = watch()

  useEffect(() => {
    const query = new URLSearchParams()

    for (const [key, value] of Object.entries(watchAll)) {
      if (value !== '' && value !== undefined) {
        query.append(key, String(value))
      }
    }

    // Пример запроса количества
    fetch(`/api/residential-complexes/count?${query.toString()}`, { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setCount(data.totalDocs ?? 0))

    onFilter(query.toString())
  }, [JSON.stringify(watchAll)])

  return (
    <form onSubmit={handleSubmit(() => {})} className="flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Название ЖК"
        {...register('name')}
        className="px-3 py-2 border rounded min-w-[200px]"
      />

      <input
        type="text"
        placeholder="Застройщик"
        {...register('developer')}
        className="px-3 py-2 border rounded min-w-[200px]"
      />

      <select {...register('status')} className="px-3 py-2 border rounded min-w-[200px]">
        <option value="">Статус</option>
        <option value="completed">Сдан</option>
        <option value="building">Строится</option>
        <option value="not_started">Не начат</option>
      </select>

      <select {...register('class')} className="px-3 py-2 border rounded min-w-[200px]">
        <option value="">Класс</option>
        <option value="economy">Эконом</option>
        <option value="business">Бизнес</option>
        <option value="premium">Премиум</option>
      </select>

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
        className="px-3 py-2 border rounded min-w-[200px]"
      />

      <div className="w-full flex justify-between items-center mt-4">
        <button type="button" className="text-blue-600 underline">
          Расширенный поиск
        </button>
        <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">
          Показать {count.toLocaleString()} ЖК
        </button>
      </div>
    </form>
  )
}

export default ResidentialComplexesFilters
