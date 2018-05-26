import Vue from 'vue'
import Router from 'vue-router'

import Marketing from '@/components/Marketing/index'
import Admin from '@/components/Admin/index'
import Analysis from '@/components/Analysis/index'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '*',
      redirect:'/marketing'
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: Marketing
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: Analysis
    },
  ]
});
