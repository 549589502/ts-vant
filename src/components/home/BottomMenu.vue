<template>
  <div class="hello">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item>
        <div class="textalignM">
          <img src="@/assets/home1.png" width="20" v-if="active == 0" />
          <img src="@/assets/home1_.png" width="20" v-else />
          <p style="margin: 5px 0 0 0; padding: 0">首页</p>
        </div>
      </van-tabbar-item>
      <van-tabbar-item>
        <div class="textalignM">
          <img src="@/assets/home2.png" width="20" v-if="active == 1" />
          <img src="@/assets/home2_.png" width="20" v-else />
          <p style="margin: 5px 0 0 0; padding: 0">菜单</p>
        </div>
      </van-tabbar-item>
      <van-tabbar-item>
        <div class="textalignM">
          <img src="@/assets/home3.png" width="20" v-if="active == 2" />
          <img src="@/assets/home3_.png" width="20" v-else />
          <p style="margin: 5px 0 0 0; padding: 0">我的</p>
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  private active: number = 0;

  private activated() {
    if (this.$route.name == "home") {
      this.active = 0;
    }
    if (this.$route.name == "menu") {
      this.active = 1;
    }
    if (this.$route.name == "my") {
      this.active = 2;
    }
  }

  private onChange(index: number) {
    // this.menu.active = index;
    if (index == 0) {
      this.$router.push({ name: "home" });
    }
    if (index == 1) {
      this.$router.push({ name: "menu" });
    }
    if (index == 2) {
      this.$router.push({ name: "my" });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
