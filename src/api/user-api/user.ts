// 首页

import Vue from 'vue';

export default {
    // 登录
    login(data:any) {
        return Vue.http.post(`/sys/appLogin`, data);
    },
};