<template>
  <div class="home">
    <van-nav-bar :fixed="true" :title="title" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class Home extends Vue {
  private title: string = "班组报产";
}
</script>
<style lang="less" scoped>

</style>