<template>
  <div class="jinrong">
    <van-nav-bar title="金融"  :fixed="true" style="background:#fff;"></van-nav-bar>
    <div class="body">
      <scroll class="scroll">
        <div>
          <div class="swipe-bg">
            <swiper :options="swiperOption" ref="mySwiper" >
              <!-- slides -->
              <swiper-slide><img src="./a.png" alt="" style="width:150px"></swiper-slide>
              <swiper-slide><img src="./a.png" alt="" style="width:150px"></swiper-slide>
              <swiper-slide><img src="./a.png" alt="" style="width:150px"></swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
              <!-- <div class="swiper-button-prev" slot="button-prev"></div>
               <div class="swiper-button-next" slot="button-next"></div>-->
              <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
            </swiper>
          </div>
          <div class="nav">
            <span ref="bg" :class="{'state':navKetou}"></span>
            <div @click="navK" :class="{'state':!navKetou}">可投</div>
            <div @click="navC" :class="{'state':navKetou}">财富</div>
          </div>

          <div class="ketou">
            <div class="good">
              <div class="img-wrapper"></div>
              <div class="content-wrapper">
                <div class="left-con">
                  <p class="name">iPhoneX</p>
                  <p class="detail">全新未拆封国行品质</p>
                  <p class="time">投资时长 12个月</p>
                  <p class="price">7000元</p>
                </div>
                <div class="right-con">
                  <p class="right1">7.77%</p>
                  <p class="right2">三日年利率</p>
                  <div class="btn" @click="investment">投资</div>
                </div>
              </div>
            </div>
            <div class="good">
              <div class="img-wrapper"></div>
              <div class="content-wrapper">
                <div class="left-con">
                  <p class="name">iPhoneX</p>
                  <p class="detail">全新未拆封国行品质</p>
                  <p class="time">投资时长 12个月</p>
                  <p class="price">7000元</p>
                </div>
                <div class="right-con">
                  <p class="right1">7.77%</p>
                  <p class="right2">三日年利率</p>
                  <div class="btn">投资</div>
                </div>
              </div>
            </div>
            <div class="good">
              <div class="img-wrapper"></div>
              <div class="content-wrapper">
                <div class="left-con">
                  <p class="name">iPhoneX</p>
                  <p class="detail">全新未拆封国行品质</p>
                  <p class="time">投资时长 12个月</p>
                  <p class="price">7000元</p>
                </div>
                <div class="right-con">
                  <p class="right1">7.77%</p>
                  <p class="right2">三日年利率</p>
                  <div class="btn">投资</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </scroll>


    </div>

<router-view></router-view>
  </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import scroll from 'base/scroll/scroll'
  import myOrder from 'base/myOrder/myOrder'
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          effect : 'coverflow',
          loop : true,
          slidesPerView: 3,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
          },
        },
        navKetou:0
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods:{
      navK(){
        this.navKetou=0;
      },
      navC(){
        this.navKetou=1;
      },
      investment(){
        this.$router.push({
          path:`/investmentdetail`
        })
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
    components: {
      swiper,
      swiperSlide,
      scroll
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .body{
    background: #F2F4F6;position:fixed;top:46px;left:0;right:0;bottom:50px;
    .scroll{
      background: #F2F4F6;position:fixed;top:46px;left:0;right:0;bottom:50px;
      >div{
        >.swipe-bg{
          background: #fff;height:200px;
        }
        >.nav{
          width:92%;
          background: #fff;height:34px;margin:0 auto;border-radius: 17px;border:1px solid @main-color;display:flex;position:relative;overflow: hidden;
          >div{
            flex:1;line-height:34px;z-index:2;
            transition:color 0.3s;font-size:14px;
          }
          >div.state{
            color:#fff;
          }
          >span{
            width:50%;height:34px;border-radius: 17px;
            background:@main-color;display:inline-block;position:absolute;left:0;top:0;z-index:1;
            transition:left 0.3s;
          }
          >span.state{
            left:50%;
          }

        }
        >.ketou{
          width:92%;margin:0 auto;
         .good{
           display:flex;
           background: #fff;border-radius:6px;margin-top:10px;overflow:hidden;
           .img-wrapper{
             width:100px;height:100px;background:#eee;
           }
           .content-wrapper{
             flex:1;display:flex;text-align:left;padding:10px 10px;
             .left-con{
               flex:1;line-height:22px;
               .name{

                 font-size:16px;color:#333;
               }
               .detail{
                 font-size:12px;color:#666;
               }
               .time{
                 font-size:12px;color:#999;
               }
               .price{
                 font-size:12px;color:@main-color

               }
             }
             .right-con{
               flex:1;line-height:25px;text-align:right;
               .right1{
                 color:@main-color;font-size:20px;
               }
               .right2{
                 color:#666;
                 font-size:12px;
               }
               .btn{
                 height:25px;width:50%;border:1px solid @main-color;text-align: center;display:inline-block;border-radius: 12.5px;margin-top:10px;color:@main-color;font-size:12px;line-height:25px;
               }
             }
           }
         }
        }
      }
    }
  }
</style>
