const express = require('express');
const productsRouter = express.Router();
const { getAllProducts, getProductById } = require('../db/products');

productsRouter.get('/', async (req, res, next) => {
    try {
        const products = await getAllProducts();
        console.log(products.length, 'mangomango')
        res.send(products);
    } catch (error) {
        next(error)
    }
});

productsRouter.get('/:productId', async (req, res, next) => {
    try {
        const { productId } = req.params;
        if (!productId) {
            next ({
                name: 'badRequestError',
                message: 'Product Id was not provided'
            });
        }
        const productById = await getProductById(productId);
        if (!productById) {
            next ({
                name: 'productSearchError',
                message: 'Product with ID was not found'
            });
        }
        res.send(productById);
    } catch (error) {
        next(error)
    }
})

module.exports = productsRouter