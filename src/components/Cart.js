import React, { useContext} from "react";
import { callApi } from "./util";
import { UserContext } from "../context/userContext";
import { ProductSingle } from ".";
import {Card,  Typography, Grid, makeStyles } from '@material-ui/core'
import Image from 'material-ui-image'
import { StripeCheckoutButton } from ".";





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



const Cart = ({cartItems, setCartItems, getCart}) => {
    const classes = useStyles()
    const { token } = useContext(UserContext);
    const { products } = cartItems;
    if(products) {
        let price = 0
        products.forEach((product, idx)=>{
            price+=Number(product.price)
            console.log({idx, price})
        })
        return<> 
        
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
                products.map(product => 
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Card className= {classes.card}>
                    <Image src={product.thumbnail} />
                    <Typography>{product.shoeName}</Typography>
                    <Typography>{product.price}</Typography>
                </Card>
                </Grid>
                )
            }
        </Grid >
            <StripeCheckoutButton price = {price}/>
        </>
    } else {
        return <div>Nothing in the Cart</div>;
    }

    


    // return <>
    //     <h1>Cart</h1>
    //     {/* <button type="submit"
    //     onClick = {() => handleCartButton()}
    //     >View Cart</button> */}
    // </>
}



export default Cart;