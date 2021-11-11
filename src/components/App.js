import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import {Container, makeStyles} from '@material-ui/core'

import {
  getSomething
} from '../api';

import { 
  Products,
  Login,
  Product,
  Register,
  Orders,
  Profile,
  Home,
  Cart
} from '../components';
import { callApi } from './util';


const useStyles = makeStyles({
  page:{
    backgroundColor:'#7289DA',
    minHeight:'100vh',
    paddingTop:'2rem'
  }
})

const App = () => {
  const classes = useStyles()
  const [message, setMessage] = useState('');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const { token, setToken, isLoggedIn } = useContext(UserContext);
  const params = useParams();

  const addProductToCart = async ({productId, orderId, price, quantity}) => {
    const order = await callApi({
      method: "POST",
      url: `/orders/${orderId}/products`,
      body: {
        productId,
        price,
        quantity
      }
    })
  }

  const fetchProducts = async() => {
    const response = await callApi({
      url: '/products'
    });

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
  }, [])

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
  useEffect(() => {
    try {

        if(localStorage.getItem("token") != '' ) {
            // setToken(localStorage.getItem("token"))
            // isLoggedIn(true)
        }
    } catch (error) {
        console.error(error)
    }
}, [])  

return (
  <div className={classes.page}>
  <Container maxWidth='lg'>
    {/* <Route exact path='/home'>
      <Home user={user} setUser={setUser} />
    </Route> */}
    <Route exact path='/cart'>
      <Cart products={products} setProducts={setProducts} cartItems={cartItems} addProductToCart={addProductToCart} />
    </Route>
    <Route exact path='/'>
      <Products products={products} setProducts={setProducts} />
    </Route>
    <Route exact path='/orders'>
      <Orders orders={orders} />
    </Route>
    <Route exact path='/accounts'>
      <Profile user={user} setUser={setUser} />
    </Route>
    <Route exact path='/products/:productId'>
      <Product products={products} setProducts={setProducts} addProductToCart={addProductToCart} />
    </Route>
    <Route exact path='/accounts/login'>
      <Login setUser={setUser} />
    </Route>
    <Route exact path='/accounts/register'>
      <Register setUser = {setUser} />
    </Route>
  </Container>
  </div>
)
}

export default App;