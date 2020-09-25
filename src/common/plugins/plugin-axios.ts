
import Vue from 'vue';
import axios from 'axios';
import store from '../../store/index'
import router from '../../router/index';
import { Dialog } from 'vant';

// 全局注册
Vue.use(Dialog);

axios.defaults.baseURL = 'http://0.0.0.127/xbbackend'; //请求基础地址

// 请求超时时间
axios.defaults.timeout = 100000;

// axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.timeout = 1000 * 1000;

  // 判断是否存在token，如果存在的话，则每个header都加上token
  let token: string = store.getters.token;

  if (token) {
    config.headers['X-Access-Token'] = token;
  }
  return config;
});

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {

      switch (error.response.status) {
        case 403:
          Dialog.alert({
            title: '系统提示',
            message: '拒绝访问',
          }).then(() => {
            // on close
          });
          break
        case 500:
          Dialog.alert({
            title: '登录已过期',
            message: '很抱歉，登录已过期，请重新登录',
            confirmButtonText: '重新登录',
          }).then(() => {
            window.localStorage.removeItem("aps_userName");
            window.localStorage.removeItem("aps_userPassword");
            window.localStorage.removeItem("aps_token");
            window.localStorage.removeItem("aps_userInfo");
            router.push({ name: "login" })
          });
          break
        case 404:
          Dialog.alert({
            title: '系统提示',
            message: '很抱歉，资源未找到',
          }).then(() => {
            // on close
          });
          break
        case 504:
          Dialog.alert({
            title: '系统提示',
            message: '网络超时',
          }).then(() => {
            // on close
          });
          break
        case 401:
          Dialog.alert({
            title: '系统提示',
            message: '未授权，请重新登录',
          }).then(() => {
            window.localStorage.removeItem("aps_userName");
            window.localStorage.removeItem("aps_userPassword");
            window.localStorage.removeItem("aps_token");
            window.localStorage.removeItem("aps_userInfo");
            router.push({ name: "login" })
          });
          break
        default:
          Dialog.alert({
            title: '系统提示',
            message: error.message,
          }).then(() => {
          });
          break
      }
      return Promise.reject(error.response);
    }
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
