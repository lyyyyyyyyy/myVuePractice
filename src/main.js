import Vue from 'vue';

// 导入路由相关包
import VueRouter from 'vue-router';
// 安装路由
Vue.use(VueRouter);

// 导入过滤器
import './filters.js';

//配置安装 vue-resource
import VueResource from 'vue-resource';
// 安装 VueResource
Vue.use(VueResource)
// 这是全局配置 请求 根路径的 ，必须放到 VueResource 注册之后
Vue.http.options.root = 'http://vue.studyit.io'
// 全局配置 post 提交时候，的表单 数据类型  为 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

// 按需 导入自己需要的mint_ui组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
// 使用Vue.components 注册Header组件
Vue.component(Header.name, Header);
// 注册swiper组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 注册按钮
Vue.component(Button.name, Button)

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
