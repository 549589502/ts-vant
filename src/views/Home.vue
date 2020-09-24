<template>
  <div class="home">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" />
      <van-dropdown-item title="筛选" ref="item">
        <van-cell center title="包邮">
          <template #right-icon>
            <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
          </template>
        </van-cell>
        <van-cell center title="团购">
          <template #right-icon>
            <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
          </template>
        </van-cell>
        <div style="padding: 5px 16px">
          <van-button type="danger" block round @click="onConfirm">
            确认
          </van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <div class="test">
      <p class="hello">Hello</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private value: number = 0;
  private switch1: boolean = false;
  private switch2: boolean = false;
  private option: any = [
    { text: "全部商品", value: 0 },
    { text: "新款商品", value: 1 },
    { text: "活动商品", value: 2 },
  ];

  // private onConfirm() {
  //   this.$refs.item.toggle();
  // }
}
</script>
<style lang="less" scoped>
.test {
  width: 320px;
  height: 160px;
  background-color: bisque;
  text-align: center;
}
.hello {
  font-size: 1rem;
  color: red;
}
</style>