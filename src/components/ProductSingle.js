import React, {useState} from 'react';

const ProductSingle = ({ product }) => {
    return (product ? 
        <div>
            <hr></hr>
            <div><b>Brand: </b>{product.brand}</div>
            <div><b>Inventory: </b>{product.inventory}</div>
            <div><b>ColorWay: </b>{product.colorway}</div>
            <div><b>Shoe Name: </b>{product.shoeName}</div>
            <div><b>Retail Price: </b>{product.retailPrice}</div>
            <div><b>inStock? </b>{product.inStock ? 'true' : 'false'}</div>
        </div>
        : 'Loading......')
}

export default ProductSingle;