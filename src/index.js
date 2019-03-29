import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Index = () => (
  <Router>
    <App />
  </Router>
);

render(
  <Index />, 
  document.getElementById('root')
);

serviceWorker.unregister();
