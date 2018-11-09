<template>
  <div class="littlebar">
    <div class="title">我的财富</div>
    <div class="more">
      查看全部
      <img src="./arrow@2x.png" alt="">

    </div>
  </div>

</template>

<script>
    export default {
        name: "littlebar"
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .littlebar{
padding:15px 10px;display:flex;height:20px;
  }
  .title{
    font-size:12px;flex:1;text-align: left;line-height:20px;font-weight: bold;
  }
  .more{
    float:right;font-size:10px;color:#999 ;background:white;flex:1;text-align:right;line-height:20px;vertical-align: middle;
    >img{
      vertical-align: middle;width:20px;
    }
  }

</style>
