import Vue from 'vue';
import Vuex from 'vuex'
import * as types from "../mutation-type"
Vue.use(Vuex)
export default {
  state: {
    //用户信息：
    userInfo: {},
    //用户token：
    token: '',
    //用户账号：
    username: '',
    //用户密码：
    password: '',
  },
  getters: {
    userInfo: (state: any) => {
      return state.userInfo;
    },
    token: (state: any) => {
      return state.token;
    },
    username: (state: any) => {
      return state.username;
    },
    password: (state: any) => {
      return state.password;
    }
  },
  mutations: {
    [types.USER_TOKEN](state: any, token: string) {
      state.token = token;
    },
    [types.USER_INFO](state: any, userInfo: Object) {
      state.userInfo = userInfo;
    },
    [types.USER_PASSWORD](state: any, password: string) {
      state.password = password;
    },
    [types.USER_USERNAME](state: any, username: string) {
      state.username = username;
    },
    //清空登录信息：this.$store.commit("clearUserInfo");
    clearUserInfo(state: any) {
      state.userInfo = {};
      state.token = '';
      state.password = '';
      state.username = '';

      sessionStorage.removeItem("zs_token");
      sessionStorage.removeItem("zs_userInfo");
      sessionStorage.removeItem("zs_password");
      sessionStorage.removeItem("aps_userName");
    }
  },
  actions: {
  },
  modules: {
  }
}
