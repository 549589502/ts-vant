import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//vant按需引入：
import './common/plugins/plugin-vant'
//在桌面端使用
import '@vant/touch-emulator';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
