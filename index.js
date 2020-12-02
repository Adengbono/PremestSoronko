//modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

//variables
const dbLink =  process.env.DBLink
const port = process.env.PORT
const userRoutes = require('./src/routes/userRoute')

// database Connection

mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, () => {
    app.listen(port,() => {
        console.info(`DATABASE CONNECTED, SERVER IS UP! ON PORT: ${port}`)
    })
})
//middlewares
app.use(express.json())
 
//routes
app.use(userRoutes)

app.get('/', (req, res) => {
    res.status(200).send('<h1> hei you, you dey town</h1>')
})

app.use('/index',express.static('public'))
app.use('/about',express.static('public'))
app.use('/boy',express.static('public')) 