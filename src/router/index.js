import Vue from 'vue'
import Router from 'vue-router'
import notFound from '@/views/notFound'
import login from '@/views/login'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '*',
      name: 'notFound',
      component: notFound
    }
  ]
})
