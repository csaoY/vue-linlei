<template>
    <div class="good-wrapper">
      <div class="good" @click="selectGood(id)">
        <img :src="src" alt="">
        <div class="good-name">{{name}}</div>
        <div class="price">￥{{price}}元/月起</div>
        <transition name="fade">
          <div class="delete" v-show=" manageState">
            <div class="del-btn">删 除</div>
          </div>
        </transition>

      </div>
    </div>
</template>

<script>
    export default {
        name: "good",
      props:{
        text: {
          type: String,
          default: ''
        },
        manageState:{
          type:Boolean,
          default:false
        },
        src:{
          type:String,
          default:''
        },
        name:{
          type:String,
          default:''
        },
        price:{
          type:Number,
          default:0
        },
        id:{
          type:String,
          default:''
        }
      },
      methods:{
        selectGood(id){
          this.$emit('select',id)

        }
      },
      mounted(){
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .good-wrapper{
    width:50%;float:left;
    >.good{
      width:95%;height:95%;background:#F3F3F3;  margin:5px auto;padding:22px 0;border-radius: .5rem;position:relative;overflow: hidden;
      >img{
        width:120px;height:120px;
      }
      >.good-name{
       padding:0 12px;height:30px;line-height: 30px;font-size:14px;color:#999;overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;

      }
      >.price{
        color:#00c0a3;font-size:12px;
      }
      >.delete{
        position:absolute;width:100%;height:100%;left:0;top:0;background:RGBA(0,0,0,.2);
        >.del-btn{
        width:60px;height:60px;
        background:@main-color;color:#fff;text-align: center;border-radius: 50%;line-height: 60px;font-size:14px;position:absolute;top:50%;left:50%;margin-left:-30px;margin-top:-30px;
      }
      }
    }
  }

</style>
