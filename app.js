const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
require('./config/mongoose')
app.use(express.static('public')) 
app.use(routes)


app.listen(port,()=>{
  console.log(`localhost:${port}`)
})