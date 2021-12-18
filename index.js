const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
    console.log('connection open')
    })
    .catch(err => {
    console.log('Mongo Connection Error')
    console.log(err)
    })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')


app.get('/dog', (req, res) => {
    res.send('woof!')
})

app.listen(3000, () => {
    console.log('App on local 3000')
})
