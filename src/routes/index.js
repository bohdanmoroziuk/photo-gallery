import { lazy } from 'react';

import { withProps } from '../hocs';

const Albums  = lazy(() => import('../pages/Albums'));
const Photos  = lazy(() => import('../pages/Photos'));
const NoMatch = lazy(() => import('../pages/NoMatch'));

const routes = [
  {
    path: '/',
    exact: true,
    render: withProps(Albums),
  }, {
    path: '/photos',
    render: withProps(Photos),
  }, {
    path: '*',
    render: withProps(NoMatch),
  }
];

export default routes;