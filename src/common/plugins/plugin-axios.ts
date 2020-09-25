
import Vue from 'vue';
import { Dialog } from 'vant';
// 全局注册
Vue.use(Dialog);
import store from "@/store/index";

import axios from 'axios';

//请求拦截：
const err = (error:any) => {
  if (error.response) {
    let data = error.response.data
    switch (error.response.status) {
      case 500:
        Dialog.alert({
          title: '登录已过期',
          message: '很抱歉，登录已过期，请重新登录',
        }).then(() => {
          window.location.href = `${window.location.protocol}//${window.location.host}/login`
        });
        break
    }
  }
  return Promise.reject(error)
};

// axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.timeout = 600 * 1000;

  // 判断是否存在token，如果存在的话，则每个header都加上token
  let token: string = store.getters.token;

  if (token) {
    config.headers['X-Access-Token'] = token;
  }
  return config;
});


//统一返回格式：只留下data
axios.interceptors.response.use((response) => {
  return response.data
}, err)

// axiosCancel(axios, {
//   debug: false
// });

// 在声明文件中声明(形如 *.d.ts)
// export default {
//   axios,
//   // axiosCancel
// };
export default {
  install(Vue: any, baseURL: string) {
    // axios.defaults.withCredentials = true;
    axios.defaults.baseURL = baseURL;
    // 全局属性
    Vue.http = axios;
    // axiosCancel(axios, {
    //   debug: false
    // });
    // 实例属性
    Vue.prototype.$http = axios;
    // Vue.prototype.$cancel = axiosCancel;
  }
};
