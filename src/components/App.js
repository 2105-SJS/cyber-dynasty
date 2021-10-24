import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import {
  getSomething
} from '../api';

import { Products } from '../components';

const App = () => {
  const [message, setMessage] = useState('');
  const [products, setProducts] = useState([]);

  // const fetchProducts = async () => {

  // }

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
  // (
  //   <div className="App">
  //     <h1>Hello, World!</h1>
  //     <h2>{ message }</h2>
  //   </div>
  // );
}

export default App;