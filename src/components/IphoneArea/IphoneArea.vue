<template>
  <transition name="slide">
<scroll class="box">
  <div class="iphone-area">
    <van-nav-bar title="苹果手机专区" left-text="" left-arrow :fixed="true"  @click-left="onClickLeft">
      <div name="search" slot="right">
        <i class="van-icon van-icon-search" ></i>
      </div>
    </van-nav-bar>
    <img src="./iphone-area.png" alt="" class="banner">
    <div class="tab-view">
      <div>
        <span>热租</span>
      </div>
      <div>
        <span>最新</span>
      </div>
      <div>
        <span>价格</span>
      </div>
    </div>

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


</transition>
</template>

<script>
  import Vue from 'vue'
  import { NavBar } from 'vant';
  Vue.use(NavBar);
  import good from 'base/good/good'
  import scroll from 'base/scroll/scroll'
    export default {
        name: "iphone-area",
      components:{
          good,
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
  .box{
    position:fixed;top:0;bottom:0;left:0;right:0; z-index: 100;background:#fff;
  }
  .iphone-area{
    /*position: fixed;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;*/

 /*   overflow-y:auto;*/
    .banner{
      display:block;width:100%;
    }
    .tab-view{
      display:flex;background:#fff;
      >div{
        flex:1;height:40px;line-height:40px;font-size:14px;
      }
    }
  .good-list{
    width:96%;margin:0 auto;
  }
  }



</style>
