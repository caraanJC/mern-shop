import dotenv from 'dotenv'
import productsData from './data/products.js'
import connectDB from './config/db.js'
import Product from './models/Product.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany({})

    await Product.insertMany(productsData)

    console.log('Data Import Success')

    process.exit()
  } catch (error) {
    console.error('Error with data import')
    process.exit(1)
  }
}

importData()
