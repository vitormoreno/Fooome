const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./routes')
app.use(routes)

app.listen(3000, (req, res) => console.log('Server rodando!'))