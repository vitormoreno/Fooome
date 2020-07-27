let listFood = require('../middlewares/getFood.js')

function match(food, attrs){

  let match = 0
  attrs.forEach( attr => food.attributes.includes(attr) ? match ++ : null )
  
  if(match > 0){
    food.match = match
    return food
  }
}

function sort(list, attr){

  return list.sort( (item, compare) =>
    item[attr] < compare[attr] ? 1 : compare[attr] < item[attr] ? -1 : null
  )
}

function suggestionFood(args){
  
  let attrs = Array.isArray(args.attributes) ? args.attributes : [args.attributes]

  let listSuggestion = listFood.filter( food => match(food, attrs))
  return sort(listSuggestion, 'match')
}

module.exports = suggestionFood