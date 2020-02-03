const express = require('express')
const router = express.Router()
const  products = require('../utils/mocks/products.json')

router.get('/', (req, res) => {
  res.status(200).json({
    data: products,
    message: 'products data'
  })
})


router.get('/:productId', (req, res) => {
  res.status(200).json({
    data: products[0],
    message: 'product info'
  })
})

router.post('/', (req, res) => {
  res.status(200).json({
    data: products[0],
    message: 'product added'
  })
})

module.exports = router