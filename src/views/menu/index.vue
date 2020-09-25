<template>
  <div class="home">
    <van-nav-bar :fixed="true" :title="title" />

    <section class="pages_content">
      <van-grid :column-num="3" :clickable="true">
        <van-grid-item
          v-for="value in menuList"
          :key="value.id"
          icon="photo-o"
          :text="value.name"
        />
      </van-grid>
    </section>

    <BottomMenu />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BottomMenu from "@/components/home/BottomMenu.vue";
import { menuListType } from "@/common/interface/menu";
@Component({
  components: {
    BottomMenu,
  },
})
export default class Home extends Vue {
  private title: string = "菜单";
  private menuList: menuListType[] = [
    { id: 1, name: "班组报产", link: "SchedulingReport" },
  ];

  private onConfirm() {}
}
</script>
<style lang="less" scoped>
</style>