import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {
  App, Navbar
} from './components';
import { UserProvider } from './context/userContext';

ReactDOM.render(
<BrowserRouter>
  <UserProvider>
    <Navbar/>
    <App />
  </UserProvider>
</BrowserRouter>,
  document.getElementById('root')
);