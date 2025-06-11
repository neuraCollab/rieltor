'use client'

import React, { useState } from 'react'
import FlatsFilters from './filters/FlatsFilters'
import ResidentialComplexesFilters from './filters/ResidentialComplexesFilters'
import HousesAndLandsFilters from './filters/HousesAndLandsFilters'
import CommercialFilters from './filters/CommercialFilters'
import GaragesFilters from './filters/GaragesFilters'
import ResidentialComplexCard from './blocks/ResidentialComplexCard'
import ApartmentCard from './blocks/ApartmentCard'
import HouseLandCard from './blocks/HouseLandCard'
import CommercialCard from './blocks/CommercialCard'
import GarageCard from './blocks/GarageCard'

const tabs = [
  {
    id: 'apartments',
    label: 'Квартиры',
    component: FlatsFilters,
    collection: 'flats',
    card: ApartmentCard,
  },
  {
    id: 'residentialComplexes',
    label: 'Жилые комплексы',
    component: ResidentialComplexesFilters,
    collection: 'residential-complexes',
    card: ResidentialComplexCard,
  },
  {
    id: 'housesAndLands',
    label: 'Дома и участки',
    component: HousesAndLandsFilters,
    collection: 'infrastructures',
    card: HouseLandCard, // Placeholder for HousesAndLandsCard
  },
  {
    id: 'commercial',
    label: 'Коммерческая',
    component: CommercialFilters,
    collection: 'commercial',
    card: CommercialCard, // Placeholder for CommercialCard
  },
  // {
  //   id: 'garages',
  //   label: 'Гаражи',
  //   component: GaragesFilters,
  //   collection: 'garages',
  //   card: GarageCard,
  // }, // Placeholder for GaragesCard
]

interface Tab {
  id: string
  label: string
  component: React.FC<{ onFilter: (query: string) => void }>
  collection: string
  card: React.FC<{ data: any }>
}

export const RealEstateFilterBlock = () => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0])
  const [results, setResults] = useState([])

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
    setResults([])
  }

  const handleFilter = async (query: string) => {
    const res = await fetch(`/api/${activeTab.collection}?${query}`, { cache: 'no-store' })
    const data = await res.json()
    setResults(data.docs)
  }

  const ActiveFilters = activeTab.component
  const ActiveCard = activeTab.card

  return (
    <div className="p-4 border rounded-xl shadow space-y-4 max-w-full">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab tab-bordered ${activeTab.id === tab.id ? 'tab-active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <ActiveFilters onFilter={handleFilter} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {results.map((item) => {
          return <ActiveCard data={item} />
        })}
      </div>
    </div>
  )
}
