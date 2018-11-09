<template>
  <transition name="slide">
    <div class="my-adress">
      <van-nav-bar title="选择收货地址"  left-arrow :fixed="true" style="background:#fff;" @click-left="onClickLeft"></van-nav-bar>
      <scroll class="scroll">
        <div class="wrapper">
          <div class="wrapper-list">
            <adress></adress>
            <adress></adress>
            <adress></adress>
          </div>
        </div>
      </scroll>

      <div class="bot">
        <button @click="add">添加新的收货地址</button>
      </div>
      <router-view></router-view>
    </div>

  </transition>

</template>

<script>
  import adress from  'base/Adress/Adress'
  import scroll from  'base/scroll/scroll'
  import {addressList} from 'api/all'
    export default {
        name: "my-adress",
      components:{
        adress,
        scroll
      },
      created(){
        addressList().then((res)=>{
          console.log(res)
        })
      },
      methods:{
          add(){
            this.$router.push({
              path:`/addadress`
            })
          },
        onClickLeft(){
            this.$router.back()
        }
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .my-adress{
    position:fixed;top:0;left:0;right:0;bottom:0;background:#f3f3f3;z-index:1005;
    .scroll{
      position:fixed;top:46px;left:0;right:0;bottom:0;background:#f3f3f3;z-index:1006;

    }
    .wrapper{
      .wrapper-list{
        padding-top:20px;
width:94%;margin:0 auto;
      }
    }
    .bot{
      position:fixed;bottom:0;left:0;height:50px;right:0;z-index:1006;
      text-align:center;
      button{
        background:@main-color;width:90%;height:40px;color:#fff;margin-top:5px;border-radius:20px;font-size:15px;
      }
    }
  }


</style>
