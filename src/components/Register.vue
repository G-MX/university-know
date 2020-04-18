<template>
  <div>
    <div class="header">
      <mt-header fixed :title="Title">
        <router-link to="/login" slot="left">
          <span class="iconfont">&#xe6db;</span>
        </router-link>
      </mt-header>
    </div>

    <div class="register_form">
      <form action="http://192.168.1.178/:8080" method="post">
        <span>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</span>
        <el-input placeholder="请输入用户名" v-model="userName" clearable style="width: 15rem">
        </el-input>
        <br><br><br>
        <span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
        <el-radio v-model="radio" label="1" style="width: 6rem">男</el-radio>
        <el-radio v-model="radio" label="2" style="width: 5rem">女</el-radio>
        <br><br><br>
        <span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
        <el-input placeholder="请输入密码" v-model="userPwd" show-password style="width: 15rem">
        </el-input>
        <br><br><br>
        <span>确认密码：</span>
        <el-input placeholder="请输入密码" v-model="userRePwd" show-password style="width: 15rem">
        </el-input>
        <br><br><br>
        <el-button type="danger" @click="addUser" style="width: 18rem">注册</el-button>
      </form>

    </div><br>

    <div class="gologin">
      <h6>已有账号！ 点击这里</h6>
      <router-link to="/login">
        登录
      </router-link>
    </div>

  </div>
</template>


<script>
  import axios from 'axios';
  import { MessageBox } from 'mint-ui';
  export default {
    data(){
      return{
        Title:"注册",
        userName:"",
        userPwd:"",
        userRePwd:"",
        radio: '1'
      }
    },
    methods:{
      addUser() {
        if(this.userName =="" || this.userPwd == ""||this.userRePwd == ""){
          //alert("请输入用户名或密码");
          MessageBox.alert("请填写好完整注册信息！");
        }
        else if(this.userPwd.length < 6 ){
          MessageBox.alert("密码长度不小于6位");
        }
        else if(this.userPwd != this.userRePwd ){
          MessageBox.alert("两次输入密码不一致！");
        }
        else {
          MessageBox.confirm('用户名一经注册不可修改！<br>确定使用该用户名进行注册吗?').then(action => {
            axios.post('/api/user/addUser', {
              userName: this.userName,
              userPwd: this.userPwd,
              sex:this.radio
            }).then((response) => {
              console.log(response);
              if (response.data == -1) {
                MessageBox.alert("该用户名已被注册！");
              }
              else if (response.status == 200) {
                //MessageBox.alert("恭喜您，注册成功！");
                MessageBox.alert('恭喜您，注册成功！点击确定跳转到登录页面！')
                  .then(action => {
                  this.$router.push('/login');
                });
              }
            })
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
    position: relative;
  }
  .iconfont{
    font-size: 1.8rem;
  }
  .register_form{
    margin-top: 2rem;
  }
  .gologin a{
    color: red;
  }
</style>
