<template>
  <div class="Home">
    <HomeHeader></HomeHeader>
    <swiper></swiper>
    <choose></choose>
    <hotTopic></hotTopic>
    <Footer></Footer>
  </div>
</template>

<script>
  import HomeHeader from  '@/components/Home/pages/Header';
  import Swiper from  '@/components/Home/Swiper';
  import Choose from  '@/components/Home/Choose';
  import HotTopic from  '@/components/Home/HotTopic';
  import Footer from  '@/components/Footer';
  export default {
    components:{ HomeHeader,Swiper,Choose,HotTopic,Footer }
  }
</script>

<style scoped>
  .Home{
    height: 33.3rem;
    overflow-y: scroll;
    margin-top: -.55rem;
  }
</style>
