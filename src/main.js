// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

//引用mint-ui组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);
//重置css样式
import './assets/css/reset.css'
//引入字体文件
import './assets/css/iconfont.css'
import './assets/js/iconfont.js'

import axios from 'axios'
Vue.prototype.axios = axios;

Vue.config.productionTip = false

// // * http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     // * 判断是否存在token，如果存在的话，则每个http header都加上token
//     // * token会在登录之后存储在本地
//     if (localStorage.token) {
//       config.headers["Authorization"]  = `Bearer ${localStorage.token}`;
//
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   });
//
// // * http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     let data = response.data;
//     // * 正常返回数据
//     if (data.code == 200) {
//       // * 返回data
//       return data
//     }
//     // * 如果code是20103 表示token未认证(后端定义的错误码)
//     // * 跳转到login
//     if (data.code === 20103) {
//       router.replace('/login')
//     }
//     return  Promise.reject(data);
//   },
//   error => {
//     return Promise.reject(error);
//   });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
