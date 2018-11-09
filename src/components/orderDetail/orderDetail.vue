<template>
  <transition name="slide">
    <div class="order-detail">
      <van-nav-bar title="订单详情" left-text=""   left-arrow :fixed="true"  @click-left="onClickLeft" style="background:#fff;"></van-nav-bar>
      <scroll class="scroll">
        <div>
          <div class="header">
            <h3>已取消</h3>
            <p>很抱歉，您的订单已经取消了</p>
          </div>
          <div class="main">
            <div class="bar">
              <div class="option">
                <span class="option-content">哈哈哈哈</span>
              </div>
              <div class="option">
                <span class="option-content">哈哈哈哈</span>
              </div>
              <div class="option">
                <span class="option-content">哈哈哈哈</span>
              </div>
            </div>


            <div class="content-wrapper">
              <div class="con-bar">
                <div class="title">订单编号</div>
                <div class="content">54875487454587</div>
              </div>
              <div class="con-bar">
                <div class="title">订单编号</div>
                <div class="content">54875487454587</div>
              </div>
              <div class="con-bar">
                <div class="title">订单编号</div>
                <div class="content">54875487454587</div>
              </div>
              <div class="con-bar">
                <div class="title">订单编号</div>
                <div class="content">54875487干啥当过兵v爱说不说打不死吧 加上贷款军过或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或454587</div>
              </div>
            </div>
          </div>
        </div>
      </scroll>
      <div class="btn-wrapper" v-show="false">
        <div class="btn" @click="logistics">查看物流</div>
      </div>
      <div class="btn-wrapper">
        <div class="btn-re" @click="redo">复租</div>
        <div class="btn-back" @click="back">预约还机</div>
      </div>
      <router-view></router-view>
    </div>
  </transition>

</template>

<script>
  import scroll from "base/scroll/scroll"
  import Vue from 'vue'
  import { NavBar } from 'vant';
  Vue.use(NavBar);
    export default {
        name: "order-detail",
      components:{
          scroll
      },
      methods:{
        onClickLeft(){
          this.$router.back()
        },
        logistics(){
          this.$router.push({
            path:`/logistics`
          })
        },
        redo(){
          this.$router.push({
            path:`/orderdetail/continue`
          })
        },
        back(){
          this.$router.push({
            path:`/orderdetail/backdetail`
          })

        }
      }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .order-detail{
    position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000000000000;
  background:#eee;
    .scroll{
      position:fixed;top:46px;left:0;right:0;bottom:0;
      .header{
        width:100%;background:@main-color;color:#fff;padding:20px 20px;text-align:left;
        p{
          margin-top:10px;
        }
      }
      .main{
        width:96%;margin:20px auto 0;background:#fff;border-radius: 6px;
        .bar{
          display:flex;padding:14px 0;border-bottom: 1px solid #eee;width:94%;margin:0 auto;
          >.option{
            flex:1;height:40px;
            >.option-content{
              display:inline-block;height:30px;line-height:30px;margin-top:5px;
              background: @main-color;padding:0 18px;color:#fff;border-radius:15px;font-size:14px;

            }
          }
        }
        .content-wrapper{
          width:94%;margin:0 auto;color:#999;font-size:14px;
          text-align:left;padding:16px 0;
          >.con-bar{
            display:flex;padding:8px 0;
            >.title{
              flex:1;
            }
            >.content{
              flex:3
            }
          }
        }
      }
    }
  .btn-wrapper{
    position:fixed;
    bottom:0;left:0;right:0;height:50px;
    background: #fff;

    >div{
      line-height:40px;text-align: center;margin-top:5px;height:40px;border-radius: 20px;
    }
    >.btn{
      width:95%;margin:0 auto;
      background: @main-color;color:#fff;
    }
    >.btn-re{
      width:30%;border:1px solid @main-color;color:@main-color;float:left;margin-left:10px;
    }
    >.btn-back{
      width:60%;border:1px solid @main-color;color:#fff;float:right;margin-right:10px;
      background: @main-color;
    }
  }
  }

</style>
