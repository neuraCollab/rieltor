export type GeocodeResult = {
  lat: number
  lng: number
  displayName?: string
}

const DEFAULT_BASE = 'https://nominatim.openstreetmap.org'

export async function geocodeAddress(address: string): Promise<GeocodeResult | null> {
  if (!address) return null
  const base = process.env.NEXT_PUBLIC_NOMINATIM_BASE || DEFAULT_BASE
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'rieltor-app'
  const url = new URL(base + '/search')
  url.searchParams.set('q', address)
  url.searchParams.set('format', 'json')
  url.searchParams.set('limit', '1')

  const res = await fetch(url.toString(), {
    headers: {
      'User-Agent': appName,
      // Following Nominatim policy: include email or app name; app header is acceptable for small usage
      'Accept-Language': 'ru,en',
    },
  })

  if (!res.ok) return null
  const data = (await res.json()) as Array<{
    lat: string
    lon: string
    display_name?: string
  }>
  if (!Array.isArray(data) || data.length === 0) return null
  const first = data[0]
  const lat = Number(first.lat)
  const lng = Number(first.lon)
  if (Number.isNaN(lat) || Number.isNaN(lng)) return null
  return { lat, lng, displayName: first.display_name }
}


