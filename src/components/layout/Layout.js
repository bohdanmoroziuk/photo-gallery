import React, { Fragment } from 'react';

import AppNavbar from './AppNavbar';

const Layout = ({ children }) => (
  <Fragment>
    <AppNavbar />
    {children}
  </Fragment>
);

export default Layout;