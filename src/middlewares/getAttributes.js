const fs = require('fs')

getIngredients = JSON.parse(fs.readFileSync(`${__dirname}/../data/attributes.json`, 'utf8'))

module.exports = getIngredients