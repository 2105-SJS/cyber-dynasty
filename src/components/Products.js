import React, { useState, useEffect } from 'react';
import {Grid} from '@material-ui/core'

import { ProductSingle } from '.';

const Products = ({ products }) => {

    return <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {
        products.map(product => <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
        <ProductSingle product={product} key={product.id} />
        </Grid>)
    }
    </Grid>
}

export default Products;