import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {
  getSomething
} from '../api';


import { 
  Products,
  Login,
  ProductsView,
  Register, Test
} from '../components';
import { callApi } from './util';


const App = () => {
  const [message, setMessage] = useState('');
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    try {
      fetchProducts();
    } catch (error) {
      console.error(error)
    }
  }, [token])


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
      <Products products={products} token={token} />
    </Route>
    <Route exact path='/products/:productId'>
      <ProductsView products={products} token={token} />
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