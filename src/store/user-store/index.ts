import Vue from 'vue';
import Vuex from 'vuex'
import * as types from "../mutation-type"
Vue.use(Vuex)

import VueAxios from '../../common/plugins/plugin-axios';

export default new Vuex.Store({
  state: {
    //用户信息：
    userInfo: {},
    //用户token：
    token: '',
    //用户密码：
    password: '',
  },
  getters: {
    // userInfo: (state: any) => {
    //   return state.userInfo;
    // },
    // token: (state: any) => {
    //   return state.token;
    // },
    // password: (state: any) => {
    //   return state.password;
    // }
  },
  mutations: {
    // [types.USER_TOKEN](state: any, token: string) {
    //   state.token = token;
    // },
    // [types.USER_INFO](state: any, userInfo: Object) {
    //   state.userInfo = userInfo;
    // },
    // [types.USER_PASSWORD](state: any, password: string) {
    //   state.password = password;
    // },
    // //清空登录信息：this.$store.commit("clearUserInfo");
    // clearUserInfo(state: any) {
    //   state.userInfo = {};
    //   state.token = '';
    //   state.password = '';

    //   sessionStorage.removeItem("zs_token");
    //   sessionStorage.removeItem("zs_userInfo");
    //   sessionStorage.removeItem("zs_password");
    // }
  },
  actions: {
    //登录：
    // login({ }, data:any) {
    //   return axios.post(`/sys/appLogin`, data);
    // },
  },
  modules: {
  }
})
