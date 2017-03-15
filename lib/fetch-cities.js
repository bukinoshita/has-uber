'use strict'

const fs = require('fs')
const got = require('got')

const fetchCities = () => {
  const apiUrl = 'https://www.uber.com/api/cities'

  return got(apiUrl)
    .then(cities => {
      fs.writeFileSync('cities.json', cities.body)
      fs.writeFileSync('last-check.txt', new Date())
    })
    .catch(err => console.log(err))
}

fetchCities()
