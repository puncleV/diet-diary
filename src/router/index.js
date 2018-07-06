import Vue from 'vue'
import Router from 'vue-router'
import DailyList from '../components/daily-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DailyList',
      component: DailyList
    }
  ]
})
