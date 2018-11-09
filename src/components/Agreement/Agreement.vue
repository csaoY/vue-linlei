<template>
  <transition name="slide">
    <div class="agreement">
      <van-nav-bar title="用户租赁协议" left-text="" left-arrow :fixed="true"  @click-left="onClickLeft" style="background:#fff;"></van-nav-bar>
      <scroll class="scroll">
        <div class="wrapper">
          <h4>第一张：总则</h4>
          <p>囧的撒或过我哈狗我哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或 囧的撒或过我哈狗我哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或囧的撒或过我哈狗我哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或囧的撒或过我哈狗我哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或 </p>
          <p>囧的撒或过我哈狗我哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或 囧的撒或过我哈狗我哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或囧的撒或过我哈狗我哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或囧的撒或过我哈狗我哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或 </p>


        </div>
      </scroll>


    </div>
  </transition>

</template>

<script>
  import scroll from 'base/scroll/scroll'
    export default {
        name: "agreement",
      components:{
          scroll
      },
      methods:{
        onClickLeft(){
          this.$router.back()
        }
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";

  .agreement{
    position:fixed;top:0;bottom:0;left:0;right:0;text-align: left;
    background: #f3f3f3;z-index:10000000;
    .scroll{
      position:fixed;top:46px;bottom:0;left:0;right:0;
      .wrapper{
        padding:20px 10px;
        h4{
         font-size:15px;color:#333;
        }
        p{
          margin:10px 0;font-size:12px;color:#666;
        }
      }

    }
  }

</style>
