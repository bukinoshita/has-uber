'use strict'

const cities = require('./cities.json')

const hasUber = place => {
  return new Promise((resolve, reject) => {
    cities.filter(city => {
      if (city.slug === place) {
        resolve(true)
      }
    })

    reject(false)
  })
}

module.exports = hasUber
