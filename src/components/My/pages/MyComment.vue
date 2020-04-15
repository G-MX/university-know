<template>
  <div>

    <!-- 头部  -->
    <div class="header">
      <mt-header fixed :title="HeadTitle">
        <router-link to="/my" slot="left">
          <span class="iconfont">&#xe6db;</span>
        </router-link>
      </mt-header>
    </div>

    <div class="MyComContent">
      <div v-for="(MyCom,index) in MyCommentList" :key="MyCom.cid" class="MyCom">
        <div class="Publisher">
          <i class="el-icon-s-custom"></i>
          {{MyCom.Publisher}}
        </div>
        <span>{{MyCom.Title}}</span>
        <div class="MyComment">{{MyCom.Comment}}</div>
        <p @click="delMyComment(index)">删除</p>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import { Toast } from 'mint-ui';
  export default {
    inject:["reload"],
    data(){
      return{
        MyCommentList:[],
        userName:localStorage.getItem("userName"),
        HeadTitle: "我的评论"
      }
    },
    mounted(){
      this.getMyComment();
    },
    methods:{
      getMyComment(){
        let self =this;
        axios.post("api/user/checkMyComment").then((response)=>{
          // console.log(JSON.stringify(response.data) );
          response.data.forEach((item,index)=> {
            if (self.userName == item.Reviewer) {
              self.MyCommentList.push(item);
              // console.log(self.MyCommentList);
            }
          })
        }).catch((err)=>{
          console.log(err);
        })
      },

      //我的发帖页面删除我的评论
      delMyComment(index){
        // console.log(this.MyCommentList[index].cid)
        axios.post('/api/user/delMyComment',{
          cid:JSON.stringify(this.MyCommentList[index].cid),
        }).then((response) => {
          // console.log(response);
          if (response.status == 200) {
            // alert("删除帖子");
            Toast({
              message: '已删除',
              duration: 2000
            });
            this.reload();
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    }
  }
</script>


<style scoped>
  header{
    height: 3.2rem;
    width: 100%;
    font-size: 2rem;
    background: #34A2DA;
  }
  header .iconfont{
    font-size: 1.8rem;
  }
  .MyComContent{
    margin-top: -.5rem;
  }
  .MyCom{
    width: 97%;
    height: 8rem;
    line-height: 3.5rem;
    background: #ffffff;
    color: black;
    font-weight: bold;
    position: relative;
    border: 1px solid #DCDFE6;
    margin-top: .6rem;
    margin-left: .28rem;
    border-radius: 2%;
    opacity: .8;
  }
  .MyCom p{
    color: #303133;
    font-size: .8rem;
    position: absolute;
    font-weight: normal;
    bottom: 2.5rem;
    right: .5rem;
  }
  .MyComment{
    width: 96%;
    height: 2.8rem;
    margin-left: .5rem;
    line-height: 2.8rem;
    background: #909399;
    color: white;
    opacity: .6;
  }
  .Publisher{
    width: 100%;
    height: 1.5rem;
    line-height: 3rem;
    margin-left: -7.5rem;
    font-size: 1.1rem;
  }
  .el-icon-s-custom{
    width: 1.6rem;
    height: 1.6rem;
    font-size: 1.4rem;
    border: 1px solid #000;
    border-radius: 50%;
    margin-right: .3rem;
  }
</style>
