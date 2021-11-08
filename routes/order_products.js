const express = require('express');
const { updateOrderProduct, destroyOrderProduct } = require('../db/order_products');
const { requireUser } = require('./util');
const orderProductRouter = express.Router();

// PATCH /order_products/:orderProductId
orderProductRouter.patch('/:orderProductId', requireUser, async (req, res, next) => {
    console.log("before trycatch")
    try {
        const { orderProductId } = req.params;
        console.log("after trycatch id", orderProductId)
        const { price, quantity } = req.body;
        const updatedOrderProduct = await updateOrderProduct({orderProductId, price, quantity});
        console.log(">>>>>>>>>> updatedOrderProduct", updatedOrderProduct)
        res.send(updatedOrderProduct);
    } catch ({name, message}) {
        next({name, message})
    }
});

// DELETE /order_products/:orderProductId
orderProductRouter.delete('/:orderProductId', requireUser, async (req, res, next) => {
    try {
        const { orderProductId } = req.params;
        const deletedOrderProduct = await destroyOrderProduct({orderProductId});
        res.send(deletedOrderProduct);
    } catch ({name, message}) {
        next({name, message})
    }
})

module.exports = orderProductRouter;