const express = require('express');
const { getOrderById } = require('../db/orders');
const { updateOrderProduct, destroyOrderProduct, getOrderProductById } = require('../db/order_products');
const { requireUser } = require('./util');
const orderProductRouter = express.Router();

// PATCH /order_products/:orderProductId
orderProductRouter.patch('/:orderProductId', requireUser, async (req, res, next) => {
    try {
        const { orderProductId } = req.params;
        const { price, quantity } = req.body;
        const updatedOrderProduct = await updateOrderProduct({orderProductId, price, quantity});
        res.send(updatedOrderProduct);
    } catch ({name, message}) {
        next({name, message})
    }
});

// DELETE /order_products/:orderProductId
orderProductRouter.delete('/:orderProductId', requireUser, async (req, res, next) => {
    try {
        const { orderProductId } = req.params;
        const userId = req.user.id;
        const orderProduct = await getOrderProductById(orderProductId);
        if (orderProduct) {
            const {orderId} = orderProduct;
            const order = await getOrderById(orderId);
            if(order && order.userId === userId) {
                const deletedOrderProduct = await destroyOrderProduct(orderProductId);
                if(deletedOrderProduct) {
                    next({
                        name: 'DeleteSuccess',
                        message: 'Product was removed from the cart successfully!'
                    })
                }
            }
        }
    } catch ({name, message}) {
        next({name, message})
    }
})

module.exports = orderProductRouter;