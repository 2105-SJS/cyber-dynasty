import React from 'react';

import { ProductSingle } from '.';

const Products = ({ products }) => {
    console.log('products in products.js ', products)
    return <>
    {
        products.map(product => <ProductSingle product={product} key={product.id} />)
    }
    </>
}

export default Products;