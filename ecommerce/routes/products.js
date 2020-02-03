const express = require('express')
const router = express.Router()

const products = [
  {
    name: 'xiaomi mi 8 lite',
    price: 200
  },
  {
    name: 'iphone 7',
    price: 500
  },
  {
    name: 'samsung galaxy 10',
    price: 300
  }
]


router.get('/',(req, res) => {
  res.send(products)
})

module.exports = router
