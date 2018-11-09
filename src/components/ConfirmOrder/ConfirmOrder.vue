<template>
  <div>
    <transition name="slide">
      <div class="confirm">
        <van-nav-bar title="确认订单" left-text="" left-arrow :fixed="true"  @click-left="onClickLeft" style="background:#fff;"></van-nav-bar>
        <scroll class="scroll">
          <div class="box" @click="myadress">
            <div class="box-list user-info clear">
              <div class="leftIcon float-left">
                <img src="./adress.png" alt="">
              </div>
              <div class="rightIcon float-right">
                <img src="./arrow.png" alt="">
              </div>
              <div class="content">
                <div class="take-name">收货人：陈银鑫</div>
                <div class="take-address">收货地址：i哦按实际我骄傲骄傲叫看噶控股烤排骨控爱哭鬼</div>
              </div>


            </div>
            <div class="box-list good-info clear">
              <div class="img float-left">
                <img src="" alt="">
              </div>
              <div class="good-some">
                <div class="title">
                  iphoneX
                </div>
                <div class="price">
                  商品价值：888元

                </div>
                <ul  class="item ">
                  <li class="float-left">网络：全网通</li>
                  <li class="float-left">网络：全网通</li>
                  <li class="float-left">网络：全网通</li>
                  <li class="float-left">网络：全网通</li>
                  <li class="float-left">网络：全网通</li>
                </ul>
              </div>


            </div>
            <div class="box-list price-info">
              <div class="title ">
                <div class="big-title">首期付款总金额</div>
                <div class=" all-price"><span>569元</span></div>
              </div>
              <div class="line">
                <div class="a1">租赁期数</div>
                <div class="a2">12月</div>
              </div>
              <div class="line">
                <div class="a1">租赁期数</div>
                <div class="a2">12月</div>
              </div>
              <div class="line">
                <div class="a1">租赁期数</div>
                <div class="a2">12月</div>
              </div>
              <div class="line">
                <div class="a1">租赁期数</div>
                <div class="a2">12月</div>
              </div>


            </div>
            <div class="box-list huabei-info">
              <div class="title">
                <div>
                  <img src="./huabei.png" alt="">
                  花呗预授权(可选)
                </div>
                <div class="p1">
                  <div></div>
                </div>
              </div>
              <div class="notice" >手动及撒娇过时候开始打开好收到就好</div>
              <div class="notice" >手动及撒娇过时候开始打开好收到就好</div>

            </div>
          </div>

        </scroll>
        <confirm @toA="toAgreement"></confirm>


      </div>

    </transition>
    <router-view></router-view>
  </div>



</template>

<script>
  import scroll from 'base/scroll/scroll'
  import confirm from 'base/Confirm/Confirm'
  import adress from 'base/Adress/Adress'
    export default {
        name: "confirm-order",
    methods:{
      onClickLeft(){
        this.$router.back()
      },
      myadress(){
        this.$router.push({
          path:`/myadress`
        })
      },
      toAgreement(){
        this.$router.push({
          path:`/agreement`
        })
      }
    },
      components:{
          scroll,
        confirm,
        adress
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .confirm{
    position:fixed;top:0;bottom:0;left:0;right:0;background:#F4F6F8;z-index:1004;
    .scroll{
      position:fixed;top:46px;bottom:50px;left:0;right:0;background:#F4F6F8;z-index:1004;
      .box{
        padding-top:10px;
        >.box-list{
          padding:20px 0;width:92%;margin:0 auto 10px;background:#fff;border-radius:6px;
        }
        >.user-info{
          .leftIcon{

           width:40px;
            height:40px;
            line-height:40px;
            img{
              vertical-align: middle;width:20px;
            }
          }
          .rightIcon{
            width:40px;
            height:40px;
            line-height:40px;
            float:right;

            img{
              vertical-align: middle;width:20px;
            }
          }
          .content{
            color:#333;
            width:auto;margin:0 40px 0 40px;min-height:40px;text-align:left;
            .take-name{
              font-size:14px;
            }
            .take-address{
              font-size:12px;
            }
          }

        }
        >.good-info{
          .img{
            width:80px;height:80px;background:#eee;margin-left:18px;
          }
          .good-some{
            width:auto;margin:0 20px 0 114px;text-align:left;
            .title{
              font-size:14px;
            }
            .price{
              font-size:12px;color:#666;
              margin-top:5px;
            }
            .item{

              font-size:12px;color:#999;              margin-top:5px;

              >li{
                margin-right:10px;
              }
            }
          }
        }
        >.price-info{
          .title{
            border-bottom: 1px solid #E5E5E5;width:auto;margin:0 18px;display:flex;padding-bottom:16px;
            .all-price{
              text-align: right;flex:1
            }
            .big-title{
              text-align: left;flex:1
            }
          }
          .line{
            display:flex;color:#999;font-size:12px;
            >div{
              flex:1;
              width:auto;margin:12px 18px 0 18px;
            }
            >div:first-child{
              text-align: left;
            }
            >div:nth-child(2){
              text-align: right;
            }
          }
        }
        >.huabei-info{
          /*width:auto;margin:0 18px;*/
          >.title{
            display:flex;line-height:20px;width:auto;margin:0 18px;

            >div{
              flex:1;
              >img{
                width:20px;height:20px;vertical-align: middle;position:relative;top:-3px;
              }
            }
            >div:first-child{
              flex:2;text-align: left;
            }
            .p1{
              >div{
                width:10px;
                height: 10px;.bg(@main-color);
                float:right;
                margin-top:5px;
                border-radius: 50%;
              }

            }
          }
          >.notice{
          font-size:12px;color:#999;text-align: left;margin:5px 18px 0;
        }

        }
      }
    }
  }

</style>
