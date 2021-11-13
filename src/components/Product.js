import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { ProductDetail } from '.';
import { callApi } from './util';
import { UserContext } from '../context/userContext';

const Product = ({products, addProductToCart, cartItems, setCartItems, getCart}) => {
    const [ productDetails, setProductDetails ] = useState([]);
    const [quantity, setQuantity] = useState(1)
    const params = useParams();
    const { token } = useContext(UserContext);
    console.log("token on product.js ", token)
    console.log('product details in Product.js: ', productDetails)
    console.log('cart items in product.js', cartItems)

    const fetchSingleProduct = async () => {
        const resp = await callApi({
          url: `/products/${params.productId}`,
          token
        });
        if (resp) setProductDetails(resp)
    }

    // const fetchSingleProductToOrder = async (orderId) => {
    //     const response = await callApi({
    //         method: "POST",
    //         url: `/orders/${orderId}/products`,
    //         body: {
    //             productId: params.productId,
    //             orderId,
    //             price: productDetails.retailPrice,
    //             quantity
    //         },
    //         token
    //     })
    //     console.log('response in fetchSingleProductToOrder: ', response)
    // }
    // let productFound;
    // if (cartItems.length > 0) {
    //     productFound = cartItems.product.find(product => product.id === products.id)
    // }

    // const handleAddProductToCart = async (event) => {
    //     event.preventDefault();
    //     console.log("before trycatch in handle add to cart")
    //     try {
    //         console.log("after trycatch")
    //         if (cartItems && products) {
    //             console.log("after first if statement: ", cartItems, products)
    //             const productId = Number(productFound.id)
    //             console.log("productId ", productId)
    //             const { id } = cartItems;
    //             if(id) {
    //                 const resp = await callApi({
    //                     method:'POST',
    //                     url: `/orders/${id}/products`,
    //                     body: {
    //                         quantity: 1,
    //                         productId
    //                     },
    //                     token
    //                 });
    //                 console.log('resp in handle add product to cart: ', resp)
    //                 if (resp) {
    //                     await getCart();
    //                     return resp;
    //                 }
    //             }
    //         }
    //     } catch (error) {
    //         console.error(error)
    //     }

    // }

    // useEffect(() => {
    //     try {
    //         fetchSingleProductToOrder();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, [])

    useEffect(() => {
        try {
          fetchSingleProduct();
        } catch (error) {
          console.error(error);
        }
    }, [token, params.productId]);
    // const orderId = 1;
    return <>
        {
            <ProductDetail product={productDetails} quantity={quantity} setQuantity={setQuantity}>
                <Link to='/' >Back</Link>
                {/* <button onClick={handleAddProductToCart}>Add to Cart</button> */}
            </ProductDetail>
        }
    </>
}

export default Product;