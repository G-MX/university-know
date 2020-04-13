<template>
  <!--  发帖按钮  -->
  <div class="addbutton">
    <el-row>
      <el-button type="primary" icon="el-icon-plus" circle @click="jumptoAddTopic"></el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods:{
      //发帖
      jumptoAddTopic(){
        this.$router.push({name:"AddTopic"});
      }
    }
  }
</script>

<style scoped>
  .addbutton /deep/ .el-button {
    z-index: 10;
    width: 3rem;
    height: 3rem;
    position: absolute;
    right: .5rem;
    bottom: 2.5rem;
    background: #909399;
    color: #fff;
    opacity: .5;
  }
  /deep/ .el-icon-plus{
    font-size: 1.4rem;
  }
</style>
