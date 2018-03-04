import Vue from 'vue';

// 导入路由相关包
import VueRouter from 'vue-router';
// 安装路由
Vue.use(VueRouter)

//配置安装 vue-resource
import VueResource from 'vue-resource';
// 安装 VueResource
Vue.use(VueResource)

// 按需 导入自己需要的mint_ui组件
import { Header, Swipe, SwipeItem } from 'mint-ui';
// 使用Vue.components 注册Header组件
Vue.component(Header.name, Header);
// 注册swiper组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入 MUI 的样式表
import './lib/mui/css/mui.min.css';
// 导入扩展的字体图标样式
import './lib/mui/css/icons-extra.css';


// 导入 App 根组件
import app from './App.vue';

// 导入路由组件
import router from './router.js';

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router //挂载路由对象
})
