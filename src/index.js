import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Shield from './services/Shield';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Index = () => (
  <Shield>
    <Router>
      <App />
    </Router>
  </Shield>
);

render(
  <Index />,
  document.getElementById('root')
);

serviceWorker.unregister();
