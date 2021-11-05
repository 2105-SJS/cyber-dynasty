import React from "react";

const ProductDetail = ({ product, children}) => {
    return ( product ?
        <div>
            <div>{product.shoeName}</div>
            <div>{product.brand}</div>
            <div>Price: {product.retailPrice}</div>
            <div>{product.colorway}</div>
            <img src={product.thumbnail} />
        </div>
        : 'Loading.......'
    )
}

export default ProductDetail;