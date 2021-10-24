import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {
  App, Navbar
} from './components';

ReactDOM.render(
<BrowserRouter>
<Navbar/>
  <App />
</BrowserRouter>,
  document.getElementById('root')
);