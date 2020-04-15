<template>
  <div class="header">
    <mt-header fixed :title="Title">
      <router-link to="/setup" slot="right">
        <span class="iconfont">&#xe6ba;</span>
      </router-link>
    </mt-header>
  </div>
</template>


<script>
  export  default {
    name:'Header',
    data(){
      return{
        Title:"大学通"
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
</style>
