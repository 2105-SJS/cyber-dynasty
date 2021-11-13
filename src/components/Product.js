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
    
    console.log('cart items in product.js', cartItems)

    const fetchSingleProduct = async () => {
        const resp = await callApi({
          url: `/products/${params.productId}`,
          token
        });
        if (resp) setProductDetails(resp)
    } 

    useEffect(() => {
        try {
          fetchSingleProduct();
        } catch (error) {
          console.error(error);
        }
    }, [token, params.productId]);
    return <>
        {
            <ProductDetail product={productDetails} quantity={quantity} setQuantity={setQuantity}>
                <Link to='/' >Back</Link>
            </ProductDetail>
        }
    </>
}

export default Product;