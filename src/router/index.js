import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: r => require.ensure([], () => r(require('../components/pages/Index.vue')), 'Index'),
    },
    {
      path: '/login',
      name: 'login',
      component: r => require.ensure([], () => r(require('../components/pages/Login.vue')), 'Login'),
    },
    {
      path: '/notice',
      name: 'notice',
      component: r => require.ensure([], () => r(require('../components/pages/Notice.vue')), 'Notice'),
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: r => require.ensure([], () => r(require('../components/pages/Introduce.vue')), 'Introduce'),
    },
    {
      path: '/property',
      name: 'Property',
      component: r => require.ensure([], () => r(require('../components/pages/personal/property.vue')), 'Property'),
    },
    {
      path: '/userInfo',
      name: 'UserInfo',
      component: r => require.ensure([], () => r(require('../components/pages/personal/UserInfo.vue')), 'Property'),
    },
    {
      path: '/wtGuanli',
      name: 'WtGuanli',
      component: r => require.ensure([], () => r(require('../components/pages/personal/WtGuanli.vue')), 'Property'),
    },
    { path: '/', redirect: { path: '/index' }}
  ]
})

export default router
