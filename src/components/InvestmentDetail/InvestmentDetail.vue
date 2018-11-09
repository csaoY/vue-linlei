<template>
  <transition name="slide">
    <div class="investment-detail">
      <van-nav-bar title="商品详情" left-text="" left-arrow :fixed="true"  @click-left="onClickLeft" style="background:#fff;"></van-nav-bar>
      <scroll class="scroll">
        <div style="padding-top:10px;">

          <div class="good-item">
            <div class="good-details">
              <div class="swiper"></div>
              <div class="title">
                <div class="name">iPhoneX全新国行</div>
                <div class="num">仅剩12台</div>
              </div>
              <div class="title">
                <div class="price">￥539元/每月</div>
                <div class="jiage">商品价值9999元</div>

              </div>
              <div class="produce">大港口is电焊工我啊钢结构我安徽个i哦爱很奇怪我安说DOI嘎哈是东莞鸿阿萨德过后我阿斯顿和改善蛋糕盒哎ugvhaogha</div>
            </div>
          </div>
        </div>


      </scroll>

    </div>
  </transition>

</template>

<script>
  import scroll from 'base/scroll/scroll'
    export default {
        name: "investment-detail",
    methods:{
      onClickLeft(){
this.$router.back()
      }
    },
      components:{
          scroll
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .investment-detail{
    position:fixed;top:0;right:0;left:0;bottom:0;z-index:10;
    background:#F4F6F8;
    .scroll{
      position:fixed;top:46px;right:0;left:0;bottom:0;
      .good-item{
        .good-details{
          width:92%;
          background:#fff;
          margin:0 auto 0;border-radius: 8px;
          .swiper{
            height:100px;
          }
          .title{
            padding:0 18px;display:flex;justify-content:space-between;height:40px;
            .name{
              font-size:18px;color:#333;line-height:40px;
            }
            .num{
              border:1px solid #00c0a3;color:#00c0a3;padding:0 4px;border-radius: 4px;font-size:12px;height:20px;margin-top:10px;line-height:20px;
            }
            .price{
              font-size:18px;color:#00c0a3;line-height:40px;
            }
            .jiage{
              font-size:12px;color:#666;line-height:40px;
            }

          }
          .produce{
            padding:0 18px 20px 18px;font-size:12px;color:#999;text-align: left;
          }

        } }


    }
  }

</style>
