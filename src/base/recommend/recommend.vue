<template>
<div class="recommend">
  <div class="show-img">

  </div>
  <div class="item">
    <p>机关i哦啊价格就感觉啊</p>
    <div class="price">
      <span>45.55</span>元每月
    </div>
    <div class="tag">
      <div>包邮</div>
      <div>包邮</div>
      <div>包邮</div>
    </div>
  </div>
<div style="clear:both"></div>
</div>
</template>

<script>
    export default {
        name: "recommend"
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
.recommend{
  border-bottom:1px solid #e9e9e9;
  padding:26px 0;
  .show-img{
    width:83px;
    height:92px;
    background:#e9e9e9;
    float:left;
  }
  .item{
    width:auto;float:left;margin-left:16px;
    >p{
      font-size:18px;color:#333;
    }
    >.price{
      font-size:12px;color:#999;text-align: left;margin-top:15px;
      >span{
        color:#25c6a6;font-size:20px;
      }
    }
    >.tag{
      text-align: left;margin-top:6px;
      >div{
       padding:1px 4px;border:1px solid #f48258;font-size:10px;color:#f48258;border-radius: 3px;float:left;margin-right:4px;
      }

    }
  }
}
</style>
