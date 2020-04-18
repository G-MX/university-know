<template>
  <div>
    <!-- 头部  -->
    <div class="header">
      <mt-header fixed :title="HeadTitle">
        <router-link to="/topic" slot="left">
          <span class="iconfont">&#xe6db;</span>
        </router-link>
      </mt-header>
    </div>

    <div class="summit">
      <el-input placeholder="请输入标题" v-model="Title" clearable ></el-input>
      <br><br>
      <el-input type="textarea" v-model="Artical" placeholder="请输入发布帖子内容"></el-input>
      <br><br>
      <el-button type="info" plain @click="addTopic">发布</el-button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { MessageBox } from 'mint-ui';
  export default {
    data(){
      return{
        Title:'',
        Artical:"",
        userName:localStorage.getItem("userName"),
        HeadTitle:"发布主题"
      }
    },
    methods:{
      addTopic(){
        if(this.Title.length == 0 || this.Artical.length == 0){
          alert("请输入内容");
        }else{
          axios.post('/api/user/addTopic',{
            Title:this.Title,
            Artical:this.Artical,
            Publisher:this.userName,
          }).then((response)=>{
            console.log(response);
            if (response.status == 200){
              MessageBox.alert("发布成功");
              this.$router.go(-1);
            }
          }).catch((err)=>{
            console.log(err);
          });

        }

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
  .summit{
    width: 100%;
    height: 20rem;
  }
  /deep/ .el-input{
    width: 20rem;
  }
  /deep/ .el-textarea {
    width: 20rem;
  }
  /deep/ .el-textarea textarea{
    height: 10rem;
  }
</style>
