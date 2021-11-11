import React from "react";
import {Link} from "react-router-dom";
import {Paper, Typography, makeStyles} from '@material-ui/core'
import Image from 'material-ui-image'


const useStyles = makeStyles({
    page:{
        padding:'2rem'
    }
})

const ProductDetail = ({ product, children}) => {
    const classes = useStyles()
    return ( product ?
        <Paper elevation={3} className={classes.page}>
            <Typography variant='h4'>{product.shoeName}</Typography>
            <Image src={product.thumbnail} />
            {/* <Typography>{product.brand}</Typography> */}
            <Typography>{product.colorway}</Typography>
            <Typography>${product.retailPrice}</Typography>
            {
                children
            }
        </Paper>
        : 'Loading.......'
    )
}

export default ProductDetail;