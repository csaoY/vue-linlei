<template>

  <!--  <transition name="fade">

    </transition>-->
    <transition name="turn">
      <!--<div style="position:fixed;width:100%;height:100%;background:#000;opacity:0.8;z-index:999;"></div>-->
      <div class="model-box">
        <div class="header"></div>
        <div class="card-wrapper">
          <div class="card clear" v-for="item in  propes">
            <div  class="float-left title">{{item.name}}</div>
            <div class=" content">
              <ul class="">
                <li class="float-left" v-for="itemA in item.value" :class="{'disabled':itemA[1]==='0'}">{{itemA[0]}}</li>
              </ul>
            </div>
          </div>
         <!-- <div class="card clear">
            <div  class="float-left title">网络</div>
            <div class=" content">
              <ul class="">
                <li class="float-left">全网通</li>
                <li class="float-left">全网通</li>

              </ul>
            </div>
          </div>
          <div class="card clear">
          <div  class="float-left title">网络</div>
          <div class=" content">
            <ul class="">
              <li class="float-left">全网通</li>
              <li class="float-left">全网通</li>
            </ul>
          </div>
        </div>-->
        </div>
        <p>增值服务</p>
        <div class="bar clear">
          <div class="point float-left"></div>
          <div class="txt float-left">意外保障</div>
          <div class="float-right more">200
          <img src="./arr.png" alt=""></div>
        </div>
        <div class="bar clear">
          <div class="point float-left"></div>
          <div class="txt float-left">意外保障</div>
          <div class="float-right more">200
            <img src="./arr.png" alt=""></div>
        </div>
        <div class="btn" @click="confirm">选择规格</div>
      </div>
    </transition>
</template>

<script>
    export default {
        name: "select-model",
      props:{
        propes:{
          type:Array,
          default:[]
        }
      },
      methods:{
        confirm(){
          this.$emit('confirmorder')
        }
      },
      created(){
      },
      mounted(){

      }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .model-box{
   background:#fff;width:100%;z-index:1000;position:fixed;bottom:0;border-radius: 10px 10px 0 0;
    .card-wrapper{
      width:90%;margin:0 auto;border-bottom: 1px solid #eee;
      .card{
        margin-top:20px;
        .title{
          width:70px;line-height:24px;font-size:12px;text-align: left;
        }
        .content{
          width:auto;margin:0 0 0 70px;
          >ul{width:100%;
            >li{
              width:60px;border:1px solid #999;height:22px;line-height:22px;margin-right:20px;margin-bottom: 10px;font-size:12px;border-radius: 4px;
            }
            >li.selected{
              border-color:#00c0a3;
              color:#00c0a3;
            }
            >li.disabled{
              border:1px dashed #B8B8B8;
            }
          }
        }
      }
    }
    >p{
      text-align: left;width:90%;margin:10px auto;
    }
    >.bar{
      width:90%;margin:10px auto;height:20px;line-height:20px;
      .point{
        width:14px;
        height: 14px;
        border:1px solid #00c0a3;
        border-radius: 50%;margin:2.5px 5px 0 0;
      }
      .point.active{
        background: #00c0a3;
      }
      .txt{
        color:#b5b5b5;
      }
      .more{
        color:#00c0a3;
      }
      img{
        width:20px;vertical-align: middle;position:relative;top:-2px;
      }

    }
.btn{
  width:90%;margin:20px auto;background:#00c0a3;color:#fff;height:35px;line-height:35px;border-radius: 17.5px;
}
  }
  .turn-enter-active, .turn-leave-active{  transition: all 0.3s}
  .turn-enter, .turn-leave-to{  transform: translate3d(0, 100%, 0)}
/*  .fade-enter-active, .fade-leave-active{  transition: all 0.3s}
  .fade-enter, .fade-leave-to{  opacity:0;}*/

</style>
