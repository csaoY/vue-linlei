<template>
  <transition name="slide">
    <div class="wrapper">
      <van-nav-bar title="商品详情" left-text="" left-arrow :fixed="true"  @click-left="onClickLeft" style="background:#fff;">
      </van-nav-bar>
      <div class="tab fixed" ref="tab" v-show="this.tabHeight<=46">
        <div @click="showImgTxt" :class="{active:currentIndex===0}">
          <span>图文详情</span>
        </div>
        <div @click="showParameter" :class="{active:currentIndex===1}">
          <span>商品参考</span>
        </div>
        <div  @click="showEvaluate" :class="{active:currentIndex===2}">
          <span>用户评价</span>
        </div>
      </div>
      <scroll class="scroll" @scroll="scroll" :listen-scroll="listenScroll"  :probe-type="probeType">
        <div style="padding-top:10px;">
          {{this.propes}}
          <div class="good-item">
            <div class="good-details">
              <div class="swiper">
                <div class="swi-wrapper">
                  <van-swipe :autoplay="3000">
                    <div v-for="item in imgArr">
                      <van-swipe-item  >
                        <div style="width:100%;height:250px;">
                          <img :src="imgSrc+item" alt="" style="width:50%;margin-top:40px;">
                        </div>

                      </van-swipe-item>
                    </div>

                  </van-swipe>
                </div>
              </div>
              <div class="title">
                <div class="name">{{goodDetail.goodsName}}</div>
                <div class="num">{{goodDetail.quantity<100?'仅剩':'剩余'}}{{goodDetail.quantity}}台</div>
              </div>
              <div class="title">
                <div class="price">￥{{goodDetail.shopPrice}}/每月</div>
                <div class="jiage">商品价值{{goodDetail.price}}元</div>

              </div>
              <div class="produce" v-html="goodDetail.goodsDesc">{{}}</div>
            </div>
            <div class="notice">
              <div class="box">
                <div>
                  <img src="./a1.png" alt="">
                  <p>买家须知</p>
                </div>
                <div>
                  <img src="./a2.png" alt="">
                  <p>全新正品</p>
                </div>
                <div>
                  <img src="./a3.png" alt="">
                  <p>售货无忧</p>
                </div>
                <div>
                  <img src="./a4.png" alt="">
                  <p>售货须知</p>
                </div>
              </div>
              <div class="text">
                <p>买家须知</p>
                <div>奥我狗我暗示过i哦安徽干干净净     我叫我改我工具撒啊该机构  静安寺穷鬼阿萨德国际啊设计稿个；啊爱上该公积金叽叽叽叽几几几几几几几几几几几几几几几军军军军军军军军军军军军军军军军军军军军军军军军军</div>
                <p>买家须知</p>
                <div>奥我狗我暗示过i哦安徽干干净净     我叫我改我工具撒啊该机构  静安寺穷鬼阿萨德国际啊设计稿个；啊爱上该公积金叽叽叽叽几几几几几几几几几几几几几几几军军军军军军军军军军军军军军军军军军军军军军军军军</div>
                <p>买家须知</p>
                <div>奥我狗我暗示过i哦安徽干干净净     我叫我改我工具撒啊该机构  静安寺穷鬼阿萨德国际啊设计稿个；啊爱上该公积金叽叽叽叽几几几几几几几几几几几几几几几军军军军军军军军军军军军军军军军军军军军军军军军军</div>
                <p>买家须知</p>
                <div>奥我狗我暗示过i哦安徽干干净净     我叫我改我工具撒啊该机构  静安寺穷鬼阿萨德国际啊设计稿个；啊爱上该公积金叽叽叽叽几几几几几几几几几几几几几几几军军军军军军军军军军军军军军军军军军军军军军军军军</div>

              </div>

            </div>
            <div class="good-tab ">
              <div class="tab" ref="tab">
                <div @click="showImgTxt" :class="{active:currentIndex===0}">
                  <span>图文详情</span>
                </div>
                <div @click="showParameter" :class="{active:currentIndex===1}">
                  <span>商品参考</span>
                </div>
                <div  @click="showEvaluate" :class="{active:currentIndex===2}">
                  <span>用户评价</span>
                </div>
              </div>
              <div class="box-list" v-show="currentIndex===0" ><h2>全都是图片</h2></div>
              <div class="box-list" v-show="currentIndex===1" >
                <div v-for="item in  parameter">

                  <div class="headline">{{item.name}}</div>
                  <div class="bodyline ">
                    <div v-for="itemA in item.second" class="clear">
                      <div class="content-tit">{{itemA.name}}</div>
                      <div class="content-con">{{itemA.vals}}</div>
                    </div>

                  </div>
                </div>

              </div>
              <div class="box-list" v-show="currentIndex===2">
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>     <div class="evaluate clear">
                <div class="portrait float-left"></div>
                <div class="evaluate-item">
                  <div style="">
                    <span>匿名用</span>
                    <span class="float-right">匿名用户</span>
                  </div>
                  <div>
                    爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                  </div>
                </div>
              </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>     <div class="evaluate clear">
                <div class="portrait float-left"></div>
                <div class="evaluate-item">
                  <div style="">
                    <span>匿名用</span>
                    <span class="float-right">匿名用户</span>
                  </div>
                  <div>
                    爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                  </div>
                </div>
              </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>
                <div class="evaluate clear">
                  <div class="portrait float-left"></div>
                  <div class="evaluate-item">
                    <div style="">
                      <span>匿名用</span>
                      <span class="float-right">匿名用户</span>
                    </div>
                    <div>
                      爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部爱国卫生部
                    </div>
                  </div>
                </div>

              </div>


            </div>


          </div>
        </div>
      </scroll>
      <buy @model="model" @help="help"></buy>
      <div style="position:fixed;top:0;bottom:0;left:0;right:0;background:#000;opacity:0.5;z-index:999" v-show="showModel" @click="showBg"></div>
      <selectModel v-show="showModel" @confirmorder="turnConfirm" :propes="this.propes"></selectModel>
      <router-view></router-view>

    </div>
  </transition>



</template>

<script>
  import {getCommodityDetail,commodityPropertiesList} from 'api/all'
  import scroll from 'base/scroll/scroll'
  import buy from 'base/buy/buy'
  import selectModel from 'base/SelectModel/SelectModel'
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'vant';
  Vue.use(Swipe).use(SwipeItem);
    export default {
        name: "good-item",
      data(){
          return {
            showModel:false,
            goodDetail:{},//商品详情
            imgSrc:'',
            imgArr:[],//图片列表
            currentIndex:0,
            parameter:[],
            propes:[],//颜色内存版本等选项列表
            tabHeight:1000
          }
      },
      computed: {

      },
      created(){
        this.listenScroll = true;//监听scroll滚动事件
        this.id=this.$route.params.id;
        this.probeType = 3;

        getCommodityDetail(this.id).then((res)=>{
          this.propes=res.result.commodity.propes;
          //console.log(this.propes[0]);
          this.imgSrc=res.imgSrc;
          this.goodDetail=res.result.commodity.objs;
          this.imgArr=res.result.commodity.objs.albumImg.split(',');
          for (var i=0;i<this.propes.length;i++){
            for(var j=0;j<this.propes[i].value.length;j++){
              console.log();
              this.propes[i].value[j]=this.propes[i].value[j].split('|')
            }
          }
          console.log(this.propes)
        });
        commodityPropertiesList( this.id).then((res)=>{
          this.parameter=res.result.propertiesList;
        })
      },
      methods:{
        onClickLeft(){
          this.$router.back()
        },
        help(){
          console.log(1);
          this.$router.push({
            path:`gooditem/kefu`
          })
        },
        model(){
         /* this.$router.push({
            path:`/selectmodel`
          })*/
         this.showModel=true
        },
        showBg(){
          this.showModel=false;
        },
        turnConfirm(){
          this.$router.push({
            path:`/confirmorder`
          })
        },
        showParameter(){
          this.currentIndex=1
        },
        showImgTxt(){
          this.currentIndex=0
        },
        showEvaluate(){
          this.currentIndex=2
        },
        scroll(){
         this.tabHeight=this.$refs.tab.getClientRects()[0].top;
        }
      },
      components:{
        scroll,
        buy,
        selectModel,
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .wrapper{
    position:fixed;top:0;left:0;right:0;bottom:0;
    background: #fff;z-index:101;background:#F4F6F8;
    .scroll{
      position:fixed;top:46px;left:0;bottom:50px;right:0;z-index:101;overflow:hidden;
    }
    .good-item{
      .good-details{
        width:92%;
        background:#fff;
        margin:0 auto 0;border-radius: 8px;
        .swiper{
          height:250px;
          .van-swipe__indicators>i{background:#000 !important;}
          .van-swipe__indicators .van-swipe__indicator--active{
            background: @main-color !important;
          }
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

      }
      .notice{
        width:92%;
        background:#fff;
        margin:10px auto 0;border-radius: 8px;
        .box{
          display:flex;padding:18px 0;width:94%;border-bottom:1px solid #eee;margin:0 auto;
          >div{
            flex:1;
            img{
              width:40px;
            }
            p{
              font-size:12px;margin-top:5px;
            }
          }
        }
        .text{
          padding:0 14px;text-align:left;
          p{
            font-size:12px;font-weight:bold;margin-top:20px;color:#333;
          }
          div{
            font-size:10px;margin-top:10px;color:#666;
          }
        }
      }
      .good-tab{
        width:92%;
        background:#fff;
        margin:10px auto 0;border-radius: 8px;

        .box-list{
          width:auto;margin:0 14px 0 14px;padding-bottom:20px;

          .headline{
            line-height:50px;
            font-size:16px;text-align: left;border-bottom: 1px #eee solid;
          }
          .bodyline{
            font-size:12px;text-align: left;
            >div{
              display:flex;margin-top:15px;
            }
            .content-tit{
              font-size:12px;color:#666;width:100px;
            }
            .content-con{
              font-size:12px;color:#333;flex:1;
            }
          }
          .evaluate{
            .portrait{
              width:40px;height:40px;
              background: red;
            }
            .evaluate-item{
              text-align:left;
              width:auto;margin:0 0 0 50px;
              >div{
                /* text-align:justify*/
              }
            }
          }

        }
      }
    }

  }
  .tab{
    padding:20px 0;display:flex;border-bottom:1px solid #eee;border-radius:8px 8px 0 0;
    >div{
      flex:1;font-size:14px;color:#999;height:30px;
      >span{
        display:block;height:25px;padding:0 10px;line-height:25px;border-radius: 12.5px;
        width:60%;font-size:12px;margin:5px auto 0;
      }
    }
    >div.active{
      >span{
        background:@main-color;color:#fff;box-shadow: 0 0 8px rgba(153,153,153,.4);
      }
    }
  }
  .tab.fixed{
    position: fixed;
    top: 46px;
    width: 92%;
    overflow: hidden;
    z-index: 10000000000000;background:#fff;
    left:4%;
  }


</style>
