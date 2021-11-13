import React,{createContext, useState, useEffect} from "react";
import { callApi } from "../components/util";

export const UserContext = createContext()


export const UserProvider = ({children})=>{
    const [token, setToken] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [cart, setCart] = useState()
    const [cartItems, setCartItems] = useState([]);

    
    // useEffect(async () => {
    //     try {
    //         const user = await callApi( {
    //             url: '/users/me',
    //             token
    //         });
    //         if (user.id){
    //         const cartResp = await callApi({
    //             method:'GET',
    //             url:'orders/cart',
    //             token,

    //         })
    //         if (!cartResp.message){
    //             setCart(cartResp.id)
    //             if(cartResp.products && cartResp.products.length){
    //                 setCartItems(cartResp.products)
    //             }
    //         }

    //         }
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }, [token])  

    useEffect(() => {
        try {
            if(localStorage.getItem('token') != '') {
                setToken(localStorage.getItem('token'))
                setIsLoggedIn(true)
            }
        } catch (error) {
            console.error(error)
        }
    }, [])  
    
    return <UserContext.Provider value ={{
        token, 
        setToken,
        isLoggedIn,
        setIsLoggedIn
    }}>{children}</UserContext.Provider>
}



