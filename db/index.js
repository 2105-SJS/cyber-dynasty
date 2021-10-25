// Connect to DB
const {client} = require('./client')

const { 
  createProduct,
  getAllProducts,
  getProductById
} = require('./products');

module.exports = { createProduct, getAllProducts, getProductById}
