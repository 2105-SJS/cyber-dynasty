import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { callApi } from "./util";

const Orders = ({ token }) => {
    const [orders, setOrders] = useState([]);
    const params = useParams();
    console.log('orders', orders)

    const fetchOrders = async (orderId) => {
        const resp = await callApi({
          url: `/orders/${params.orderId}`,
          token
        });
        if(resp) setOrders();
    }

    useEffect(() => {
        try {
            fetchOrders();
        } catch (error) {
            console.error(error);
        }
    }, [token, params.orderId])

    return <>
        <h1>Orders</h1>
        <div>{orders.userId}</div>
        <div>{orders.status}</div>
    </>
}

export default Orders;