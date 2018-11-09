<template>
    <div class="alert-wrapper" v-if="show">
      <div style="padding:20px;color:red;">哈哈哈哈哈大哥别杀我</div>
      <div class="footer">
        <div @click="hide">确定</div>
        <div>取消</div>
      </div>
    </div>
</template>

<style scoped>
  .alert-wrapper{
    position:fixed;
    top:50%;left:50%;
    transform: translate(-50%,-50%);
    background: #fff;width:50%;z-index:200;border:1px solid #333;
  }
  .footer{
    display:flex;
  }
  .footer>div{
    text-align:center;line-height:30px;flex:1;
  }

</style>
<script>
  export default{
    methods:{
      hide(){
        this.$emit('hide')
      }
    }
  }
</script>
