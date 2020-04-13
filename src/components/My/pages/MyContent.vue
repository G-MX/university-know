<template>
  <div>
    <!--  我的帖子  -->
    <div class="MyBlog">
      <router-link to="mytopic">
        <span class="iconfont">&#xe666;</span>
        <i>我的帖子</i>
        <span class="iconfont">&#xe679;</span>
      </router-link>
    </div>
    <!--  我的评论  -->
    <div class="MyComment">
      <router-link to="MyComment">
        <span class="iconfont">&#xe641;</span>
        <i>我的评论</i>
        <span class="iconfont">&#xe679;</span>
      </router-link>
    </div>
    <!--  收藏夹  -->
    <div class="Collection">
      <router-link to="/mycollection">
        <span class="iconfont">&#xe600;</span>
        <i>查看收藏</i>
        <span class="iconfont">&#xe679;</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  /*收藏*/
  .Collection{
    width: 100%;
    height: 4rem;
    background: #E4E7ED;
    line-height: 4rem;
    margin-top: 1.2rem;
    font-size: 1.2rem;
    position: relative;
    color: black;
  }
  .Collection i{
    position: absolute;
    left: 3.8rem;
  }
  .Collection .iconfont{
    font-size: 1rem;
    position: absolute;
    right: .8rem;
  }
  .Collection span:nth-last-child(3){
    font-size: 1.4rem;
    position: absolute;
    left: -18rem;
  }

  /*评论*/
  .MyComment{
    width: 100%;
    height: 4rem;
    background: #E4E7ED;
    line-height: 4rem;
    margin-top: 1.2rem;
    font-size: 1.2rem;
    position: relative;
    color: black;



  }
  .MyComment i{
    position: absolute;
    left: 3.8rem;
  }
  .MyComment .iconfont{
    font-size: 1rem;
    position: absolute;
    right: .8rem;
  }
  .MyComment span:nth-last-child(3){
    font-size: 1.4rem;
    position: absolute;
    left: -18rem;
  }

  /*发布*/
  .MyBlog{
    width: 100%;
    height: 4rem;
    background: #E4E7ED;
    line-height: 4rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    position: relative;
    color: black;
  }
  .MyBlog i{
    position: absolute;
    left: 3.8rem;
  }
  .MyBlog .iconfont{
    font-size: 1rem;
    position: absolute;
    right: .8rem;
  }
  .MyBlog span:nth-last-child(3){
    font-size: 1.4rem;
    position: absolute;
    left: -18rem;
  }
</style>
