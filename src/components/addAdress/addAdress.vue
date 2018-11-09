<template>
  <transition name="slide">
    <div class="add">
      <van-nav-bar title="添加收货地址" left-arrow :fixed="true" style="background:#fff;"  @click-left="onClickLeft"></van-nav-bar>
      <scroll class="scroll">
        <div class="wrapper">
          <div class="box">
            <ul>
              <li>
                <div class="title">收货人</div>
                <div class="con">
                  <input type="text">
                </div>
              </li>
              <li>
                <div class="title">联系电话</div>
                <div class="con">
                </div>
              </li>
              <li>
                <div class="title">收货地址</div>
                <div class="con">
                </div>
              </li>
              <li>
                <div class="title">收货地址</div>
                <div class="con">
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </li>
            </ul>
            <van-picker :columns="columns" @change="onChange" />
          </div>
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script>
  import scroll from 'base/scroll/scroll'
  import Vue from 'vue'
  import { Picker } from 'vant';

  Vue.use(Picker);
  const citys = {
    '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    '福建': ['福州', '厦门', '莆田', '三明', '泉州']
  };
  export default {
        name: "add-adress",
    data() {
      return {
        columns: [
          {
            values: Object.keys(citys),
            className: 'column1'
          },
          {
            values: citys['浙江'],
            className: 'column2',
            defaultIndex: 2
          }
        ]
      };
    },
      methods:{
        onClickLeft(){
          this.$router.back()
        },
        onChange(picker, values) {
          picker.setColumnValues(1, citys[values[0]]);
        }
      },
      components:{
          scroll
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";

  .add{
    position:fixed;top:0;bottom:0;left:0;right:0;z-index:1007;
    background: #f3f3f3;
    .scroll{
      position:fixed;top:46px;bottom:0;left:0;right:0;z-index:1007;
    }
    .wrapper{padding-top:20px;
      .box{
        width:94%;
        background: #fff;border-radius: 6px;margin:0 auto;padding:10px 0;
        ul{
          li{
            display:flex;padding:10px 0;border-bottom:1px solid #eee;width:94%;margin:0 auto;font-size:14px;
            .title{
              flex:1;text-align:left;
            }
            .con{
              flex:3;
              input{
                width:100%;border:0;text-align:right;
              }
              textarea{
                width:100%;height:40px;
              }
            }
          }
        }
      }
    }
  }


</style>
