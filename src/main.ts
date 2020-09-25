import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//vant按需引入：
import './common/plugins/plugin-vant'
//在桌面端使用
import '@vant/touch-emulator';
//lib-flexible 用于设置 rem 基准值
import 'lib-flexible/flexible'

import './common/style/changeVant.less'
import './common/style/common.less'

Vue.config.productionTip = false

import VueAxios from './common/plugins/plugin-axios';
//测试环境内网：
const baseUrl = 'http://192.168.1.182:3004/xbbackend';
//测试环境外网：
// const baseUrl = 'http://14.215.246.10:13000/tms';
//正式环境：
//const baseUrl = 'https://tmos.cloudiip.com/tms';
Vue.use(VueAxios, baseUrl);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
