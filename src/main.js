import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/reset.css'
import './assets/css/iconfont.css'
import './assets/css/iconfont/iconfont.css'
import api from './api/index'
// import baiduMap from "vue-baidu-map";
import './router/permission'
import './utils/localStorage'
import * as echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'


Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'gOEnqWoXc29V2DI56j3aOBIAteQuFbeM'
})
Vue.prototype.$echarts = echarts;
Vue.prototype.$api = api;
Vue.config.productionTip = false
// Vue.use(baiduMap, { ak: mapAK });


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
