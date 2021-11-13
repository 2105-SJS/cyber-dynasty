import React, { useContext} from "react";
import { callApi } from "./util";
import { UserContext } from "../context/userContext";
import { ProductSingle } from ".";

const Cart = ({cartItems, setCartItems, getCart}) => {
    const { token } = useContext(UserContext);
    const { products } = cartItems;
    if(products) {
        return <>
            {
                products.map(product => <div>
                    <div>{product.shoeName}</div>
                    <div>{product.price}</div>
                    <img src={product.thumbnail} />
                </div>)
            }
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