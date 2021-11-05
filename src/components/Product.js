import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { ProductDetail } from '.';
import { callApi } from './util';

const Product = ({products, token}) => {
    const [ productDetails, setProductDetails ] = useState([]);
    const params = useParams();
    console.log('product ID ', params.productId)
    console.log('details: ', productDetails)

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
    }, [token, params.productId])

    // console.log('products in products.js ', products)
    // const handleDetails = async (productId) => {
    //     const detailResp = await callApi({
    //         method: "GET",
    //         url: `/products/${productId}`
    //     });
    //     console.log('details button: ', detailResp)
    //     await setProductDetails(detailResp);
    // }
    return <>
        <h1>Product</h1>
        {
            <ProductDetail product={productDetails}>
                {/* <button onClick={() => handleDetails(product.id)}>Details</button> */}
            </ProductDetail>
        }
    </>
}

export default Product;