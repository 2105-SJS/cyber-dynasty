import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Navbar } from '.';
import {
  getSomething
} from '../api';

import { Products } from '../components';

const App = () => {
  const [message, setMessage] = useState('');
  const [products, setProducts] = useState([]);

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
    <Route exact path='/products/:productId'>
      <Products />
    </Route>
  </BrowserRouter>
)
}

export default App;