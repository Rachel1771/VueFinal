import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/reset.css'
import './assets/css/iconfont.css'
import './assets/css/iconfont/iconfont.css'
import api from './api/index'
Vue.prototype.$api = api;
Vue.config.productionTip = false
import './router/permission'
import './utils/localStorage'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
