<template>
  <div>
    <!--  搜索栏  -->
    <div class="SearchBox">
      <el-input type="text" v-model="Search" placeholder="请输入您需要查询的内容">
        <el-button slot="append" icon="el-icon-search"@click="searchTopic">搜索</el-button>
      </el-input>
    </div>
    <!--  将得到的结果循环遍历到页面上  -->
    <div class="TopicBox animated bounceInRight">
    <div class="Topic" v-for="(topic,index) in reverseTopicList" :key="topic.tid" @click="onclick(index)">
      <div class="Publisher">
        <i class="el-icon-s-custom"></i>
        {{topic.Publisher}}
      </div>
      <i>{{topic.Title}}</i>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data(){
      return{
        Content:[],     //将查询结果放到此列表中
        TopicTitle:[],
        TopicSearch:[],
        Search:"",
      }
    },
    //生命周期，在页面加载之前先将数据渲染到页面
    mounted(){
      this.getTopic();
    },
    computed:{
      reverseTopicList(){
        return this.Content.reverse();
      }
    },
    methods:{
      //调用后端查询数据表接口
      getTopic(){
        let self = this;
        axios.post('/api/user/checkTopic').then((response)=>{
          // this.Content = response.data;
          // this.TopicSearch = response.data;
          response.data.forEach((item,index)=>{
            self.Content.push(item);
            this.TopicSearch.push(item);
          })
          // console.log(this.Content,"------",this.TopicSearch)
        }).catch((err)=>{
          console.log(err);
        });
      },
      //获取帖子在数据库中的tid并将tid传到详情页中
      onclick(index){
        let self = this;
        self.Tid = JSON.stringify(this.Content[index].tid);
        self.Title = JSON.stringify(this.Content[index].Title);
        self.Artical = JSON.stringify(this.Content[index].Artical);
        self.Publisher = this.Content[index].Publisher;
        self.PublishTime = this.Content[index].createtime;
        // alert( self.Tid );
        self.$router.push( {path:'TopicDetail',query:{Tid:self.Tid,Title:self.Title,Artical:self.Artical,Publisher:self.Publisher,PublishTime:self.PublishTime} } );
      },
      //搜索
      searchTopic() {
        var search = this.Search;
        if (search){
          this.Content = this.TopicSearch.filter( (val)=> {
            // console.log(val);
            return Object.keys(val).some((key)=>{
              // console.log(key);
              return (String(val[key]).indexOf(search) > -1);
            })
          })
          console.log(this.Content);
        }
      },
    }
  }
</script>

<style scoped>
  .SearchBox{
    border-bottom: 1px solid #ccc;
    z-index: 9999;
  }
  .TopicBox{
    height: 30.8rem;
    margin-top: -.12rem;
    overflow-y: scroll;
    z-index: 50;
  }
  .Topic{
    width: 99.5%;
    height: 8rem;
    line-height: 7rem;
    background: #ffffff;
    color: black;
    font-size: 1.2rem;
    border: 1px solid #DCDFE6;
    margin-top: .5rem;
    z-index: 5;
  }
  .Publisher{
    width: 100%;
    height: 1.5rem;
    line-height: 3rem;
    margin-left: -7rem;
    font-size: 1.4rem;
  }
  .el-icon-s-custom{
    width: 2rem;
    height: 2rem;
    font-size: 1.6rem;
    border: 1px solid #000;
    border-radius: 50%;
    margin-right: .2rem;
  }
</style>
