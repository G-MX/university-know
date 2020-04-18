<template>
  <div>
    <div class="header">
      <mt-header fixed :title="Title">
        <router-link to="/" slot="left">
          <span class="iconfont">&#xe6db;</span>
        </router-link>
      </mt-header>
    </div>

    <div class="login">
      <form action="http://localhost:8080" method="post">
        <el-input label="用户名" placeholder="请输入用户名" v-model="userName"></el-input>
        <br><br>
        <el-input label="输入密码" placeholder="请输入密码" type="password" v-model="userPwd"></el-input>
        <br><br>
        <el-button type="primary" @click="Login">登录</el-button>
      </form>
    </div>
    <br>
    <div class="register">
      <p>若无账号，点击这里</p>
      <router-link to="/register">注册</router-link>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        Title:"登录",
        userName: "",
        userPwd: "",
        userRePwd: "",
      }
    },
    methods:{
      Login(){
        if(this.userName ==""){
          alert("请输入用户名");
        }else if (this.userPwd =="") {
          alert("请输入密码");
        }else{
          axios.post('api/user/checkUser',{
            userName: this.userName,
            userPwd: this.userPwd,
          }).then((response)=>{
            if (response.data == -1){
              alert("用户名错误");
            }else if (response.data == 0) {
              alert("输入密码错误");
              console.log(response);
            }else {
              console.log(response);
              MessageBox.alert("登录成功").
              then(action => {
                this.$router.go(-1);
              });
              // this.$router.push("/my");
              localStorage.setItem("userName",this.userName);
            }
          }).catch((err)=>{
            console.log(err);
          })
        }
      },


    }
  }
</script>

<style scoped>
  header{
    height: 3.2rem;
    width: 100%;
    font-size: 2rem;
    background: #34A2DA;
    position: relative;
  }
  .iconfont{
    font-size: 1.8rem;
  }
  .login{
    margin-top: 2rem;
  }
  .register a{
    color: red;
  }
</style>

