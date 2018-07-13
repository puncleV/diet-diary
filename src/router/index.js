import Vue from 'vue'
import Router from 'vue-router'
import DailyList from '../components/daily-list'
import Login from '../components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/daily-list',
      name: 'DailyList',
      component: DailyList
    },
    {
      path: '/',
      component: Login
    }
  ]
})
