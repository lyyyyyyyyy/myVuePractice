<template>
  <div class="app-container">

      <!--这是Header区域-->
      <mt-header fixed title="个人Vue练习"></mt-header>

      <!--这是路由的容器，将来匹配到的路由组件放到这个位置-->
      <transition>
        <router-view></router-view>
      </transition>

      <!--底部的 Tabbar 区域使用的是 MUI 中的 Tabbar-->
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shopcar">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>

  </div>
</template>
<script>
 
</script>

<style lang="scss" scoped>
  .app-container{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden; 
  }
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute; 
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
</style>

