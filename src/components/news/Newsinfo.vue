<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h4 class="title"> {{newsinfo.title}} </h4>
    <p class="subtitle">
        <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
        <span>点击：{{newsinfo.click}}次</span>
    </p>
    <hr />
    <div class="content" v-html="newsinfo.content"></div>

    <!-- 评论子组件 -->
    <comment-box :id="$route.params.id"></comment-box>

  </div>
</template>

<script>
import { Toast } from "mint-ui";

// 导入子组件
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      newsinfo: {} // 新闻数据
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      // 获取新闻详情
      // 1. 获取到 当前新闻的 Id
      // 2. 发送数据请求，获取新闻数据
      // 3. 把新闻数据，保存到 data 上
      // 4. 渲染页面
      var id = this.$route.params.id;
      // Pormise 的使用
      this.$http.get("api/getnew/" + id).then(result => {
        if (result.body.status === 0) {
          // 将新闻数据保存到 data
          this.newsinfo = result.body.message[0];
        } else {
          Toast("获取新闻详情失败！");
        }
      });
    }
  },
  components:{
    // 注册自己的私有组件
    "comment-box": comment
  }
};
</script>

<style lang="scss">
.newsinfo-container {
  padding: 0 3px;
  .title {
    color: #226aff;
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    color: #226aff;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
