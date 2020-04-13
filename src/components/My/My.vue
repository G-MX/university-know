<template>
  <div>

    <MyHeader></MyHeader>

    <MyInformation></MyInformation>

    <MyContent></MyContent>

    <div class="logout">
      <router-link to="/">
        <!-- button -->
        <mt-button type="danger" size="large" @click="logout">退出</mt-button>
      </router-link>
    </div>
    <Footer></Footer>
  </div>


</template>


<script>
  import MyHeader from  '@/components/My/pages/Header';
  import MyInformation from  '@/components/My/MyInformation';
  import MyContent from  '@/components/My/pages/MyContent';
  import Footer from  '@/components/Footer';
  export default {
    name:"MY",
    components:{ MyHeader,MyInformation,MyContent,Footer },
    methods:{
      logout(){
        localStorage.removeItem("userName")
      }
    }
  }
</script>

<style scoped>
  header{
    height: 3.2rem;
    width: 100%;
    font-size: 2rem;
    background: lightblue;
  }
  header .iconfont{
    font-size: 1.8rem;
    position: absolute;
    bottom: .3rem;
    right: .5rem;
  }
  .logout{
    margin-top: 6rem;
  }
</style>
