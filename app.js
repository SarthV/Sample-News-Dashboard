const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))



app.set('views', './src/views')
app.set('view engine', 'ejs')


const newsRouter  = require('./src/routes/news')
app.use(bodyParser.urlencoded({ extended : true}))
app.use('/', newsRouter)



app.listen(5000, ()=> console.log("listening"))