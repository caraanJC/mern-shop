import express from 'express'
import {
  getAllProducts,
  getProductById,
} from '../controller/productControllers.js'

const router = express.Router()

//@desc GET all products from db
//@route GET /api/products
//@acces Public
router.get('/', getAllProducts)

//@desc GET a product by id from db
//@route GET /api/products/:id
//@acces Public
router.get('/:id', getProductById)

export default router
