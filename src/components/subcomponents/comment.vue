<template>
    <div class="comment-container">
    <h4>发表评论</h4>
    <hr>
    <textarea placeholder="请输入要吐槽的内容(最多BB120字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="comment-list" v-for="(item,i) in comments" :key="item.add_time">
      <div class="comment-item">
        <div class="comment-title">第{{ i + 1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
        <div class="comment-content">
          {{ item.content }}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
    import { Toast } from "mint-ui";
    export default{
        data(){
            return {
                pageindex: 1, // 默认展示第一页的评论数据
                comments: [], // 评论内容的数组
                msg: "" // 评论消息
            }
        },
        created(){
            this.getCommentsByPage();
        },
        methods: {
            getCommentsByPage(){
                this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
                .then(result => {
                    if(result.body.status === 0){
                        // 为了实现加载更多的需求，我们把最新的评论数据，通过数组的拼接，重新赋值给 comments，从而防止 之前的评论数据被覆盖的问题；
                        this.comments = this.comments.concat(result.body.message);
                    }else{
                        oast("获取评论失败！");
                    }
                })
            },
            getMore(){
                // 加载更多评论
                this.pageindex++;
                this.getCommentsByPage();
            },
            postComment() {
                // 没有评论内容，不让发表
                if (this.msg.trim().length <= 0) {
                    return Toast("评论内容不能为空！");
                }
                // 点击发表评论
                // 参数1： 请求的URL地址
                // 参数2： 发送给服务器的数据对象 { content: '' }
                // 参数3： 指定要发送给服务器的数据的表单提交格式  { emulateJSON:true }
                this.$http
                    .post("api/postcomment/" + this.id, {
                        content: this.msg.trim()
                    })
                    .then(result => {
                        if(result.body.status === 0) {
                            // 加载最新的评论
                            // 1. 调用 getCommentsByPage 获取最新的评论，但是，如果用户已经看到了 第 2页 或者 其它更多的评论，这时候，如果一调用 getCommentsByPage 方法，默认只能加载 某一页的数据；
                            // 2. 不重新调用 getCommentsByPage 获取最新的评论，而是在客户端，使用 JS 的形式，把 最新的 评论，组织成一个 评论对象，然后 手动 unshift 到 this.comments 中
                            this.comments.unshift({
                                user_name: "匿名用户",
                                add_time: Date.now(),
                                content: this.msg
                            });

                            this.msg = "";
                        }else{
                            Toast("发表评论失败！");
                        }
                    })
            }
        },
        props: ["id"] // 使用 props 存放父组件传递过来的Id值
    }
</script>
<style lang="scss" scoped>
    .comment-container {
        textarea {
            margin: 0;
            font-size: 14px;
        }
        .comment-list {
            .comment-item {
            font-size: 14px;
            .comment-title {
                background-color: #ccc;
                line-height: 30px;
            }
            .comment-content {
                text-indent: 2em;
                line-height: 35px;
            }
            }
        }
    }
</style>

