import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  isGetRouter: false,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/audit/index.vue')
    }
  ]
})

export default router
