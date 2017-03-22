'use strict'

const cities = require('./cities.json')

const hasUber = place => {
  return new Promise(resolve => {
    cities.filter(city => {
      if (city.slug === place) {
        resolve(true)
      }
    })

    resolve(false)
  })
}

module.exports = hasUber
