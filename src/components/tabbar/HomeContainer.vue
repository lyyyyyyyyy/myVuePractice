<template>
    <div>
        <mt-swipe :auto="4000">
            <!--在组件中，使用v-for 的时候，一定要加上 key-->
            <mt-swipe-item v-for='item in lunbotu' :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!--首页六宫格区域-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">销售反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>
<script>

    import {Toast} from 'mint-ui';
    export default{
        data(){
            return{
                lunbotu:[] //存放轮播图的数组
            };
        },
        created(){
            this.getLunbotu();
        },
        methods:{
            // 获取轮播图方法
            getLunbotu(){
                this.$http.get('api/getlunbo').then(result => {
                    // 轮播图的数据，应该保存到 data 中
                    // console.log(result.body);
                    if (result.body.status === 0) {
                        // 成功后，直接把数据保存到 data 中
                        this.lunbotu = result.body.message;
                    } else {
                        // 提示用户获取轮播图失败
                        Toast("获取轮播图数据失败！");
                    }
                })
            }
        }        
    }
</script>
<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            &:nth-child(1) {
                background-color: red;
            }
            &:nth-child(2) {
                background-color: blue;
            }
            &:nth-child(3) {
                background-color: cyan;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 12px;
    }


</style>

