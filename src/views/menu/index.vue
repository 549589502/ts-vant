<template>
  <div class="home">
    <van-nav-bar :fixed="true" :title="title" />

    <section class="pages_content">菜单</section>

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
  private title: string = "菜单";

  private onConfirm() {}
}
</script>
<style lang="less" scoped>

</style>