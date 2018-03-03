import Vue from 'vue';

// 导入 App 组件
import app from './App.vue';

// 导入路由组件
import router from './router.js';

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router //挂载路由对象
})
