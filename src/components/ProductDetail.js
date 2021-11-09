import React from "react";
import {Card, Typography} from '@material-ui/core'
import Image from 'material-ui-image'

const ProductDetail = ({ product, children}) => {
    return ( product ?
        <div>
            <Typography>{product.shoeName}</Typography>
            <Typography>{product.brand}</Typography>
            <Typography>Price: {product.retailPrice}</Typography>
            <Typography>{product.colorway}</Typography>
            <Image src={product.thumbnail} />
        </div>
        : 'Loading.......'
    )
}

export default ProductDetail;