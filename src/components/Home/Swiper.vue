<template>
  <div class="swipe">
    <mt-swipe :auto="2000">
      <mt-swipe-item>
        <img src="./../../assets/images/2.png">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./../../assets/images/1.png">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./../../assets/images/3.jpg">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<style scoped>
  .swipe{
    width: 100%;
    margin-top: -.5rem;
  }
  .mint-swipe{
    height: 14rem;
  }
  .mint-swipe img{
    width: 100%;
  }
  /*改变轮播图小圆点样式*/
  .swipe >>> .mint-swipe-indicator {
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 100%;
    background: black;
    opacity: 0.5;
    margin: 35px 3px;
  }
  .swipe >>> .mint-swipe-indicator.is-active {
    background: red;
  }
</style>
