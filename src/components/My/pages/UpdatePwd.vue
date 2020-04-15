<template>
  <div>
    <form action="http://localhost:8080" method="post">
      <el-input label="输入密码" placeholder="请输入旧密码" type="password" v-model="OlduserPwd"></el-input>
      <el-input label="输入密码" placeholder="请输入新密码" type="password" v-model="NewuserPwd"></el-input>
      <el-input label="输入密码" placeholder="请确认新密码" type="password" v-model="NewuserRePwd"></el-input>
      <el-button type="primary" @click="updatePwd">提交</el-button>
    </form>
  </div>
</template>


<script>
  import axios from "axios"
  export default {
    data(){
      return{
        OlduserPwd:localStorage.getItem("userPwd"), //旧密码
        NewuserPwd:"",                              //新密码
        NewuserRePwd:"",                            //确认新密码
        userName:localStorage.getItem("userName"),
      }
    },
    methods:{
      updatePwd(){
        // console.log(this.userName,this.OlduserPwd);
        axios.post("/api/user/UpdatePwd",{
          userName:this.userName,
          userPwd:this.NewuserPwd,
        }).then((response)=>{
          console.log(response);
          if (response.status == 200) {
            alert("修改成功");
          }
        }).catch((err)=>{
          console.log(err);
        })
      }
    }
  }
</script>
