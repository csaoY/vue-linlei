<template>
  <transition name="slide">
    <div class="kefu">
      <van-nav-bar title="商品详情" left-text="" left-arrow :fixed="true"  @click-left="onClickLeft" style="background:#fff;"></van-nav-bar>
      <scroll class="scroll">
        <img src="./kefu.png" alt="">
        <div class="text">
          <p>在线客服：8:00-19:00</p>
          <p>在线客服：8:00-19:00</p>
        </div>

        <div class="btn-wrapper">
          <div>
            <a href="" class="phone">客服电话</a>
          </div>
         <div>
           <a href="" class="inter">在线客服</a>
         </div>
        </div>


      </scroll>
    </div>
  </transition>

</template>

<script>
  import scroll from 'base/scroll/scroll'
    export default {
        name: "kefu",
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
  .kefu {
    position:fixed;top:0;left:0;right:0;bottom:0;
    background: #fff;z-index:10200000;
    .scroll{
      position:fixed;top:46px;left:0;right:0;bottom:0;
      img{
        width:100%;
      }
    .text{
      font-size:14px;margin-top:30px;color:#999;
      p{
        margin-top:5px;
      }
    }
      .btn-wrapper{
        width:95%;margin:30px auto 0;display:flex;
        >div{
          flex:1;
          >a{
            display:inline-block;
            width:90%;height:35px;line-height:35px;border-radius: 17.5px;background:@main-color;border:1px solid @main-color;color:#fff;
          }
          >a.phone{
            background:#fff;color:@main-color
          }
        }

      }
    }
  }

</style>
