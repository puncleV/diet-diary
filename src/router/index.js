import Vue from 'vue'
import Router from 'vue-router'
import Auth from '../utils/Auth'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'login',
      path: '/login'
    },
    {
      path: '/daily-list',
      name: 'DailyList',
      component: () => {
        return import('../components/daily-list')
      },
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((transition, from, next) => {
  console.log(transition)
  if (transition.meta.requiresAuth && !Auth.loggedIn()) {
    next('/login')
  } else {
    next()
  }
})

export default router