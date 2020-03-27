import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const Shop = React.lazy(() => import('./views/Shop'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/shop', exact: true, name: 'Shop', component: Shop },
];

export default routes;
