const express = require('express')
const path = require('path')

//routes
const productsRouter = require('./routes/products')
const produtsApiRouter = require('./api/products')

const app = express()

//engines
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use('/products',productsRouter)
app.use('/api/products',produtsApiRouter)


app.listen(3002,() =>{
  console.log('listen port 3002')
})

module.exports = app