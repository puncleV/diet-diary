import Vue from 'vue'
import Router from 'vue-router'
import Auth from '../utils/Auth'

Vue.use(Router)
const requireAuth = (to, from, next) => {
  if (!Auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}


const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/daily-list'
    },
    {
      name: 'login',
      path: '/login',
      component: () => {
        return import('../components/login')
      }
    },
    {
      path: '/daily-list',
      name: 'DailyList',
      component: () => {
        return import('../components/daily-list')
      },
      beforeEnter: requireAuth
    },
    {
      name: 'logout',
      path: '/logout',
      beforeEnter: (to, from, next) => {
        Auth.logout()
        next({
          name: 'login'
        })
      }
    }
  ]
})

export default router