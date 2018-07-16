// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill" /*解决vuexpromise兼容性问题*/
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueTouch from 'vue-touch'
import axios from 'axios'
import qs from "qs";
import HttpProxyMiddleware from 'http-proxy-middleware'
import './lib/rem'
import globalComponents from './globalComponents'
// 引入vConsole
// import VConsole from "vconsole/dist/vconsole.min.js"
// var vConsole = new VConsole();
//
// import './assets/css/bootstrap.scss'
import './assets/css/font-icon/iconfont.scss'
import './assets/js/libs/laydate/theme/default/laydate.scss'

//公共组件
Object.keys(globalComponents).forEach(name => {
        Vue.component(globalComponents[name].name, globalComponents[name])
    })
    //触屏组件
Vue.use(VueTouch, { name: 'v-touch' })

Vue.config.productionTip = false

//消除移动端点击事件延迟
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    console.log("request error", error)
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    if (response.data.code == 401) {
        router.push("login");
    }
    return response
}, error => {
    console.log('response error', error)
    return Promise.resolve(error.response)
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})