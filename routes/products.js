const express = require('express');
const productsRouter = express.Router();
const { getAllProducts, getProductById } = require('../db/products');

productsRouter.get('/', async (req, res, next) => {
    try {
        const products = await getAllProducts();
        res.send(products);
    } catch (error) {
        next(error)
    }
});

productsRouter.get('/:productId', async (req, res, next) => {
    try {
        const { productId } = req.params;
        const productById = await getProductById(productId);
        res.send(productById);
    } catch (error) {
        next(error)
    }
})

module.exports = productsRouter