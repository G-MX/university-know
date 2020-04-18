<template>
  <!-- 选择专业 -->
  <div>
    <!-- 头部  -->
    <div class="header">
      <mt-header fixed :title="HeadTitle">
        <router-link to="/" slot="left">
          <span class="iconfont">&#xe6db;</span>
        </router-link>
      </mt-header>
    </div>
    <!--  搜索框  -->
    <div>
      <el-input placeholder="请输入专业名称" v-model="MajorSearch" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="searchMajor">搜索</el-button>
      </el-input>
    </div>

    <div class="animated flipInY">
      <ul>
        <li v-for="(major,index) in MajorList"  class="Major" @click="onclick(index)">
          {{major}}
        </li>
      </ul>

    </div>


  </div>
</template>


<script>
  import axios from "axios"
  export default {
    data(){
      return{
        MajorList:[],
        City_id:"",
        HeadTitle:"选择专业",
        MajorSearch:"",
        Searchmajor:[]
      }
    },
    mounted() {
      this.getMajor();
    },
    methods:{
      getMajor(){
        let self = this;
        axios.get("data/Major.json").then((response)=>{
          console.log(response.data);
          response.data.data.forEach((item,index)=>{
            console.log(item.major);
            self.MajorList.push(item.major);
            self.Searchmajor.push(item.major);
          })
          // response.data.schooldata.forEach((item,index)=>{
          //   self.SchoolList.push(item.schoolList);
          //   // console.log( typeof (item.id))
          //   // console.log(self.SchoolList.id)
          // })
        })
      },

      onclick(index){
        // console.log(this.MajorList[index]);
        let self = this;
        // alert(index);
        self.major_id= index;
        self.$router.push( {path:'majordetail',query:{major_id:self.major_id} } );
      },
      searchMajor() {
        this.MajorList = this.Searchmajor.filter((text) => {
          return text.match(this.MajorSearch);
        })
      },

    }
  }
</script>


<style scoped>
  header{
    height: 3.2rem;
    width: 100%;
    font-size: 2rem;
    background: #34A2DA;
  }
  header .iconfont{
    font-size: 1.8rem;
  }
  .Major{
    width: 10.9rem;
    height: 4rem;
    line-height: 4rem;
    background: #fff;
    border: 1px solid #E4E7ED;
    font-size: .9rem;
    float: left;
    margin-left: .15rem;
    margin-top: .2rem;
  }
</style>
