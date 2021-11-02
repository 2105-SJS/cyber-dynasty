import React from 'react';
import ProductSingle from './ProductSingle';

const ProductsView = ({products}) => {
    return <>
        {
            products.map(product => <ProductSingle product={product} key={product.id} />)
        }
    </>
}

export default ProductsView;