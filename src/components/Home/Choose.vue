<template>
  <div class="choose">
    <div class="information">
      <span class="iconfont">&#xe61a;
      <i>信息了解</i>
    </span>
    </div>

    <div class="top">
      <!-- 高校 -->
      <div class="t_left">
        <router-link to="/city" >
          <div>
            <span class="iconfont">&#xe65c;</span>
            <span>高校信息</span>
          </div>
        </router-link>
      </div>

      <!-- 专业  -->
      <div class="t_right">
        <router-link to="/major">
          <div>
            <span class="iconfont">&#xe601;</span>
            <span>大学专业</span>
          </div>
        </router-link>
      </div>

    </div>

  </div>
</template>


<style scoped>
  .choose{
    position: relative;
  }
  .information{
    position: absolute;
    left:0.2rem;
    top: -1.5rem;
  }
  .information .iconfont{
    font-size: 1rem;
    color: red;
  }
  .top{
    margin-top: -.4rem;
    width: 100%;
    height: 5rem;
    font-size: 1.6rem;
    display: flex;
    color:#000;
  }
  .iconfont{
    color:#000;
    font-size: 2rem;
  }
  .t_left{
    width: 48%;
    float: left;
    text-align: center;
    line-height: 5rem;
    border: 1px solid #DCDFE6;
    background: #fff;
    border-radius: 4%;
    margin-left: .2rem;
    margin-right: .25rem;
  }
  .t_right{
    width: 48%;
    float: right;
    line-height: 5rem;
    border: 1px solid #DCDFE6;
    background: #fff;
    text-align: center;
    border-radius: 4%;
  }
</style>
