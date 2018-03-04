// 1.1 导入路由模块
import VueRouter from "vue-router";

// 导入组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import Newslist from './components/news/Newslist.vue';

var router = new VueRouter({
    routes:[  //目前这个路由是空的
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:Newslist},
    ],
    linkActiveClass:'mui-active' //将默认的高亮样式，替换为 自己的 mui-active
})

export default router