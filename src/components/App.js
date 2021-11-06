import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import {
  getSomething
} from '../api';

import { 
  Products,
  Login,
  Product,
  Register,
  Orders
} from '../components';
import { callApi } from './util';


const App = () => {
  const [message, setMessage] = useState('');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const params = useParams();
  console.log('orderssssssssss', orders)
  const [ user, setUser ] = useState('');
  const [ token, setToken ] = useState('');

  const fetchProducts = async() => {
    const response = await callApi({
      url: '/products',
      token
    });
    console.log('all the products: ', response)
    const allProducts = response;
    if(allProducts) setProducts(allProducts);
  }

  const fetchOrders = async (orderId) => {
    const resp = await callApi({
      url: `/orders/${params.orderId}`,
      token
    });
    if(resp) setOrders();
  }

  useEffect(() => {
    try {
      fetchProducts();
    } catch (error) {
      console.error(error)
    }
  }, [token])

  useEffect(() => {
    try {
        fetchOrders();
    } catch (error) {
        console.error(error);
    }
}, [token, params.orderId])

  useEffect(() => {
    getSomething()
      .then(response => {
        setMessage(response.message);
      })
      .catch(error => {
        setMessage(error.message);
      });
  });

return (
  <div>
    <Route exact path='/products'>
      <Products products={products} token={token} setProducts={setProducts} />
    </Route>
    <Route exact path='/orders'>
      <Orders orders={orders} token={token} />
    </Route>
    <Route exact path='/products/:productId'>
      <Product products={products} token={token} setProducts={setProducts} />
    </Route>
    <Route exact path='/accounts/login'>
      <Login setUser={setUser} setToken={setToken} />
    </Route>
    <Route exact path='/accounts/register'>
      <Register setUser = {setUser} token = {token} setToken = {setToken}/>
    </Route>
  </div>
)
}

export default App;