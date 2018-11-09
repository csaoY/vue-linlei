<template>
<div>
  <van-nav-bar title="分类" left-text="" left-arrow>
    <div name="search" slot="left" >
    </div>
    <div name="search" slot="right" @click="fou" >
      <i class="van-icon van-icon-search" ></i>
    </div>
  </van-nav-bar>
  <scroll class="wrapper-left">
 <ul>
   <li v-for="(item,index) in catFather" @click="selectCat(item.id,index)" :class="{active:index===selectIndex}">
     <div>{{item.name}}</div>
   </li>



 </ul>
  </scroll>
  <scroll  class="wrapper-right">
    <div>
    <img src="./banner.png" alt="" style="height:100px;">

    <div class="goods">

      <ul>
        <li class="good-item" v-for="(item,index) in goods" @click="selectGoodArea(item.id)" >
          <div>
            <img :src="item.catPic" alt="" style="width:100%;">
          </div>
          <p>{{item.name}}</p>
        </li>
        <li style="clear:both"></li>
      </ul>

    </div>
    </div>
  </scroll>

<router-view></router-view>
</div>
</template>

<script>
  import Vue from 'vue'
  import { NavBar } from 'vant';
  Vue.use(NavBar);
  import {cat,catChild,commodityList} from 'api/all'
  import scroll from 'base/scroll/scroll'
    export default {
        name: "category",
      data(){
          return {
            catFather:[ ],
            goods:[],
            selectIndex:0
          }
      },
      created(){
          cat().then((res)=>{
            this. catFather=res.result
            catChild(res.result[0].id).then((res)=>{
              console.log(res.result)
              this.goods=res.result
            })
          })

      },
        components:{
          scroll
        },
      methods:{
        fou(){
          console.log(1)
        },
        selectCat(cid,index){
          this.selectIndex=index;
          catChild(cid).then((res)=>{
            //console.log(res.result)
            this.goods=res.result;
          })


        },
        selectGoodArea(id){
          console.log(id)
          this.$router.push({
            /*path: `/gooditem/${id}`,*/
            path: `/goodsarea/${id}`,
          })
        },
      },

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .van-nav-bar .van-icon{color:#333;}
  .wrapper-left{
    position:fixed;top:46px;bottom:58px;width:100px;background:#fff;
    >ul{
      >li{
       padding:20px 0;
        >div{
          height:13px;line-height:13px;text-align: center;box-sizing: border-box;border-left:6px solid #fff;border-right:6px solid #fff;font-size:14px;
        }
      }
      >li.active{
        >div{
          border-left:6px solid #25C6AE;
          color:#25C6AE;
        }
      }
    }
  }
  .wrapper-right{
    position:fixed;top:46px;bottom:58px;left:100px;right:0;
    >div{
      >img{
        width:90%;margin-top:20px;
      }
      >.goods{
        /*position:fixed;top:156px;bottom:58px;left:100px;right:0;*/
        .good-item{
          width:33.3333333333333333%;float:left;margin-top:16px;
          >div{
            width:80%;background:#fff;margin:0 auto;border-radius: 5px;
          }
          >p{
            margin-top:8px;
          }
        }
      }
    }

  }
</style>
