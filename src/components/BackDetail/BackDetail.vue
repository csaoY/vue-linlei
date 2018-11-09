<template>
  <transition name="slide">
    <div class="back">
      <van-nav-bar title="预约还机" left-text="" left-arrow :fixed="true"  @click-left="onClickLeft" style="background:#fff;"></van-nav-bar>
      <scroll class="scroll">
        <div>
          <div class="box">
            <div class="box-list user-info clear"  @click="myadress">
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
              <div class="a1">
                <div class="left"></div>
                <div class="center">
                  <p class="title">快递上门还机</p>
                  <p class="content">官方几啊商家改价按个就刚看见个安静；安静看加快来得及噶；圣诞节框架；就框架就看见了就；记录</p>
                </div>
                <div class="right">
                  <div class="option"></div>
                </div>
              </div>
              <div class="a2">
                <div class="left"></div>
                <div class="center">
                  <p class="title">快递上门还机</p>
                  <p class="content">官方几啊商家改价按个就刚看见个安静；安静看加快来得及噶；圣诞节框架；就框架就看见了就；记录</p>
                </div>
                <div class="right">
                  <div class="option"></div>
                </div>
              </div>


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
        name: "back-detail",
      methods:{
        onClickLeft(){
          this.$router.back()
        },
        myadress(){
          this.$router.push({
            path:`/myadress`
          })
        }
      },
      components:{
          scroll
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .back{
    position:fixed;top:0;bottom:0;left:0;right:0;z-index:1000000000001;background:#fff;
    .scroll{
      background:#F5F6F8;
      position:fixed;top:46px;bottom:0;left:0;right:0;
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
        /*>.price-info{
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
        }*/
        .price-info{
          .a1{
            display:flex;padding:10px 0;border-bottom: 1px solid #eee;
            >.left{
              width:40px;
              .bg-image('kuaidi');
              background-size:20px;
              background-repeat: no-repeat;
              background-position: top center;
            }
            >.center{
              text-align:left;
              flex:1;
              .title{
                font-size:12px;color:#333;
              }
              .content{
                font-size:10px;color:#999;margin-top:6px;
              }
            }
            >.right{
              width:50px;
              text-align: center;
              .option{
                width:10px;height:10px;border-radius: 50%;border:1px solid @main-color;display:inline-block;
              }
              .option.active{
                background:@main-color;
              }
            }

          }
          .a2{
            display:flex;padding:10px 0;
            >.left{
              width:40px;
              .bg-image('youji');
              background-size:20px;
              background-repeat: no-repeat;
              background-position: top center;
            }
            >.center{
              text-align:left;
              flex:1;
              .title{
                font-size:12px;color:#333;
              }
              .content{
                font-size:10px;color:#999;margin-top:6px;
              }
            }
            >.right{
              width:50px;
              text-align: center;
              .option{
                width:10px;height:10px;border-radius: 50%;border:1px solid @main-color;display:inline-block;
              }
              .option.active{
                background:@main-color;
              }
            }

          }
        }

      }
    }
  }

</style>
