const express = require('express');
const { getAllProducts } = require('../db');
const ordersRouter = express.Router();

const { getAllOrders, getCartByUser } = require('../db');
const { requireUser } = require('./util');

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

ordersRouter.get('/cart', requireUser, async (req, res, next) => {
    console.log('>>>>>>>id', req.user)
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



module.exports = ordersRouter