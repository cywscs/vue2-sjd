import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
//顶部进度条
NProgress.configure({
  easing: 'ease',
  speed: 1000,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3
})
//顶部进度条
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done()
})
Vue.config.productionTip = false//禁用生产提示

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
