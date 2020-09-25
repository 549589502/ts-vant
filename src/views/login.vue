<template>
  <div>
    <div class="borderBox">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
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
@Component
export default class login extends Vue {
  private username: string = "";
  private password: string = "";

  private checked: boolean = true;

  private onSubmit(values: any) {
    let params = {
      username: values.username,
      password: aes.encryptByDES(values.password), //密码加密
    };
    console.log(params);

  }
}
</script>

<style scoped lang="less">
</style>
