// 1.1 导入路由模块
import VueRouter from "vue-router";

// 导入组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import Newslist from './components/news/Newslist.vue';
import Newsinfo from './components/news/Newsinfo.vue'; 

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},  //路由重定向
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:Newslist},
        {path:'/home/newsinfo:id',component:Newsinfo}
    ],
    linkActiveClass:'mui-active' //将默认的高亮样式，替换为 自己的 mui-active
})

export default router