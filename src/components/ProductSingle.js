import React, {useState} from 'react';

const ProductSingle = ({ product, children }) => {
    return (product ? 
        <div>
            <hr></hr>
            <div><b>Brand: </b>{product.brand}</div>
            <div><b>Image: </b>{product.thumbnail}</div>
            {/* <div><b>ColorWay: </b>{product.colorway}</div> */}
            <div><b>Shoe Name: </b>{product.shoeName}</div>
            <div><b>Retail Price: </b>{product.retailPrice}</div>
            <div><b>inStock? </b>{product.inStock ? 'true' : 'false'}</div>
            {
                children
            }
        </div>
        : 'Loading......')
}

export default ProductSingle;