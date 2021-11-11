import React, {useState} from 'react';
import {Card, Typography, makeStyles} from '@material-ui/core'
import Image from 'material-ui-image'
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
    card:{
        padding:'1rem',
        margin:'1rem'
    },
    info:{
        display:'flex',
        flexFlow:'row nowrap',
        justifyContent:'space-between'

    }
})

const ProductSingle = ({ product, children }) => {
    const classes = useStyles()
    return (product ? 
        <Card className={classes.card}>
            <Link to={`/products/${product.id}`}  >
                <Image src={product.thumbnail} />
            </Link>
            {/* <Typography>{product.brand}</Typography> */}
            <Typography>{product.shoeName}</Typography>
            <Typography className={classes.info}>
                <>{product.inStock ? '$'+product.retailPrice : 'Out Of Stock'}</>
                <Link to={`/products/${product.id}`}  >Details</Link>
            </Typography>
        </Card>
        : 'Loading......')
}

export default ProductSingle;