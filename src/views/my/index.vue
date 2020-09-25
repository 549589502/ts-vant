<template>
  <div>
    <van-nav-bar :fixed="true" :title="title" />

    <section class="pages_content">
      <van-cell-group>
        <van-cell title="当前版本" icon="shop-o" is-link value="0.1">
        </van-cell>
        <van-cell
          title="清除缓存"
          icon="shop-o"
          is-link
          value=""
          @click="cache"
        >
        </van-cell>
        <van-cell title="退出" icon="shop-o" is-link value="" @click="logout">
        </van-cell>
      </van-cell-group>
    </section>

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
  //清除缓存：
  private cache() {
    var that = this;
    (Cache as any).removeCache(
      function (msg: string) {
        that.$toast.success(msg);
      },
      function (err: string) {
        that.$toast.fail(err);
      },
      []
    );
  }
  private logout() {
    this.$dialog
      .confirm({
        title: "退出",
        message: "确认退出吗？",
      })
      .then(() => {
        this.$router.push({
          name: "login",
        });
        // localStorage.removeItem("token");
        // localStorage.removeItem("userInfo");
        // localStorage.removeItem("USER_MENU");
      })
      .catch(() => {
        // on cancel
      });
  }
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