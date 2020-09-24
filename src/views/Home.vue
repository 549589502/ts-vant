<template>
  <div class="home">
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
export default class Home extends Vue {}
</script>
<style lang="less" scoped>
.test {
  width:320px;
  height:160px;
  background-color: bisque;
  text-align: center;
}
.hello {
  font-size:1rem;
  color: red;
}
</style>