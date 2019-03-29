import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import Shield from './services/Shield';

import store from './redux/store';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Index = () => (
  <Shield>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Shield>
);

render(
  <Index />,
  document.getElementById('root')
);

serviceWorker.unregister();
