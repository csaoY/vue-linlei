<template>
  <transition name="slide">
    <div class="login-wrapper">
      <p class="title">输入手机号</p>
      <p class="second-title">为了方便您的体验，请输入手机号</p>

      <div class="input-wrapper">
        <input type="text" placeholder="请输入手机号码" v-model="phoneNum" @change="test"/>
      </div>
      <div class="btn" @click="next">下一步</div>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
  import {getCode} from 'api/all'

  export default {
    name: "login",
    data() {
      return{
        phoneNum:''
      }
    },
    created() {
    },
    methods: {
      next() {
        getCode(this.phoneNum).then((res) => {
          console.log(res);
          if(res.success){
            this.$router.push({
              path: `/register`,
              query: {
                phoneNum:this.phoneNum
              }
            })
          }else{
            alert(res.msg)
          }

        })

      },
      test(){
        console.log(this.phoneNum)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";

  .login-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999999999999999999;
    background: #fff;
    padding-top: 60px;
    .title {
      font-size: 24px;
      color: #333;
    }
    .second-title {
      font-size: 12px;
      color: #999;
      margin-top: 18px;
    }
    .input-wrapper {
      width: 60%;
      margin: 60px auto 0;
      border-bottom: 1px solid #999;
      input {
        width: 100%;
        height: 30px;
        border: none;
        color: @main-color;
        font-size:14px;
      }
    }
    .btn {
      display: inline-block;
      width: 60%;
      height: 40px;
      background: @main-color;
      color: #fff;
      text-align: center;
      margin-top: 30px;
      border-radius: 25px;
      line-height: 40px;
      font-size:14px;
    }
  }

</style>
