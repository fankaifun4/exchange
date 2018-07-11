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
    //账户资产
    {
      path: '/property',
      name: 'Property',
      component: r => require.ensure([], () => r(require('../components/pages/personal/Property.vue')), 'Property'),
    },
    //账户信息
    {
      path: '/userInfo',
      name: 'UserInfo',
      redirect: { name: 'UserCenter' },
      component: r => require.ensure([], () => r(require('../components/pages/personal/UserInfo.vue')), 'userInfo'),
      children:[
        {
          path: '',
          redirect: { name: 'UserCenter' }
        },
        {
          path: 'userCenter',
          name: 'UserCenter',
          component: r => require.ensure([], () => r(require('../components/pages/personal/components/UserMsg.vue')), 'userInfo'),
        },
        {
          path: 'idAuth',
          name: 'IdAuth',
          component: r => require.ensure([], () => r(require('../components/pages/personal/components/IdAuth.vue')), 'userInfo'),
          children:[
            {
              path: 'chinaAuth',
              name: 'ChinaAuth',
              component: r => require.ensure([], () => r(require('../components/pages/personal/components/ChinaAuth.vue')), 'userInfo')
            },
            {
              path: 'guowaiAuth',
              name: 'GuowaiAuth',
              component: r => require.ensure([], () => r(require('../components/pages/personal/components/GuowaiAuth.vue')), 'userInfo')
            }
          ]
        },

      ]
    },
    //我的委托
    {
      path: '/myInvite',
      name: 'MyInvite',
      component: r => require.ensure([], () => r(require('../components/pages/personal/components/MyInvite.vue')), 'Property'),
    },
    //委托管理
    {
      path: '/wtGuanli',
      name: 'WtGuanli',
      component: r => require.ensure([], () => r(require('../components/pages/personal/WtGuanli.vue')), 'Property'),
    },
    //密码重置
    {
      path: '/loginPwd',
      name: 'LoginPwd',
      component: r => require.ensure([], () => r(require('../components/pages/personal/userinfo/Returnpswd.vue')), 'Property'),
    },

    //绑定短信验证
    {
      path: '/bindSMS',
      name: 'BindSMS',
      component: r => require.ensure([], () => r(require('../components/pages/personal/userinfo/BindSMS.vue')), 'Property'),
    },
    //绑定谷歌
    {
      path: '/bindGoogle',
      name: 'BindGoogle',
      component: r => require.ensure([], () => r(require('../components/pages/personal/userinfo/BindGoogle.vue')), 'Property'),
    },
    //设置资金密码
    {
      path: '/balancePwd',
      name: 'BalancePwd',
      component: r => require.ensure([], () => r(require('../components/pages/personal/userinfo/BalancePwd.vue')), 'Property'),
    },
    { path: '/', redirect: { path: '/index' }}
  ]
})

export default router
