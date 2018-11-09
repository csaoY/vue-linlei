<template>

  <div class="confirm-bot clear">
    <div class="txt float-left;">
      <div>点击确认订单即代表已同意</div>
      <a @click="turn">《用户租赁及服务协议》</a>
    </div>
    <div class="btn">确认过眼神</div>
  </div>
</template>

<script>
    export default {
        name: "confirm",
      methods:{
          turn(){
            this.$emit('toA')
          }
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .confirm-bot
  {
    background:#fff;
    z-index:1005;
    height:50px;position:fixed;bottom:0;left:0;right:0;width:100%;
    .txt{
      line-height:15px;width:150px;float:left;font-size:12px;margin-top:10px;
      >a{
        color:@main-color
      }
    }
    .btn{
      width:auto;margin:5px 20px 0 160px;height:40px; color:#fff;line-height:40px;background:#00c0a3;border-radius: 20px;
    }
  }

</style>
