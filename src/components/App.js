import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Navbar } from '.';
import {
  getSomething
} from '../api';

import { Products, Register, Test } from '../components';

const App = () => {
  const [message, setMessage] = useState('');
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');

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
    <Test />
    <Route exact path='/products/:productId'>
      <Products />
    </Route>
    <Route path='/accounts/register'>
      <Register setUser = {setUser} token = {token} setToken = {setToken}/>
    </Route>
  </BrowserRouter>
)
}

export default App;