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
    console.log("/cart route", req.user)
    try {
        if (req.user) {
            const { id } = req.user;
            const cart = await getCartByUser({ id });
            console.log("Cart in route /cart", cart)
            if (cart) {
                res.send(cart);
            };
        } else {
            res.status(500);
            res.send('Cart not found')
        };       
    } catch (error) {
        next(error);
    };
});

// POST /orders
ordersRouter.post('/', requireUser, async (req, res, next) => {
    const { status, userId } = req.body;
    const { id } = req.user;
    console.log("userId", userId)
    try {
        const newOrder = await createOrder({status, userId: userId || id});
        console.log("new Order in post /", newOrder)
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
    const { orderId } = req.params;
    try {
        const addedProductToOrder = await addProductToOrder({productId, orderId, price, quantity});
        res.send(addedProductToOrder)
    } catch ({name, message}) {
        next({name, message})
    }
});

module.exports = ordersRouter