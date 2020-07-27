const express = require("express")
const routes = express.Router()

const attributes = require('./middlewares/getAttributes')
const suggestionFoods = require("./controllers/suggestionFoods")

routes.use('/data', express.static('./src/data'))
routes.use('/scripts', express.static('./src/scripts'))
routes.use('/styles', express.static('./src/styles'))
routes.use('/images', express.static('./src/images')) 

routes.get('/', (req, res) => {   
  
  res.render('pages/home', {
    attributes: attributes
  })
})

routes.post('/pratos', (req, res) => {     
  
  res.render('pages/foods', {
    attributes: attributes,
    foods: suggestionFoods(req.body)
  })
})

module.exports = routes