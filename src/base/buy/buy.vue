<template>
    <div class="buy">
      <div class="box">
        <div>
          <div></div>
          <p>客服</p>
        </div>
        <div>
          <div></div>
          <p>客服</p>
        </div>
        <div @click="call">
          <div></div>
          <p>客服</p>
        </div>
      </div>
      <div class="select" @click="selectModel">选择规格</div>
    </div>
</template>

<script>
    export default {
        name: "buy",
      methods:{
        selectModel(){
          this.$emit('model')
        },
        call(){
          this.$emit('help')
        }
      }
    }

</script>


<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
 .buy{
   background:#fff;position:fixed;bottom:0;left:0;z-index:999;height:50px;right:0;
   .box{
     width:160px;height:50px;display:flex;float:left;
     >div{
       flex:1;
       >div{
         width:25px;margin:5px auto 0;height:25px;
         background-size:25px 25px;
         /*.bg-image('kefu');*/
         .bg-image('kefu');
       }
       >p{
         font-size:12px;
       }
     }
   }
   .buy:after{
     display:table;
     content:'';
     clear:both;
   }
   .select{
     width:auto;margin:7.5px 15px 0 175px;background:#00c0a3;height:35px;border-radius: 17.5px;line-height:35px;color:#fff;
   }
 }
</style>
