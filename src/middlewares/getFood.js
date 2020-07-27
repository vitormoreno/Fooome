const fs = require('fs')

getFood = JSON.parse(fs.readFileSync(`${__dirname}/../data/food.json`, 'utf8'))

module.exports = getFood