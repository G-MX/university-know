<template>
  <div>
    <div class="information">
      <div class="img">
        <img src="../../assets/images/user.jpg">
      </div>
      <span>这个人很懒，什么介绍都没有</span>
      <span>{{userName}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        userName:localStorage.getItem("userName")
      }
    }
  }
</script>

<style scoped>
  .information{
    width: 100%;
    height: 6rem;
    background: #E4E7ED;
    margin-top: -.55rem;
  }
  .img{
    width: 6rem;
    height: 6rem;
    position: absolute;
    left: 1.5rem;
  }
  .img img{
    width: 5.5rem;
    height: 5.5rem;
    /*border: 1px solid ;*/
    border-radius: 50%;
    margin-top: .2rem;
  }
  .information span{
    /*background: cadetblue;*/
    font-size: 1.2rem;
    position: absolute;
    left: 8.5rem;
    top: 4.2rem;
  }
  .information span:nth-last-child(2){
    font-size: 1rem;
    opacity: .4;
    position: absolute;
    left: 8.5rem;
    top: 6.4rem;
  }
</style>
