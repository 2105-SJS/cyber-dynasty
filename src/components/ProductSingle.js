import React, {useState} from 'react';

const ProductSingle = ({ product, children }) => {
    return (product ? 
        <div>
            <hr></hr>
            <div><b>Brand: </b>{product.brand}</div>
            <div><b>Shoe Name: </b>{product.shoeName}</div>
            <div><b>Retail Price: </b>{product.retailPrice}</div>
            <div><b>inStock? </b>{product.inStock ? 'true' : 'false'}</div>
            <img src={product.thumbnail} />
            {
                children
            }
        </div>
        : 'Loading......')
}

export default ProductSingle;