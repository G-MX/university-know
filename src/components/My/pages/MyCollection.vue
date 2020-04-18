<template>
  <div class="CollectionView">
    <!-- 头部  -->
    <div class="header">
      <mt-header fixed :title="HeadTitle">
        <router-link to="/my" slot="left">
          <span class="iconfont">&#xe6db;</span>
        </router-link>
      </mt-header>
    </div>

    <div v-for="(collection,index) in CollectionList"
         :key="collection.collect_id"
         class="MyCollection animated flipInX">
      <div class="Collector">
        <i class="el-icon-s-custom"></i>
        {{collection.Publisher}}
      </div>
      {{collection.Title}}
      <span @click="delCollection(index)">取消收藏</span>
    </div>

  </div>
</template>


<script>
  import axios from 'axios'
  import { Toast } from 'mint-ui';
  export default {
    inject:["reload"],
    data(){
      return{
        userName:localStorage.getItem("userName"),
        CollectionList:[],
        HeadTitle: "我的收藏"
      }
    },
    mounted(){
      this.getCollection()
    },
    methods:{
      getCollection(){
        let self =this;
        axios.post('/api/user/checkCollection').then((response)=>{
          response.data.forEach((item,index)=>{
            // console.log(item.Collector);
            if(self.userName === item.Collector){
              self.CollectionList.push(item)
            }
          });
        }).catch((err)=>{
          console.log(err);
        })
      },
      //收藏页面删除
      delCollection(index){
        axios.post('/api/user/delCollection',{
          collect_id:JSON.stringify(this.CollectionList[index].collect_id),
        }).then((response) => {
          console.log(response);
          if (response.status == 200) {
            Toast({
              message: '已取消',
              duration: 2000
            });
            this.reload();
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    }
  }
</script>


<style scoped>
  .CollectionView{
    margin-top: -1rem;
    height: auto;
  }
  header{
    height: 3.2rem;
    width: 100%;
    font-size: 2rem;
    background: #34A2DA;
  }
  header .iconfont{
    font-size: 1.8rem;
  }
  .MyCollection{
    position: relative;
    width: 97%;
    line-height: 5rem;
    font-size: 1.1rem;
    background: #ffffff;
    color: black;
    margin-top: .7rem;
    border-radius: 2%;
    border: 1px solid #DCDFE6;
    margin-left: .28rem;
  }
  .MyCollection span{
    font-size: .8rem;
    color: #606266;
    position: absolute;
    right: .5rem;
    bottom: 2rem;
  }
  .Collector{
    width: 100%;
    height: 1.5rem;
    line-height: 3rem;
    margin-left: -7.5rem;
    font-size: 1.1rem;
  }
  .el-icon-s-custom{
    width: 1.6rem;
    height: 1.6rem;
    font-size: 1.4rem;
    border: 1px solid #000;
    border-radius: 50%;
    margin-right: .3rem;
  }
</style>
