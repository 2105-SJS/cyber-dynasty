import React, {useContext} from 'react';
import { callApi } from "./util";
import { UserContext } from "../context/userContext";
import {Card,  Typography, Grid, makeStyles } from '@material-ui/core'
import Image from 'material-ui-image'
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
});

const CartProducts = ({product, cartItems, getCart}) => {
    const history = useHistory()
    const classes = useStyles()
    const { token } = useContext(UserContext);

    const handleRemoveFromCart = async () => {
        try {
            const response = await callApi ({ 
                url: `/order_products/${product.id}`,
                method: 'DELETE',
                token
            });
            if (response) {
                await getCart();
                history.push('/cart')
            }
        } catch (error) {
            console.error (error);
        };
    };

    return <>
        <Link to='/'>Back</Link>
        <Card className= {classes.card}>
            <Image src={product.thumbnail} />
            <Typography>{product.shoeName}</Typography>
            <Typography>{product.price}</Typography>
            <button onClick={handleRemoveFromCart}>Remove</button>
        </Card>
    </>
}
export default CartProducts;