<template>
  <transition name="slide">
    <div class="continue">
      <van-nav-bar title="原机二手续租" left-text="" left-arrow :fixed="true"  @click-left="onClickLeft" style="background:#fff;">
      </van-nav-bar>
      <scroll class="scroll">
        <div>
          <img src="./continue.png" alt="">

          <div class="good-list">
            <good></good>
            <good></good>
            <good></good>
            <good></good>
            <good></good>
            <good></good>
            <div style="clear:both"></div>
          </div>
        </div>
      </scroll>
    </div>
  </transition>

</template>

<script>
  import scroll from 'base/scroll/scroll'
  import good from 'base/good/good'
    export default {
        name: "continue",
      methods:{
          onClickLeft(){
            this.$router.back()
          }
      },
      components:{
          scroll,
        good
      }
    }

</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .continue{
    position:fixed;top:0;bottom:0;left:0;right:0;z-index:1000000000001; background:#FFF;
    .scroll{
      position:fixed;top:46px;bottom:0;left:0;right:0;
      >div>img{
        width:100%;
      }
      .good-list{
        width:96%;margin:0 auto;
      }
    }
  }

</style>
