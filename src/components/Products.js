import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { ProductSingle } from '.';
import { callApi } from './util';
const Products = ({ products, token }) => {
    console.log('products in products.js ', products)
    return <>
    {
        products.map(product => <ProductSingle product={product} key={product.id} >
            <hr></hr>
            <Link to={`/products/${product.id}`}  >Details</Link>
        </ProductSingle>)
    }
    </>
}

export default Products;