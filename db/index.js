// Connect to DB
const {client} = require('./client')

const { 
  createProduct,
  getAllProducts,
  getProductById
} = require('./products');

const {
  getAllOrders,
  getCartByUser,
  createOrder,
  getOrderById,
  getOrderProductByOrderAndProduct
} = require('./orders')

module.exports = { createProduct, getAllProducts, getProductById, getAllOrders, getCartByUser, createOrder, getOrderById }
