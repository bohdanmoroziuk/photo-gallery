import React from 'react';

import routes from './routes';
import Layout from './components/layout/Layout';
import RouterOutlet from './services/RouterOutlet';

const App = () => (
  <div className="app">
    <Layout>
      <RouterOutlet routes={routes} />
    </Layout>
  </div>
);

export default App;