import React, { lazy } from 'react';

const Albums = lazy(() => import('../pages/Albums'));
const Photos = lazy(() => import('../pages/Photos'));

const asFunction = Component => props => <Component {...props} />

const routes = [
  {
    path: '/',
    exact: true,
    render: asFunction(Albums),
  }, {
    path: '/photos',
    render: asFunction(Photos),
  },
];

export default routes;