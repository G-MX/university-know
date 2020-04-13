<template>
  <div class="detail">
    <!-- 头部  -->
    <div class="header">
      <mt-header fixed :title="HeadTitle">
        <router-link to="/topic" slot="left">
          <span class="iconfont">&#xe6db;</span>
        </router-link>
        <!-- 收藏   -->
        <div class="collect" @click="changeCollect" slot="right">
          <!-- 取消收藏 -->
          <div v-if="collect" @click="delCollection()">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-enjoy1"></use>
            </svg>
          </div>
          <!-- 收藏 -->
          <div v-else @click="addCollect">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shoucang"></use>
            </svg>
          </div>
        </div>
      </mt-header>
    </div>
    <div class="Message">
      <!--  帖子内容  -->
      <div class="TopicMessage">
      <div class="Title">
        <h1>{{TopicTitle}}</h1>
      </div>

      <div class="TopicUser">
        <div class="userimage">
          <i class="el-icon-s-custom"></i>
        </div>
        <div class="other">
          <span>{{publisher}}</span><br>
          <span>{{PublishTime}}</span>
        </div>
      </div>
      <div class="Artical">
        {{TopicArtical}}
      </div>
    </div>
      <!-- 操作信息 -->
      <div class="Operation">
      <div class="allComment">
        <span>全部评论</span>
      </div>
      <div class="reverseCom">
        <span @click="reversecom">
          倒序查看
          <i class="iconfont">&#xe66a;</i>
        </span>
      </div>
    </div>
      <!--  评论部分  -->
      <div class="commentList">
      <!--   当帖子存在评论时，显示评论内容     -->
      <ul v-if="commentList.length != 0">
        <li v-for="(comment,index) in commentList" :key="comment.cid" class="comment">
          <div class="Reviewer">
            <i class="el-icon-s-custom"></i>
            <span>{{comment.Reviewer}}</span>
          </div>
          <div class="Content">
            <span>{{comment.Comment}}</span>
          </div>
          <div class="CommentTime">
            <span>{{changeToDate(comment.addcomment_time.valueOf())}}</span>
          </div>
        </li>
      </ul>
      <!--   当帖子不存在评论时，显示此内容     -->
      <ul v-else class="nocom">
        <li>暂无评论,欢迎留言！</li>
      </ul>

    </div>
    </div>
    <!--   评论框   -->
    <div class="addcom">
      <el-input placeholder="请输入内容" v-model="Comment" class="input-with-select">
        <el-button slot="append" icon="el-icon-edit" @click="addComment">评论</el-button>
      </el-input>
    </div>

  </div>
</template>


<script>
  import "../../../assets/js/iconfont.js"
  import { Toast } from 'mint-ui';
  import axios from 'axios'
  export default {
    //引用app.vue中声明的方法，在需要挂载的方法中引用
    inject:["reload"],
    data(){
      return{
        tid:"",
        title:"",
        artical:"",
        publisher:"",
        publishTime:"",
        HeadTitle:"你问我答",
        cid:"",
        Comment:"",
        commentList:[],
        userName:localStorage.getItem("userName"),
        collect:false,
        collectId:"",
        cidList:[],
      }
    },
    computed:{
      TopicTitle(){
        return this.title.replace(/\"/g,"");
      },
      TopicArtical(){
        return this.artical.replace(/\"/g,"");
      },
      PublishTime(){
        return this.changeToDay(this.publishTime.valueOf());
      }
    },
    created(){
      this.initCollect();
    },
    mounted(){
      this.getTopictid();
      this.getComment();
    },
    methods: {
      //从帖子页面获取帖子的tid
      getTopictid() {
        let self = this;
        self.tid = self.$route.query.Tid;
        self.title = self.$route.query.Title;
        self.artical = self.$route.query.Artical;
        self.publisher = self.$route.query.Publisher;
        self.publishTime = self.$route.query.PublishTime;
        // console.log( self.publishTime)
      },
      //根据帖子id获取对应的帖子的评论
      getComment() {
        let self = this;
        axios.post('/api/user/checkComment').then((response) => {
          // console.log(JSON.stringify(commentponse.data.cid) );
          response.data.forEach((item, index) => {
            if (parseInt(self.tid) === item.tid) {
              // console.log(item);
              //将循环判断得到的评论插入数组中
              self.commentList.push(item);
              self.cidList.push(item.cid);
            }
          })
          console.log(self.commentList);
        }).catch((err) => {
          console.log(err);
        });

      },
      //发布评论
      addComment() {
        let self = this;
        if(localStorage.getItem("userName") == null){
          Toast({
            message: '请登录后再进行评论！即将为您跳转到登录页！',
            position: 'middle',
            duration: 5000
          });
          setTimeout(function () {
            self.$router.push("/login");
          },3000)
        }
        else if(this.Comment.length == 0) {
          alert("请输入内容");
        } else {
          axios.post('/api/user/addComment', {
            Comment: this.Comment,
            tid:this.tid,
            Reviewer: this.userName,
          }).then((response) => {
            console.log(response);
            if (response.status == 200) {
              // alert("发布成功");
              //引用app.vue中声明的刷新页面方法
              Toast({
                message: '评论成功',
                position: 'bottom',
                duration: 3000
              });
              this.reload();
            }
          }).catch((err) => {
            console.log(err);
          });
        }
      },

      //将时间转换成YY-MM-DD  hh:mm:ss格式
      changeToDate(time) {
        var date = new Date(time);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate())+ ' ';
        var h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours() ) + ':';
        var m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes() )+ ':';
        var s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds() );
        return Y+M+D+h+m+s;
      },
      changeToDay(time){
        var date = new Date(time);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate())+ ' ';
        return Y+M+D;
      },

      //倒序查看
      reversecom(){
        return this.commentList.reverse();
      },

      changeCollect() {
        let self = this;
        if(localStorage.getItem("userName") == null){
          Toast({
            message: '请登录后再进行收藏！即将为您跳转到登录页！',
            position: 'middle',
            duration: 5000
          });
          setTimeout(function () {
            self.$router.push("/login");
          },3000)
        }
        else{
          this.collect = !this.collect;
        }
      },

      //查询是否收藏，若已收藏，图标变亮
      initCollect(){
        axios.post('/api/user/checkCollection').then((response)=>{
          response.data.forEach((item,index)=>{
            if(this.userName == item.Collector && this.tid == item.tid){
              this.collect = true;
              this.collectId = item.collect_id;
            }
            else {
              this.collect = false;
            }
          })
        })
      },
      addCollect(){
          axios.post('/api/user/addCollection', {
            tid:this.tid,
            Title:JSON.parse(this.title),
            Collector:localStorage.getItem("userName"),
          }).then((response) => {
            console.log(response);
            if (response.status == 200) {
              Toast({
                message: '已收藏',
                duration: 1500
              });
            }
          }).catch((err) => {
            console.log(err);
          });
      },

      delCollection(){
        // console.log(this.comlist[index].coid)
        axios.post('/api/user/delCollection',{
          collect_id:this.collectId,
        }).then((response) => {
          console.log(response);
          if (response.status == 200) {
            Toast({
              message: '已取消',
              duration: 1500
            });
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    }
  }
</script>


<style scoped>
  .detail{
    position: relative;
    width: 100%;
    height: 30rem;
    margin-top: -.55rem;
  }
  header{
    height: 3.2rem;
    width: 100%;
    font-size: 2rem;
    background: #34A2DA;
  }
  header .iconfont{
    font-size: 1.8rem;
  }
  .Message{
    height: 34rem;
    overflow-y: scroll;
  }
  .TopicMessage{
    width: 100%;
    height: auto;
    background: #ffffff;
    font-size: 1.3rem;
    line-height: 2.8rem;
    text-align: left;
  }
  .Title{
    margin-left: .6rem;
  }
  .TopicUser{
    height: 5rem;
  }
  .TopicUser .userimage{
    float: left;
    width: 21%;
  }
  .userimage i{
    width: 4rem;
    height: 4rem;
    text-align: center;
    border:1px solid #000;
    margin-left: .5rem;
    line-height: 4rem;
    font-size: 3rem;
  }
  .TopicUser .other{
    float: right;
    width: 78%;
    height: 4.2rem;
    margin-left: .2rem;
    line-height: 2rem;
    /*background: blue;*/
  }
  .other span{
    margin-left: .5rem;
    font-size: 1.4rem;
  }
  .other span:nth-child(3){
    font-size: .8rem;
  }
  .Artical{
    margin-left: .6rem;
  }

  .Operation{
    height: 1.4rem;
    line-height: 1.4rem;
    font-size: 1rem;
    background: whitesmoke;
  }
  .allComment{
    float: left;
    margin-left: 1rem;
  }
  .reverseCom{
    float: right;
    margin-right: 1.2rem;
  }
  .reverseCom .iconfont{
    font-size: 1rem;
  }

  .Reviewer{
    text-align: left;
    margin-left: .5rem;
    margin-top: .4rem;
  }
  .Reviewer i{
    width: 1.6rem;
    height: 1.6rem;
    text-align: center;
    border:1px solid #000;
    border-radius: 50%;
    margin-left: .5rem;
    line-height: 1.6rem;
    font-size: 1.4rem;
  }
  .Reviewer span{
    font-size: 1.2rem;
  }
  .Content{
    font-size: 1.6rem;
    text-align: left;
    padding-left: 2rem;
    height: auto;
  }
  .CommentTime{
    font-size: .8rem;
    text-align: right;
    margin-right: .4rem;
  }
  .addcom{
    width: 100%;
    position: absolute;
    bottom:-6.84rem;
  }
  .commentList{
    margin-top: .2rem;
    width: 100%;
    /*height: 20.7rem;*/
    height: auto;
    background: rgba(244,244,244,0.6);
  }
  .nocom{
    width: 100%;
    height: 22rem;
    line-height: 20rem;
    text-align: center;
    color: red;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .comment{
    height: auto;
    line-height: 2rem;
    background: #ffffff;
    color: black;
    margin-top: .4rem;
    border: 1px solid #DCDFE6;
  }
  .collect{
    margin-top: -.5rem;
    margin-right: 1rem;
  }
  .icon {
    width: 1.5rem; height: 1.5rem;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

</style>
