<template>
  <transition name="slide">
    <div class="collection">
      <van-nav-bar title="收藏的产品" left-text=""  :right-text="text" left-arrow :fixed="true"  @click-left="onClickLeft" @click-right="onClickRight" style="background:#fff;"></van-nav-bar>
      <scroll class="scroll">
        <div class="wrapper clear">
          <good :manageState="manageState"></good>
          <good :manageState="manageState"></good>
          <good :manageState="manageState"></good>
          <good :manageState="manageState"></good>
          <good :manageState="manageState"></good>
          <good :manageState="manageState"></good>
        </div>
      </scroll>
    </div>
  </transition>

</template>

<script>
  import Vue from 'vue'
  import { NavBar } from 'vant';
  import good from 'base/good/good'
  import scroll from 'base/scroll/scroll'
  Vue.use(NavBar);
    export default {
        name: "collection",
      data(){
          return {
            manageState:false,
            text:'管理'
        }
      },
      methods:{
        onClickLeft(){
          this.$router.back()
        },
        onClickRight(){
          if(this.manageState==false){
            this.text="取消管理";
            this.manageState=true;
          }else{
            this.text="管理";
            this.manageState=false;
          }

        }
      },
      components:{
          good,
        scroll
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .collection{
    position:fixed;top:0;bottom:0;left:0;right:0;
    background: #fff;
    z-index:100;
    >.scroll{
      position:fixed;top:46px;bottom:0;left:0;right:0;
      >.wrapper{
        width:96%;margin:0 auto;
      }
    }
  }

</style>
