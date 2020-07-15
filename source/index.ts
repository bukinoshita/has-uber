import got from 'got'
import { API_URL } from './utils/constants'

export const hasUber = async (country: string, city?: string) => {
  try {
    const { body }: { body: { city: string }[] } = await got(`${API_URL}/${country}`, {
      responseType: 'json',
    })

    if (body && city) {
      const isAvaialble = body.filter((cities: any) => cities.city === city).length > 0
      return isAvaialble
    }

    return true
  } catch (error) {
    return false
  }
}
