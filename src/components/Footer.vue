<template>
  <div class="Footer">

    <mt-tabbar v-model="selected" fixed>

      <mt-tab-item id="首页" @click.native="jumptoHome">
        <div class="iconfont">&#xe7ef;</div>
        首页
      </mt-tab-item>

      <mt-tab-item id="你问我答" @click.native="jumptoTopic">
        <div class="iconfont">&#xe622;</div>
        你问我答
      </mt-tab-item>

      <mt-tab-item id="我的" @click.native="jumptoMy">
        <div class="iconfont">&#xe61c;</div>
        我的
      </mt-tab-item>

    </mt-tabbar>

  </div>
</template>


<script>
  export default {
    name:'Footer',
    data(){
      return { selected: ''}
    },
    methods:{
      jumptoHome(){
        this.$router.push({name:"Home"});
      },
      jumptoTopic(){
        this.$router.push({name:"Topic"});
      },
      jumptoMy(){
        this.$router.push({name:"My"});
      },
    },
    watch: {
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        //console.log(val)
      }
    },
  }
</script>

<style scoped>
  .iconfont{
    font-size: 2rem;
    margin-bottom: .2rem;
  }
</style>

