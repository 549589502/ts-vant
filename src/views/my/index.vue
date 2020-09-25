<template>
  <div class="home">
    <van-nav-bar :fixed="true" :title="title" />

    <section class="pages_content">我的</section>

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
  private title: string = "我的";
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