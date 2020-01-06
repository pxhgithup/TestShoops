<template>
  <div>
    <header-views></header-views>
    <Button type="danger">信息按钮</Button>
  </div>
</template>

<script>
  import HeaderViews from '../allcomponent/ComInputHeader'

  export default {
    name: "Index",
    components: {HeaderViews},
    data() {
      return {}
    },
    mounted() {
      //vue中mui的table不起作用
      // mui("body").on("tap", "a", function () {
      //   document.location.href = this.href;
      // });
    }

  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"


</style>
