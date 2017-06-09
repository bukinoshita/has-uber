'use strict'

const got = require('got')

const hasUber = place => {
  return got('https://www.uber.com/api/cities')
    .then(cities => JSON.parse(cities.body).filter(city => {
      if (city.slug === place.toLowerCase()) {
        return true
      }

      return false
    }))
    .catch(err => err)
}

module.exports = hasUber
