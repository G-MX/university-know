<template>
  <div class="TopicDetail">
    <TopicHeader></TopicHeader>
    <TopicContent></TopicContent>
    <AddTopicButton></AddTopicButton>
    <Footer></Footer>
  </div>
</template>
<script>
  import TopicHeader from  '@/components/Topic/pages/Header';
  import TopicContent from  '@/components/Topic/pages/TopicContent';
  import AddTopicButton from  '@/components/Topic/pages/AddTopicButton';
  import Footer from  '@/components/Footer';
  export default {
    components:{ TopicHeader,TopicContent,AddTopicButton,Footer },
  }
</script>


<style scoped>
  .TopicDetail{
    position: relative;
    margin-top: -.6rem;
  }

</style>
