import React, {useState} from 'react';

const ProductSingle = ({ product }) => {
    return (product ? 
        <div>
            <div>Brand: {product.brand}</div>
            <div>Inventory: {product.inventory}</div>
            <div>ColorWay: {product.colorway}</div>
            <div>Shoe Name: {product.shoeName}</div>
            <div>Retail Price: {product.retailPrice}</div>
            <div>inStock?: {product.inStock ? 'true' : 'false'}</div>
        </div>
        : 'Loading......')
}

export default ProductSingle;