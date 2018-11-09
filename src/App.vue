<template>
  <div id="app">
   <!-- <img src="./assets/logo.png">-->
    <router-view></router-view>
    <Tab></Tab>
    <input type="button" value="显示弹窗" @click="showToast" style="position:fixed;top:50px;">
  </div>
</template>

<script>
  import Tab from 'components/tab/tab'
  export default {
    name: 'App',
    created(){
      console.log(alert)
      console.log(toast)
    },
    components:{
      Tab,
    alert
    },
    methods: {
      showToast () {
        this.$alert()
      }

    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: Consolas;
}
.van-swipe__indicators>i{
  background:none;border:1px solid #fff;
}
.van-swipe__indicators>i.van-swipe__indicator--active{
  background:#fff;
}
.van-swipe__indicators{
  bottom:20px;
}
.van-swipe__indicators>i{background:#000 !important;}
.van-swipe__indicators .van-swipe__indicator--active{
  background: @main-color !important;
}
</style>
