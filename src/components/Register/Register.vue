<template>
  <transition name="slide">
    <div class="register-wrapper">
      <p class="title">输入验证码</p>
      <p class="second-title">已经向尾号7657的手机发送验证码</p>
      <codeWrapper @input="getvalue"></codeWrapper>
      <!-- <div href="#" class="btn" @click="next">下一步</div>-->
    </div>
  </transition>
</template>
<script>
  import Vue from 'vue'
/*  import { PasswordInput, NumberKeyboard } from 'vant';*/
  import codeWrapper from 'base/codeWrapper/codeWrapper'
  import {vCodeValid,login,cookie} from 'api/all'
  import storage from 'good-storage'

/*  Vue.use(PasswordInput).use(NumberKeyboard);*/
  export default {
    name: "register",
    data() {
      return {
        phoneNum:'',
        codeNum:''
      };
    },
    created(){
     this.phoneNum=this.$route.query.phoneNum;
     console.log(this.phoneNum)
    },
    methods: {
      next(){
      },
      getvalue(value){
        this.codeNum=value;
        if(this.codeNum.length===4){
          cookie().then((res)=>{
            console.log(res)
            login(this.phoneNum,this.codeNum).then((res)=>{
              if(!res.success){
                alert(res.msg)
              }else{
                console.log(res.result);
                //storage.set('userId',res.result.user.id);
                location.href=storage.get('beforeLoginUrl')
              }
            })
          });

        }
      }

    },
    components:{
      codeWrapper
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .register-wrapper{
    position:fixed;top:0;left:0;right:0;bottom:0;z-index:999999999999999999999;
    background: #fff;padding-top:60px;
    .title{
      font-size:24px;color:#333;
    }
    .second-title{
      font-size:12px;color:#999;margin-top:18px;margin-bottom:30px;
    }
    .input-wrapper{
      width:60%;margin:90px auto 0;
      input{
        width:100%;height:30px;
        border:none;color:@main-color;
      }
    }
    .btn{
      display:inline-block;
      width:60%;height:40px;
      background:@main-color;color:#fff;text-align:center;margin-top:40px;border-radius:20px;line-height:40px;
    }
  }

</style>
