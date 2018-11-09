<template>
  <transition name="">
    <div>
      <div class="header">

        <div class="setting"></div>
        <div class="photo" @click="test">
          <img src="./photo.png" alt="">
          <div>设置</div>
        </div>
        <div class="name">邢敏</div>
      </div>
      <div class="nav-bar">
        <div @click="zuke"   :class="{'active': current}">租客</div>
        <div @click="caifu" :class="{'active': !current}">财富</div>
      </div>

      <div class="zuke" v-show="current">

        <ul>
          <li class="order" @click="turnToOrder">
            我的订单
            <img src="./arrow@2x.png" alt="">
          </li>
          <li class="cart">
            购物清单
            <img src="./arrow@2x.png" alt="">
          </li>
          <li class="store" @click="turnToCollection">
            收藏的产品
            <img src="./arrow@2x.png" alt="">
          </li>
          <li class="count" @click="toMyAdress">
            地址管理
            <img src="./arrow@2x.png" alt="">
          </li>
        </ul>

        <ul>
          <li class="order">
            我的订单
            <img src="./arrow@2x.png" alt="">
          </li>
          <li class="cart">
            购物清单
            <img src="./arrow@2x.png" alt="">
          </li>
          <li class="store">
            收藏的产品
            <img src="./arrow@2x.png" alt="">
          </li>
          <li class="count">
            优惠券
            <img src="./arrow@2x.png" alt="">
          </li>
        </ul>

      </div>

      <div class="caifu"  v-show="!current">
        <div class="my-wealth">
          <LittleBar></LittleBar>
          <div class="wealth-goods">
            <div>
              <img src="./jijin.png" alt="">
              <p>基金</p>
            </div>
            <div>
              <img src="./zhanghu.png" alt="">
              <p> 账户</p>
            </div>
            <div>
              <img src="./yinhangka.png" alt="">
              <p> 银行卡</p>

            </div>
            <div>
              <img src="./chanpin.png" alt="">
              <p> 产品</p>
            </div>
            <div>
              <img src="./chanpin.png" alt="">
              <p> 产品</p>
            </div>
          </div>
        </div>
        <div class="my-count">
          <LittleBar></LittleBar>
          <p class="all">总资产</p>
          <p class="num">￥6758.55</p>
          <p class="before">昨日收益 <span>556</span></p>

        </div>
      </div>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
  import LittleBar from 'base/littlebar/littlebar'
  //import myorder from 'base/myOrder/myOrder'
  import Collection from 'components/Collection/Collection'
  import storage from 'good-storage'
    export default {
        name: "about",
      data(){
          return {
            current:1
          }
      },
      methods:{
          zuke(){
            this.current=1;
            console.log(this.current)

          },
        caifu(){
          this.current=0;
          console.log(this.current)
        },
        turnToOrder(){
            this.$router.push({
              path:`/myorders`
            })
        },
        turnToCollection(){
          this.$router.push({
            path:`/collection`
          })
        },
        test(){
          storage.set('beforeLoginUrl', window.location.href);
          this.$router.push({
            path:`/login`
          })
        },
        /*getCookie(c_name) {
          if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
              c_start = c_start + c_name.length + 1
              c_end = document.cookie.indexOf(";", c_start)
              if (c_end == -1) c_end = document.cookie.length
              console.log(document.cookie.substring(c_start, c_end))
            }
          }
          return ""
        },*/
        toMyAdress(){
          console.log(document.cookie)
            //console.log(storage.get('userId'))
          this.$router.push({
            path:`myadress`
          })
        },

      },
      components:{
        LittleBar,
        /*myorder,*/
        Collection
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .header{
    height:11.25rem;position: relative;
    .bg-image('header-bg');
    background-size:25rem 11.25rem;
    .setting{
      width:1.5rem;height:1.5rem;

      .bg-image('setting');
      background-size:1.5rem 1.5rem;float:right;margin-right:1rem;margin-top:2rem;
    }
    .photo{
      width:4rem;height:4rem;border-radius: 50%;position: absolute;top:4rem;margin-left:-2rem;left:50%;
      overflow: hidden;
      >img{
        width:4rem;height:4rem;
      }
      >div{
        height:1.4rem;position: absolute;left:0;bottom:0;width:4rem;font-size:.8rem;
        background-color:rgba(0,0,0,0.2);color:#fff;
      }
    }
    .name{
      text-align: center;width:6rem;position: absolute;top:8.5rem;margin-left:-3rem;left:50%;
      overflow: hidden;color:#fff;
    }
  }
  .nav-bar{
    width:23rem;height:40px;display:flex;margin:20px auto;background:#fff;border-radius: 6px;overflow: hidden;
    >div{
      flex:1;line-height: 40px;color:#000;
    }
    >div.active{
      background:#25C6AE;color:#fff;
    }
  }
  .zuke{
   width:23rem;margin:0 auto;
    ul{
      padding:0 6px;background:#fff;border-radius: 6px;
      li{
        height:26px;padding:12px 0 12px 25px;line-height: 26px;font-size:14px;
        background-size:20px 20px;
        background-repeat: no-repeat;text-align: left;border-bottom:1px solid #eee;
        background-position: center left;
        img{
          float:right;width:20px;vertical-align: middle;
        }
      }
      li.order{
        .bg-image('order');
      }
      li.store{
        .bg-image('store');
      }
      li.count{
        .bg-image('count');
      }
      li.cart{
        .bg-image('cart');
      }
      li:last-child{
        border-bottom: 0;
      }
    }
    ul:first-child{
      margin-bottom: 20px;
    }

  }
  .caifu{
    width:23rem;margin:0 auto;
    .my-wealth{
      background:#fff;
      .wealth-goods{
        padding:20px 0;
        display:flex;
        >div{
          flex:1;
          >img{display:block;width:20px;margin:0 auto;}
          >p{font-size:12px;margin-top:6px;color:#666;}
        }
      }
    }
    .my-count{
      margin-top:20px;background:#fff;padding-bottom: 30px;
      .all{
        margin-top:16px; color:#999;font-size:14px;
      }
      .num{
        margin-top:6px; color:#25c6ae;font-size:20px;
      }
      .before{
        margin:6px 0 0 0; color:#999;font-size:14px;
      }
    }
  }

</style>
