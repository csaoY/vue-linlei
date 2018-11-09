<template>
    <div class="order" @click="detail">
      <div class="headline">
        <div class="orderNum">5219375981751750</div>
        <div class="state">卖家已发货</div>
      </div>
      <div class="one">
        <div style="" ></div>
        <div>
          <div class="name-price">
            <div class="name">iphoneX全新国行dsagsdg df</div>
            <div class="price">456每月</div>
          </div>
          <p>商品价值</p>
          <ul>
            <li>网络：全网通</li>
            <li>网络：全网通</li>
            <li>网络：全网通</li>
            <li>网络：全网通</li>
          </ul>
        </div>
      </div>
      <div class="two">
        <div class="a1">商品意外保险 <br>
          <span style="color:#999">
            (哈哈哈哈哈哈哈哈）
          </span>
        </div>
        <div class="a2">
          <div class="pri">hhh</div>
          <div class="num">X1</div>
        </div>
      </div>
      <hr>
      <div style="padding:10px 0;text-align:right;">共计2件商品 需要付款200</div>
      <div class="btn-wrapper ">
        <div class="btn-bg">取消订单</div>
        <div class="btn-none">取消订单</div>
        <p style="clear:both"></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "my-order",
      methods:{
          detail(){
            this.$emit('toDetail')
          }
      }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .order{
    background:#fff;padding:0 16px 16px 16px;border-radius: 6px;margin-bottom:10px;
    .headline{
      height:40px;line-height:40px;font-size:12px;display:flex;border-bottom: 1px solid #eee;
      border-radius:4px;
      >div{
        flex:1;
      }
      >.orderNum{
        text-align:left;color:#666;
      }
      >.state{
        text-align:right;color:@main-color;
      }
    }
    >.one{
      width:100%;display:flex;padding:5px 0;

      >div:first-child{
        height:75px;width:65px;background:red;
      }
      >div:nth-child(2){
        flex:1;
        padding-left:20px;
        >.name-price{
          display:flex;height:20px;line-height:20px;color:#333;
          .name{
            flex:2;text-align:left;font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;
          }
          .price{
            flex:1;text-align:right;
          }
        }
        >p{
          text-align: left;color:#666;margin-top:5px;
        }
        >ul{
          clear:both;margin-top:5px;
          li{
            float:left;margin-right:4px;font-size:10px;color:#999;
          }
        }

      }
    }
    >.two{
      display:flex;font-size:12px;padding:5px 0;
      >div{
        flex:1;text-align:left;
      }
      .a1{

      }
      .a2{
        text-align: right;
      }
    }
    .btn-wrapper{
      text-align: right;
      div{
        padding:0 8px;border-radius:10px;height:20px; line-height:20px;margin-left:10px;float:right;
      }
      .btn-bg{
        border:1px solid @main-color;
        background: @main-color;
        color:#fff;
      }
      .btn-none{
        color:#333;
        border:1px solid #999;
      }
    }
  }

</style>
