<template>
  <div class="header-content">
    <div class="header-left magin-juli">
      <span class="iconfont">&#xe653;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe613;</span>
      请输入你想要查询的商品</div>
    <div class="header-right magin-juli">贵阳
    <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ComInputHeader"
  }
</script>
<!--如下 css下面导入样式的话需要使用@import-->
<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header-content
    background-color $bgColor
    width 100%
    height $headerHeight
    display flex
    line-height $headerHeight
    align-items center
    color #fff
    font-size .28rem

    .magin-juli
      margin-left .25rem
      margin-right .2rem

    .header-left
      float left
      font-size .4rem
    .header-right
      float right

    .header-input
      flex 1
      border 1px #fff solid
      border-radius 0.1rem
      line-height .62rem
      height .62rem
      margin .12rem
      padding-left .1rem
      background-color #fff
      color #a3a3a3
</style>
