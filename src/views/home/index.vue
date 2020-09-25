<template>
  <div class="home">
    <van-nav-bar :fixed="true" :title="title" />

    <section class="pages_content">待办事项</section>

    <BottomMenu />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BottomMenu from "@/components/home/BottomMenu.vue";

@Component({
  components: {
    BottomMenu,
  },
})
export default class Home extends Vue {
  private title: string = "待办事项";

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