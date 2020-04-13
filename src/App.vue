<template>
  <div id="app">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return{reload:this.reload,}
  },
  data(){
    return{isRouterAlive:true,}
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(()=>{
        this.isRouterAlive = true;
      })
    }
  },
}
</script>

<style>
html{
  text-align: center;
  background: rgba(244,244,244,0.6);
  overflow-y: scroll;
  margin-top: 3.7rem;
}
</style>
