'use client'

import React from 'react'

export const RealEstateFilterBlock = () => {
  return (
    <div className="p-4 border rounded-xl shadow space-y-4 max-w-full">
      <div className="flex space-x-4 border-b pb-2">
        <button className="font-semibold border-b-2 border-red-500">Квартиры</button>
        <button>Жилые комплексы</button>
        <button>Дома и участки</button>
        <button>Коммерческая</button>
        <button>Гаражи</button>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded bg-gray-200">Вторичная</button>
          <button className="px-3 py-1 border rounded">Новостройки</button>
        </div>

        <select className="px-3 py-2 border rounded">
          <option>Выбрать</option>
        </select>

        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded">Студия</button>
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">4+</button>
        </div>

        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Стоимость от"
            className="px-3 py-2 border rounded w-24"
          />
          <input type="number" placeholder="до" className="px-3 py-2 border rounded w-24" />
        </div>

        <div className="flex space-x-2">
          <input type="number" placeholder="Площадь от" className="px-3 py-2 border rounded w-24" />
          <input type="number" placeholder="до" className="px-3 py-2 border rounded w-24" />
        </div>

        <input
          type="text"
          placeholder="Город, адрес, район, улица, ЖК"
          className="px-3 py-2 border rounded flex-1"
        />

        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Рассрочка</span>
        </label>

        <button className="text-blue-600 underline">Расширенный поиск</button>

        <button className="px-4 py-2 bg-red-500 text-white rounded">
          Показать 50 035 предложений
        </button>
      </div>
    </div>
  )
}
