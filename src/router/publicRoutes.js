'use strict'

import Home from '../components/pages/home'

const publicRoutes = {
  rootPath: "/",
  routes: [
    {
      root: true,
      name: 'home',
      path: '/',
      comp: Home
    }
  ]
}

export default publicRoutes;
