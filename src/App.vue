<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class App extends Vue {
  private mounted() {
    window.addEventListener("onresize", () => {
      this.setRem();
    });
  }
  private setRem() {
    // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
    const htmlWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    //得到html的Dom元素
    const htmlDom = document.getElementsByTagName("html")[0];
    //设置根元素字体大小
    htmlDom.style.fontSize = htmlWidth / 20 + "px";
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
