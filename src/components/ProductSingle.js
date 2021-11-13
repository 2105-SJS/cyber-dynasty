import React, {useContext} from 'react';
import {Card, Typography, makeStyles} from '@material-ui/core'
import Image from 'material-ui-image'
import { Link } from 'react-router-dom'
import { callApi } from './util';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router';


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

const ProductSingle = ({ product, children, cartItems, getCart, setCartItems }) => {
    const classes = useStyles();
    const { token } = useContext(UserContext);
    const history = useHistory();
    const handleAddProductToCart = async (event) => {
        event.preventDefault();
        try {
            if (cartItems && product) {
                const productId = Number(product.id)
                const { id  } = cartItems;
                const { retailPrice } = product;
                if(id) {
                    const resp = await callApi({
                        method:'POST',
                        url: `/orders/${id}/products`,
                        body: {
                            quantity: 1,
                            productId: productId,
                            price: retailPrice
                        },
                        token
                    });
                    if (resp) {
                        await getCart();
                        history.push('/cart')
                        return resp;
                    }
                }
            }
        } catch (error) {
            console.error(error)
        }

    }

    return (product ? 
        <Card className={classes.card}>
            <Link to={`/products/${product.id}`}  >
                <Image src={product.thumbnail} />
            </Link>
            {/* <Typography>{product.brand}</Typography> */}
            <Typography>{product.shoeName}</Typography>
            <Typography className={classes.info}>
                <>{product.inStock ? '$'+product.retailPrice : 'Out Of Stock'}</>
                <Link to={`/products/${product.id}`} >Details</Link>
                <button onClick={handleAddProductToCart} >Add to Cart</button>
            </Typography>
        </Card>
        : 'Loading......')
}

export default ProductSingle;