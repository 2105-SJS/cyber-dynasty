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
  Cart,
  Search, 
  About,
} from '../components';
import { callApi } from './util';


const useStyles = makeStyles({
  page:{
    backgroundColor:'#7289DA',
    minHeight:'90vh',
    paddingTop:'2rem'
  }
})

const App = () => {
  const classes = useStyles()
  const [message, setMessage] = useState('');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState({});

  const { token } = useContext(UserContext);
  const params = useParams();

  const createCart = async (userId) => {
    try {
      const resp = await callApi({
        method: 'POST',
        url: '/orders',
        body: {
          userId
        },
        token
      });
      if(resp) {
        setCartItems(resp)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const getCart = async () => {
    try {
      const cartResp = await callApi({
        method: "GET",
        url: '/orders/cart',
        token
      });
      if(!cartResp) {
        await createCart();
        await getCart();
      }
      if (cartResp) {
        setCartItems(cartResp);
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchProducts = async() => {
    const response = await callApi({
      url: '/products'
    });
    const allProducts = response;
    if(allProducts) setProducts(allProducts);
  }

  const fetchOrders = async () => {
    const resp = await callApi({
      url: `/orders`,
      token
    });
    if(resp) setOrders(resp);
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
      if (token) {
        getCart()
      }
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
      <Cart products={products} getCart={getCart} setProducts={setProducts} cartItems={cartItems} setCartItems={setCartItems} />
    </Route>
    <Route exact path='/'>
      <Search products={products} setProducts={setProducts} fetchProducts={fetchProducts} />
      <Products products={products} setProducts={setProducts} getCart={getCart} cartItems={cartItems} setCartItems={setCartItems} />
    </Route>
    <Route exact path='/orders'>
      <Orders orders={orders} />
    </Route>
    <Route exact path='/accounts'>
      <Profile user={user} setUser={setUser} />
    </Route>
    <Route exact path='/products/:productId'>
      <Product products={products} getCart={getCart} setProducts={setProducts} cartItems={cartItems} setCartItems={setCartItems} />
    </Route>
    <Route exact path='/accounts/login'>
      <Login setUser={setUser} />
    </Route>
    <Route exact path='/accounts/register'>
      <Register setUser = {setUser} />
    </Route>
    <Route exact path='/about'>
      <About/>
    </Route>
  </Container>
  </div>
)
}

export default App;