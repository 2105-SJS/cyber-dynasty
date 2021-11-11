import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { ProductDetail } from '.';
import { callApi } from './util';
import { UserContext } from '../context/userContext';

const Product = ({products, addProductToCart}) => {
    const [ productDetails, setProductDetails ] = useState([]);
    const params = useParams();
    console.log('product ID ', params.productId)
    console.log('details: ', productDetails)
    const { token } = useContext(UserContext);

    const fetchSingleProduct = async () => {
        const resp = await callApi({
          url: `/products/${params.productId}`,
          token
        });
        console.log('singleProduct with Id: ', resp)
        if (resp) setProductDetails(resp)
    }

    useEffect(() => {
        try {
          fetchSingleProduct();
        } catch (error) {
          console.error(error);
        }
    }, [token, params.productId]);
    const orderId = 1;
    return <>
        <h1>Product</h1>
        {
            <ProductDetail product={productDetails}>
                <Link to='/products' >Back</Link>
                <button type="submit" onClick={() => {addProductToCart({productId: productDetails.id, orderId: orderId, price: productDetails.retailPrice, quantity: 1})}}>Add to Cart</button>
            </ProductDetail>
        }
    </>
}

export default Product;