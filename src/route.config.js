/**
 * Created by Me1kro on 16/12/22.
 */
import Home from './components/Home'
import Login from './components/Login'
import A from './components/tpl/A'
import B from './components/tpl/B'
export default {
  mode: 'history',//hash/history
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [{
        path: 'a',
        component: A,
      },
        {
          path: 'b',
          component: B,
        }]
    }
    ]
}
