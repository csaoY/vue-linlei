<template>
  <transition name="slide">
    <div class="logistics">
      <van-nav-bar title="物流详情" left-text="" left-arrow :fixed="true"  @click-left="onClickLeft" style="background:#fff;">
      </van-nav-bar>
      <scroll class="scroll">

        <div class="wrapper">
          <div class="header">
            <h3>顺丰物流</h3>
            <p>物流单号:98975987248972489</p>
          </div>
          <div class="detail">
            <div class="box active">
              <div class="left">
                <p>03-26</p>
                <span>18:00</span>
                <img src="./log-active.png" alt="">
              </div>
              <div class="right">
                <p>0派送中</p>
                <span>
                  深圳市孵化叫刚回到家华工科技阿里；看过骄傲；价格啊科技馆；啊是刚看见噶；感觉啊
                </span>
              </div>
            </div>
            <div class="box">
              <div class="left">
                <p>03-26</p>
                <span>18:00</span>
                <img src="./log-active.png" alt="">
              </div>
              <div class="right">
                <p>派送中</p>
                <span>
                  深圳市孵化叫刚回到家华工科技阿里；看过骄傲；价格啊科技馆；啊是刚看见噶；感觉啊
                </span>
              </div>
            </div>
            <div class="box">
              <div class="left">
                <span>18:00</span>
                <div class="point"></div>
              </div>
              <div class="right">
                <span>
                  深圳市孵化叫刚回到家华工科
                </span>
              </div>
            </div>
            <div class="box">
              <div class="left">
                <p>03-26</p>
                <span>18:00</span>
                <img src="./log-active.png" alt="">
              </div>
              <div class="right">
                <p>派送中</p>
                <span>
                  深圳市孵化叫刚回到家华工科技阿里；看过骄傲；价格啊科技馆；啊是刚看见噶；感觉啊
                </span>
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
        name: "logistics",
      components:{
          scroll
      },
  methods:{
    onClickLeft(){
      this.$router.back()
    }
  },
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
.logistics{
  position:fixed;top:0;right:0;left:0;bottom:0;background:#f6f6f6;z-index:1000000000001;
  .scroll{
    position:fixed;top:46px;right:0;left:0;bottom:0;
    .header{
      width:100%;background:@main-color;color:#fff;padding:20px 20px;text-align:left;
      p{
        margin-top:10px;
      }
    }
    .wrapper{

      .detail{
        width:90%;
        background: #fff;
        margin:10px auto 0;border-radius: 6px;padding:10px;
        .box{
          display:flex;
          color: #999;
          .left{
            width:70px;position:relative;
            text-align:right;padding-right:15px;border-right:1px solid #999;padding-bottom:60px;
            p{
              font-size:18px;
            }
            span{
              font-size:12px;
            }
            img{
              width:15px;height:15px;position:absolute;top:0;right:-7.5px;
            }
            .point{
              width:10px;height:10px;border-radius:5px;background:#999;position:absolute;top:0;right:-5px;
            }
          }
          .right{
            flex:1;
              text-align:left;padding-left:15px;
            p{
              font-size:18px;
            }
            span{
              font-size:12px;
            }
          }
        }
        .box.active{
          color:@main-color;
        }
        .box:last-child{
          .left{
            border-right:1px solid #fff;
          }

        }
      }
    }

  }
}
</style>
