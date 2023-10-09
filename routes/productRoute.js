const express = require('express')
const Product = require('../Models/productModel')
const {getProducts, getProduct, updateProduct, deleteProduct, createProduct} = require('../controllers/productController')

const router = express.Router()


// create a product
router.post('/',createProduct)

// get all product
router.get('/', getProducts)

// get a single product
router.get('/:id', getProduct)

//update  a product
router.put('/:id',updateProduct)

//  delete api
router.delete('/:id', deleteProduct)


module.exports = router