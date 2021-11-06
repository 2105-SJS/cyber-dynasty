import React, {useState} from 'react';
import {Card, Typography} from '@material-ui/core'
import Image from 'material-ui-image'

const ProductSingle = ({ product, children }) => {
    return (product ? 
        <Card>
            <hr></hr>
            <Typography><b>Brand: </b>{product.brand}</Typography>
            <Typography><b>Shoe Name: </b>{product.shoeName}</Typography>
            <Typography><b>Retail Price: </b>{product.retailPrice}</Typography>
            <Typography><b>inStock? </b>{product.inStock ? 'true' : 'false'}</Typography>
            <Image src={product.thumbnail} />
            {
                children
            }
        </Card>
        : 'Loading......')
}

export default ProductSingle;