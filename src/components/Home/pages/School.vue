<template>
  <div>
    <!-- 头部  -->
    <div class="header">
      <mt-header fixed :title="HeadTitle">
        <router-link to="/city" slot="left">
          <span class="iconfont">&#xe6db;</span>
        </router-link>
      </mt-header>
    </div>

    <!--  搜索框  -->
    <div>
      <el-input placeholder="请输入学校" v-model="SchoolSearch" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="searchSchool">搜索</el-button>
      </el-input>
    </div>

    <div class="animated flipInY" >
      <ul>
        <li v-for="(school,index) in SchoolList" class="school" @click="onclick(index)">
          {{school}}
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
        SchoolList:[],
        City_id:"",
        HeadTitle:"选择学校",
        SchoolSearch:"",
        searchlist:[],
        Searchschool:[],
      }
    },
    mounted() {
      this.getSchool();
      this.getCityId();
    },
    methods:{
      getSchool(){
        let self = this;
        axios.get("data/School.json").then((response)=>{
          console.log(response.data.schooldata[0].schoolList);
          self.schoollist = response.data.schooldata[self.City_id].schoolList;
          self.schoollist.forEach((item,index)=>{
            console.log(item);
            self.SchoolList.push(item.School);
            self.Searchschool.push(item.School);
          })
          // response.data.schooldata.forEach((item,index)=>{
          //   self.SchoolList.push(item.schoolList);
          //   // console.log( typeof (item.id))
          //   // console.log(self.SchoolList.id)
          // })
        })
      },

      onclick(index){
        // console.log(this.SchoolList[index].id);
        let self = this;
        self.school_id= index;
        self.$router.push( {path:'schooldetail',query:{school_id:self.school_id,city_id:self.City_id} } );
      },
      searchSchool() {
        this.SchoolList = this.Searchschool.filter((text) => {
          return text.match(this.SchoolSearch);
        })
      },

      getCityId(){
        let self = this;
        self.City_id = self.$route.query.city_id;
        // console.log(typeof (self.City_id) )
      }
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
  .school{
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
