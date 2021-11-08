const express = require('express');
const { getAllProducts } = require('../db');
const ordersRouter = express.Router();

const { getAllOrders, getCartByUser, createOrder } = require('../db');
const { addProductToOrder } = require("../db/order_products")
const { requireUser } = require('./util');

// GET /orders
ordersRouter.get('/', async (req, res, next) => {
    try {
        const orders = await getAllOrders();
        res.send(orders)
    } catch ({name, message}) {
        next({
            name: 'OrdersError',
            message: 'No orders found!'
        });
    }
});

// GET /orders/cart
ordersRouter.get('/cart', requireUser, async (req, res, next) => {
    const { id } = req.user;
    try {
        const cartOrders = await getCartByUser({id});
        res.send(cartOrders)
    } catch ({name, message}) {
        next({
            name: 'OrdersCartError',
            message: 'No orders in the cart!'
        })
    }
});

// POST /orders
ordersRouter.post('/', requireUser, async (req, res, next) => {
    const { status, userId } = req.body;
    try {
        const newOrder = await createOrder({status, userId});
        res.send({newOrder})
    } catch ({name, message}) {
        next({
            name,
            message
        })
    }
});

// POST /orders/:orderId/products
ordersRouter.post('/:orderId/products', requireUser, async (req, res, next) => {
    const { productId, price, quantity } = req.body;
    console.log('>>>>> in order routes', req.body)
    const { orderId } = req.params;
    try {
        const addedProductToOrder = await addProductToOrder({productId, orderId, price, quantity});
        res.send(addedProductToOrder)
    } catch ({name, message}) {
        next({name, message})
    }
});

module.exports = ordersRouter