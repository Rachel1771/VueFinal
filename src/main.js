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
// 引入主题
import './assets/lib/theme/chalk'
import './assets/lib/theme/vintage'
import './assets/lib/theme/westeros'
import VCharts from 'v-charts'
/* swiper */
import 'swiper/dist/css/swiper.min.css';

import './assets/css/reset.min.css'

// import '@/assets/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import 'jquery'
/* 尾部组件 */
import Tail from './components/tail.vue'


Vue.component(Tail.name,Tail)





Vue.use(VCharts)
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
