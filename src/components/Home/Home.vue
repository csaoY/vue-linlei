
<template>
    <div>
      <scroll class="home">
        <div>
          <header>
           <!-- <div class="search-con">
              <input type="text" class="search" placeholder="请输入商品名称">
              <div class="cart"></div>
            </div>-->
           <div class="swi-wrapper">
             <van-swipe :autoplay="3000">
               <div v-for="item in bannerImg">
                 <van-swipe-item >
                   <img :src="imgSrc+item.itemList[0].imgUrl" alt="">
                 </van-swipe-item>
               </div>
             </van-swipe>
           </div>
          </header>
          <div class="show-list">
            <div >
              <img src="./qiandao.png" alt="">
              <div>每日签到</div>
            </div>
            <div>
              <img src="./shouji.png" alt="">
              <div>智能手机</div>
            </div>
            <div>
              <img src="./bijiben.png" alt="">
              <div>笔记本</div>
            </div>
            <div>
              <img src="./kuwan.png" alt="">
              <div>酷玩外设</div>
            </div>
            <div>
              <img src="./qiandao.png" alt="">
              <div>摄影天地</div>
            </div>
          </div>
          <div class="show-banner" v-for="item in active">
            <div class="title">
              <p>{{item.name}}</p>
              <div>
                查看更多
              </div>
            </div>
            <div class="zq">
              <img :src="imgSrc+item.imgUrl" alt="">
              <div v-for="itemA in item.itemList">
                <good :src="imgSrc+itemA.skuImg" :price="itemA.skuPrice" :name="itemA.skuGoodsName" :id="itemA.skuId" @select="select"></good>
              </div>
            </div>
            <div style="clear:both"></div>
          </div>

       <!--   <div class="show-banner">
            <div class="title">
              <p>{{activity.name}}</p>
              <div>
                查看更多
              </div>

            </div>
            <div class="card">
              <div></div>

            </div>
            <div style="clear:both"></div>
          </div>
          <div class="show-banner">
            <div class="title">
              <p>{{iphoneArea.name}}</p>
              <div>
                查看更多
              </div>

            </div>
            <div class="zq">
              <img :src="imgSrc+iphoneArea.imgUrl" alt="">
              <div v-for="item in iphoneArea.itemList">
                <good :src="imgSrc+item.skuImg" :price="item.skuPrice" :name="item.skuGoodsName" :id="item.skuId" @select="select"></good>
              </div>




              <div style="clear:both"></div>
            </div>
            <div style="clear:both"></div>
          </div>
          <div class="show-banner">
            <div class="title">
              <p>{{ipadArea.name}}</p>
              <div>
                查看更多
              </div>
            </div>
            <div class="zq">
              <img src="./diannaozq.png" alt="">
              <good></good>
              <good></good>
              <div style="clear:both"></div>

            </div>
            <div style="clear:both"></div>
          </div>-->
          <div class="show-banner">
            <div class="title">
              <p>猜你喜欢</p>
            </div>
            <recommend></recommend>
            <recommend></recommend>
            <recommend></recommend>
            <div style="clear:both"></div>
          </div>
        </div>
      </scroll>
      <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import good from 'base/good/good'
import recommend from 'base/recommend/recommend'
import iphonearea from 'components/IphoneArea/IphoneArea'
import scroll from 'base/scroll/scroll'
import { Swipe, SwipeItem } from 'vant';
import axios from 'axios'
import jsonp from 'common/js/jsonp'
/*import {urls} from 'api/urls'*/
import {bannerImg,activity,cat,commodityBrandList} from 'api/all'
Vue.use(Swipe).use(SwipeItem);
  export default {
    name: "home",
    data(){
      return {
        imgSrc:'',
        bannerImg:[],
        activity:{},
        iphoneArea:{},
        ipadArea:{},
        active:{}
      }
    },
    created(){
      bannerImg().then((res)=>{
        this.imgSrc=res.imgSrc;
        this.bannerImg=res.result;
      })
      activity().then((res)=>{
      /*console.log(res.result);*/
       /* this.activity=res.result[0];
        this.iphoneArea=res.result[1];
        this.ipadArea=res.result[2]*/
        this.active=res.result;
      })
      cat().then((res)=>{
        //console.log(res)
      })
      commodityBrandList().then((res)=>{
       // console.log(res)
      })
    },
    components:{
    /*  HomeGood*/
      recommend,
      good,
      scroll
    },
    methods:{
      iphonearea(){
        this.$router.push({
          path: `/iphonearea`
        })
      },
      select(id){
        this.$router.push({
          path: `/gooditem/${id}`,
        })
      },
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
.home{
  position:fixed;top:0;bottom:58px;left:0;right:0;
}
  header {
    height:8rem;
    padding-top: 3rem;
    width: 25rem;
    .bg-image('header-bg');
    background-size: cover;
    .search-con {
      width: 23rem;
      height: 2rem;
      position: relative;
      margin: 0 auto;

      .search {
        height: 2rem;
        border: 0;
        padding-left: 3rem;
        float: left;
        width: 17rem;
        background-color: #50c2a9;
        .bg-image('search');
        background-position: 5px;
        background-repeat: no-repeat;
        background-size: 2rem;
        color: white;
        border-radius: .33rem;
      }
      .cart{
        height:2rem;width:2rem;float:right;.bg-image('shopcar');
        background-size:2rem 2rem;
      }

    }
    > .swi-wrapper {
      z-index:200;
      height: 11.5rem;
      width:22.5rem;
      margin:2rem 1.25rem;
      border-radius: 10px;
      overflow:hidden;
      img{
        width:22.5rem;
      }

    }
  }

  .show-list {
    display: flex;
    padding-top: 7rem;
    background: #fff;
    padding-bottom: 2rem;
    > div {
      text-align: center;
      flex: 1;
      font-size: 14px;
      color: #333;
      > img {
        width: 30px;
        display: block;
        margin: 0 auto;
      }
      > div {
        margin-top: 10px;
      }
    }
  }
  .show-banner{
    margin-top:10px;background:#fff;
    padding:16px 1rem 16px;
    .title{
      height:30px;
      >p{
        float:left;
        color:#333;
        font-weight: bold;
        font-size:18px;
        line-height:30px;
      }
      >div{
        float:right;
        font-size:14px;
        color:#999;
        line-height:30px;

      }
    }
    .zq{
      margin-top:20px;

      >img{
        width:100%;
      }
 /*     >.good{
        width:11.2rem;height:11rem;background:#f3f3f3;margin-top:5px;border-radius: .5rem;float:left;
      }
      >.good:nth-child(2){
        float:right
      }*/

    }
  }



</style>
