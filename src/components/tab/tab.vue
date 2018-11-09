<script src="../../../../../一个大项目/企业福利/rem.js"></script>
<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/home">
      <div class="tab-bg home-bg"></div>
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/category">
      <div class="tab-bg category-bg"></div>
      <span class="tab-link">分类</span>
    </router-link>
  <!--  <router-link tag="div" class="tab-item" to="/find">
      <div class="tab-bg find-bg"></div>
      <span class="tab-link">发现
      </span>
    </router-link>-->
    <router-link tag="div" class="tab-item" to="/about">
      <div class="tab-bg about-bg"></div>
      <span class="tab-link">我的
      </span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/index.less";
  .tab{
    background:white;
    display:flex;
    height:58px;
    position:fixed;
    bottom:0;left:0;
    text-align: center;
   width:100%;
    .tab-item{
      flex:1;
      .tab-bg{
        width:26px;height:26px;
        /* background:url('home2x.png');*/
        margin:6px auto 6px;

        background-size: 26px 26px;
       /* background-position: center;
        background-repeat: no-repeat;*/
      }
      .home-bg{
        .bg-image('home');
      }
      .category-bg{
        .bg-image('category');
      }
      .find-bg{
        .bg-image('find');
      }
      .about-bg{
        .bg-image('about');
      }
      span{font-size:12px;display:block;}

    }
    .router-link-active{
      .home-bg{
        .bg-image('home-active');
      }
      .category-bg{
        .bg-image('category-active');
      }
      .find-bg{
        .bg-image('find-active');
      }
      .about-bg{
        .bg-image('about-active');
      }
      span{color:#00c0a3;}
    }


  }

</style>
