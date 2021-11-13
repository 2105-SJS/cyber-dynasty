import React from "react";
import { callApi } from "./util";

const Orders = ({ token, orders }) => {
    console.log('orders in orders.js', orders)

    return <>
        <h1>Orders</h1>
        <div>{orders.userId}</div>
        <div>{orders.status}</div>
    </>
}

export default Orders;