<template>
    <div class="adress-wrapper">
      <div class="content">
        <div>
          <div class="f">陈一丰 先生</div>
          <div class="az">15898541254</div>
        </div>
        <div class="adress-detail">广东省贾斯丁噶设计稿我活塞杆hi按个IQ偶家哥i哦妻儿武功我昂科技馆 </div>
      </div>
      <div class="option"></div>
    </div>
</template>

<script>
  import scroll from "base/scroll/scroll"
  import Vue from 'vue'
  import { NavBar } from 'vant';
  Vue.use(NavBar);
    export default {
        name: "adress",
      components:{
          scroll
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .adress-wrapper{
    padding:14px;display:flex;background:#fff;width:90%;margin:0 auto 20px;border-radius: 6px;
    .content{
      flex:3;
      div{
        display:flex;font-size:14px;
        div:first-child{
          text-align: left;flex:1;line-height:20px;font-weight: bold;
        }
        div:last-child{
          text-align: right;flex:1;line-height:20px;
        }
      }

      .adress-detail{
        text-align:left;font-size:12px;margin-top:10px;
      }
    }
    .option{
      flex:1;
      .bg-image('ok');
      background-repeat: no-repeat;
      background-position: center right;
      background-size: 25px;
    }
  }
</style>
