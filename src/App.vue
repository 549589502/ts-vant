<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class App extends Vue {
  //用了lib-flexible 用于设置 rem 基准值，就不需要以下代码
  // private mounted() {
  //   window.addEventListener("onresize", () => {
  //     this.setRem();
  //   });
  // }
  // private setRem() {
  //   // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
  //   const htmlWidth =
  //     document.documentElement.clientWidth || document.body.clientWidth;
  //   //得到html的Dom元素
  //   const htmlDom = document.getElementsByTagName("html")[0];
  //   //设置根元素字体大小
  //   htmlDom.style.fontSize = htmlWidth /20 + "px";
  // }

  private mounted() {
    //处理vuex刷新数据丢失问题：
    if (localStorage.getItem("aps_token")) {
      this.$store.commit("USER_TOKEN", localStorage.getItem("aps_token"));
    }
    if (localStorage.getItem("aps_userInfo")) {
      //强制转成字符串再转json：
      this.$store.commit(
        "USER_INFO",
        JSON.parse(String(localStorage.getItem("aps_userInfo")))
      );
    }
    if (localStorage.getItem("aps_userName")) {
      this.$store.commit("USER_USERNAME", localStorage.getItem("aps_userName"));
    }
    if (localStorage.getItem("aps_userPassword")) {
      this.$store.commit(
        "USER_PASSWORD",
        localStorage.getItem("aps_userPassword")
      );
    }
    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload", () => {
      if (localStorage.getItem("aps_token")) {
        localStorage.setItem("aps_token", this.$store.getters.token);
      }
      if (localStorage.getItem("aps_userInfo")) {
        localStorage.setItem(
          "aps_userInfo",
          JSON.stringify(this.$store.getters.userInfo)
        );
      }
      if (localStorage.getItem("aps_userName")) {
        localStorage.setItem("aps_userName", this.$store.getters.username);
      }
      if (localStorage.getItem("aps_userPassword")) {
        localStorage.setItem("aps_userPassword", this.$store.getters.password);
      }
    });
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
