<template>
  <transition name="slide">

      <div class="myorders">
        <van-nav-bar title="我的订单" left-text="" left-arrow :fixed="true"  @click-left="onClickLeft" style="background:#fff;"></van-nav-bar>
        <div class="tab-order">
          <div>
            <span>价格多个</span>
          </div>
          <div>
            <span>价格</span>
          </div>
          <div>
            <span>价格</span>
          </div>
          <div>
            <span>价格</span>
          </div>
        </div>
        <scroll class="scroll">
        <div class="wrapper">
          <my-order @toDetail="turnDetail"></my-order>
          <my-order></my-order>
          <my-order></my-order>

        </div>
        </scroll>
        <router-view></router-view>
      </div>


  </transition>

</template>

<script>
  import myOrder from 'base/myOrder/myOrder'
  import scroll from 'base/scroll/scroll'
    export default {
        name: "myorders",
      components:{
          myOrder,
        scroll
      }, methods:{
        onClickLeft(){
          this.$router.back()
        },
        turnDetail(){
          this.$router.push({
            path:`/orderdetail`
          })
        }
      }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";

.myorders{
  position:fixed;top:0;left:0;right:0;bottom:0;background:#F4F6F8;z-index:100;
  .scroll{
    position:fixed;top:86px;left:0;right:0;bottom:0;background:#F4F6F8;z-index:100;overflow:hidden;
  }
  .wrapper{
    padding:10px 14px;
  }
  .tab-order{z-index:999;
    height:40px;background:#fff;margin-top:46px;display:flex;
    >div{
      flex:1;text-align:center;margin-top:10px;
      >span{
        display:inline-block;padding:0 15px;background:red;line-height:20px;border-radius: 10px;background:@main-color;color:#fff;font-size:12px;
      }
    }
  }
}
</style>
