<template>
  <div class="Hot">
    <span class="iconfont">&#xe646;
      <i>热门帖子</i>
    </span>
    <div class="HotTopic" v-for="(topic,index) in HotTopicList" :key="topic.tid" @click="onclick(index)">
      <div class="Publisher">
        <i class="el-icon-s-custom"></i>
        {{topic.Publisher}}
      </div>
      <i>{{topic.Title}}</i>
  </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data(){
      return{
        HotTopicList:[],
      }
    },
    mounted(){
      this.getHotTopic();
    },
    methods:{
      getHotTopic(){
        axios.post('/api/user/checkHotTopic').then((response)=>{
          this.HotTopicList = response.data;     //response.data是查询返回的结果
          console.log(this.HotTopicList);
        }).catch((err)=>{
          console.log(err);
        });
      },
      //获取帖子在数据库中的tid并将tid传到详情页中
      onclick(index){
        let self = this;
        self.Tid = JSON.stringify(this.HotTopicList[index].tid);
        self.Title = JSON.stringify(this.HotTopicList[index].Title);
        self.Artical = JSON.stringify(this.HotTopicList[index].Artical);
        self.Publisher = this.HotTopicList[index].Publisher;
        self.PublishTime = this.HotTopicList[index].createtime;
        // alert( self.Tid );
<<<<<<< HEAD
        self.$router.push( {path:'TopicDetail',query:{Tid:self.Tid,Title:self.Title,Artical:self.Artical,Publisher:self.Publisher,PublishTime:self.PublishTime} } );
=======
        self.$router.push( {path:'HotTopicDetail',query:{Tid:self.Tid,Title:self.Title,Artical:self.Artical,Publisher:self.Publisher,PublishTime:self.PublishTime} } );
>>>>>>> 71c01e52a03e92ca0d8c03ed708b614f6d640bd1
      },
    }
  }
</script>

<style scoped>
  .Hot{
    position: relative;
    margin-top: .4rem;
  }
  .Hot span{
    position: relative;
    top:0;
    left: -8.4rem;
    font-size: .8rem;
  }
  .Hot .iconfont{
    font-size: 1rem;
    color: red;
  }
  .HotTopic{
    width: 99.5%;
    height: 6.5rem;
    line-height: 5rem;
    background: #ffffff;
    color: black;
    border: 1px solid #DCDFE6;
    margin-top: .5rem;
  }
  .Publisher{
    width: 100%;
    height: 1.5rem;
    line-height: 3rem;
    margin-left: -7rem;
    font-size: 1.2rem;
  }
  .el-icon-s-custom{
    width: 1.6rem;
    height: 1.6rem;
    font-size: 1.4rem;
    border: 1px solid #000;
    border-radius: 50%;
    margin-right: .2rem;
  }
</style>
