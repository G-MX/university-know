<template>
  <div class="MyTopicContent">
    <!-- 头部  -->
    <div class="header">
      <mt-header fixed :title="HeadTitle">
        <router-link to="/my" slot="left">
          <span class="iconfont">&#xe6db;</span>
        </router-link>
      </mt-header>
    </div>

      <div v-for="(Tit,index) in MyTopicList" :key="Tit.tid" class="MyTopic">
        <div class="Publisher">
          <i class="el-icon-s-custom"></i>
          {{Tit.Publisher}}
        </div>
        {{Tit.Title}}
        <p @click="delMyTopic(index)">删除</p>
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
        MyTopicList:[],
        userName:localStorage.getItem("userName"),
        HeadTitle: "我的发帖"
      }
    },
    mounted(){
      this.getMyTopic();
    },
    methods:{
      getMyTopic(){
        let self =this;
        axios.post("api/user/checkMyTopic").then((response)=>{
          // console.log(response);
          response.data.forEach((item,index)=> {
            // console.log(item);
            if (self.userName == item.Publisher) {
              self.MyTopicList.push(item);
              // console.log(self.MyTopicList);
            }
          })
        }).catch((err)=>{
          console.log(err);
        })
      },

      //我的发帖页面删除我的主题
      delMyTopic(index){
        // console.log(this.comlist[index].coid)
        axios.post('/api/user/delMyTopic',{
          tid:JSON.stringify(this.MyTopicList[index].tid),
        }).then((response) => {
          console.log(response);
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
  .MyTopicContent{
    height: auto;
    margin-top: -.5rem;
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
  .MyTopic{
    width: 97%;
    height: 6.5rem;
    line-height: 5.5rem;
    background: #ffffff;
    color: black;
    position: relative;
    margin-top: .7rem;
    border-radius: 2%;
    border: 1px solid #DCDFE6;
    margin-left: .28rem;
  }
  .MyTopic p{
    color: #606266;
    font-size: .8rem;
    position: absolute;
    bottom: 2rem;
    right: .5rem;
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
