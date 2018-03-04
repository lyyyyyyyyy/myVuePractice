<template>
  <div>
    
    <!-- 图文列表区域 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{item.add_time | dateFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>

  </div>
</template>


<script>

import {Toast} from 'mint-ui';
export default {
  data(){
    return {
      newslist:[] //保存所有新闻列表数据
    }
  },
  created(){
    this.getNewsList();
  },
  methods: {
    getNewsList(){
      this.$http.get("api/getnewslist").then(result => {
        if(result.body.status === 0){
           this.newslist = result.body.message;
        }else{
          // 提示用户失败了
          // 注意：这里的 Toast 是一个 JS 组件，只能通过 JS 调用的方式来使用，
          // 并不是把它当作 标签引入到页面中去的，所以，如果想要在组件中调用Toast，
          // 则，必须在自己的组件中，按需导入，否则，在子组件中，是访问不到 Toast 
          // 这个 JS对象的；
          Toast("获取新闻列表失败");
        }
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.mui-media-body {
  h1 {
    font-size: 14px;
  }

  .mui-ellipsis {
    color: #26a2ff;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
