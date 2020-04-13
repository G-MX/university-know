<template>
  <div>
    <!--  头部  -->
    <div class="header">
    <mt-header fixed :title="HeadTitle">
      <router-link to="/my" slot="left">
        <span class="iconfont" @click="goback">&#xe6db;</span>
      </router-link>
    </mt-header>
  </div>
    <!--  修改密码  -->
    <div class="updatePwd">
      <router-link to="updatePwd">
        <span class="iconfont">&#xe629;</span>
        <i>修改密码</i>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        HeadTitle: "设置",
      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
      }
    },
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
  header .iconfont{
    font-size: 1.8rem;
    position: absolute;
    bottom: .3rem;
    left: .5rem;
  }
  .updatePwd{
    width: 100%;
    height: 4rem;
    background: #E4E7ED;
    line-height: 4rem;
    margin-top: .8rem;
    font-size: 1.4rem;
    position: relative;
    color: black;
  }
  .updatePwd i{
    position: absolute;
    left: 3.6rem;
  }
  .updatePwd .iconfont{
    font-size: 1.6rem;
    position: absolute;
    left: 1.8rem;
  }
</style>
