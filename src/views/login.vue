<template>
  <div>
    <div class="borderBox">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          @change="change"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          @change="change"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-checkbox v-model="checked" shape="square">记住密码</van-checkbox>
          <van-button
            style="margin-top: 30px"
            round
            block
            type="info"
            native-type="submit"
            size="normal"
          >
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import aes from "@/common/aes/aes.js";
import { loginParams } from "@/common/interface/user";
import userApi from "@/api/userApi";
@Component
export default class login extends Vue {
  private username: string = "";
  private password: string = "";
  //判断账号密码是否被用户修改过：false未修改过，true修改过，
  //注意：防止用户第一次输入了密码，保存了加密密码，第二次进去，调登录接口时，再次加密加密过的密码
  private ifHaveStorageValue:boolean = false;

  private checked: boolean = true;

  //打开登录页，如果有localStorage记录，自动填入账号密码
  private actived() {
    this.ifHaveStorage();
  }
  //打开登录页，如果有localStorage记录，自动填入账号密码
  private created() {
    this.ifHaveStorage();
  }

  //如果有localStorage记录，自动填入账号密码
  private ifHaveStorage() {
    if (localStorage.getItem("aps_userName") && localStorage.getItem("aps_userPassword")) {
      this.username = localStorage.getItem("aps_userName") as string;
      this.password = localStorage.getItem("aps_userPassword") as string;
      this.ifHaveStorageValue = true;
    }else{
      this.ifHaveStorageValue = false;
    }
  }
  //表单发生过改变，置为false：
  private change(){
    this.ifHaveStorageValue = false;
  }
  //登录：
  private onSubmit(values: any) {
    let params: loginParams = {
      username: values.username,
      password: this.ifHaveStorageValue ? values.password : aes.encryptByDES(values.password), //密码加密
    };
    // console.log(params);
    let that = this;
    userApi
      .login(params)
      .then((res: any) => {
        if (res.success) {
          that.$toast.success(res.message);
          this.loginSuccess(
            res.result.token,
            res.result.userInfo,
            params.password
          );
        } else {
          that.$toast.fail(res.message);
        }
      })
      .catch((e) => {
        that.$toast.fail("网络错误，请稍后重试!");
      });
  }
  //登录成功
  private loginSuccess(token: string, userInfo: any, password: string) {
    if (this.checked) {
      window.localStorage.setItem("aps_userName", this.username); //保存userName到localStorage
      window.localStorage.setItem("aps_userPassword", password); //保存password到localStorage
    } else {
      window.localStorage.removeItem("aps_userName");
      window.localStorage.removeItem("aps_userPassword");
    }

    //设置token
    window.localStorage.setItem("aps_token", token);
    window.localStorage.setItem("aps_userInfo", JSON.stringify(userInfo));

    this.$store.commit("USER_TOKEN", token);
    this.$store.commit("USER_INFO", userInfo);

    //发送请求登录成功跳转首页
    this.$router.replace({ name: "home" });
  }
}
</script>

<style scoped lang="less">
</style>
