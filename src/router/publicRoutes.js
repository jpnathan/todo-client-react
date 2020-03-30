'use strict'

import Login from '../components/pages/login'
import SignUp from '../components/pages/sign-up'

const publicRoutes = {
  rootPath: "/",
  routes: [
    {
      root: true,
      name: 'login',
      path: '/',
      comp: Login
    },
    {
      root: true,
      name: 'signUp',
      path: '/sign-up',
      comp: SignUp
    }
  ]
}

export default publicRoutes;
