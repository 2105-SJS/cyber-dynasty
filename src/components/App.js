import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {
  getSomething
} from '../api';

import { 
  Products,
  Login,
  ProductsView
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
  <BrowserRouter>
    <Route exact path='/products'>
      <Products products={products} token={token} />
    </Route>
    <Route exact path='/products/:productId'>
      <Products products={products} token={token} />
    </Route>
    <Route exact path='/accounts/login'>
      <Login setUser={setUser} setToken={setToken} />
    </Route>
  </BrowserRouter>
)
}

export default App;