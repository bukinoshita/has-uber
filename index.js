// Packages
const got = require('got')

const hasUber = async place => {
  if (place) {
    const cities = await got('https://www.uber.com/api/cities')
    const isAvailable = JSON.parse(cities.body).filter(city => city.slug === place.toLowerCase())[0]

    return Boolean(isAvailable)
  }

  throw new TypeError('Place is required')
}

module.exports = hasUber
