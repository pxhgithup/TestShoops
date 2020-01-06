import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {
      path: '/',
      redirect:Index
    },
    {
      path: '/index',
      component: Index,
      name: 'Index'

    }

  ]
})
