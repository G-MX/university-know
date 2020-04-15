<template>
  <div class="header">
    <mt-header fixed :title="Title"></mt-header>
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
  }
</style>
