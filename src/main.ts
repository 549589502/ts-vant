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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
