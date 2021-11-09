import React, { useContext} from "react";
import { callApi } from "./util";
import { UserContext } from "../context/userContext";

const Cart = () => {
    const { token } = useContext(UserContext);
    const handleCartButton = async () => {
        const cartResp = await callApi({
            method: "GET",
            url: '/orders/cart',
            token
        });
        console.log("cart stuff ", cartResp)
    }
    return <>
        <h1>Cart</h1>
        <button type="submit"
        onClick = {() => handleCartButton()}
        >View Cart</button>
    </>
}

export default Cart;