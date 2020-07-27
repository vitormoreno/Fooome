const fs = require('fs')

getIngredients = JSON.parse(fs.readFileSync(`${__dirname}/../data/ingredients.json`, 'utf8'))

module.exports = getIngredients