<template>
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
      <el-input placeholder="请输入城市" v-model="CitySearch" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="searchCity">搜索</el-button>
      </el-input>
    </div>
    <!-- 列表 -->
    <div>
      <ul>
        <li v-for="(city,index) in CityList"  class="school" @click="onclick(index)">
          {{city}}
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
        CitySearch:"",
        CityList:[],
        HeadTitle:"选择城市",
        searchlist:[],
        listSearch:[],
      }
    },
    mounted() {
      this.getCity();
    },
    methods:{
      getCity(){
        let self = this;
        axios.get("data/School.json").then((response)=>{
          console.log(response.data.schooldata);
          response.data.schooldata.forEach((item,index)=>{
            self.CityList.push(item.Province);
            this.listSearch.push(item.Province);
          })
        })
      },
      searchCity() {
        this.CityList = this.listSearch.filter((text) => {
          return text.match(this.CitySearch);
        })
      },
      onclick(index){
        let self = this;
        self.city_id= index;
        // alert(self.city_id);
        self.$router.push( {path:'school',query:{city_id:self.city_id} } );
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
    background: #ffffff;
    border: 1px solid #DCDFE6;
    font-size: .9rem;
    float: left;
    margin-left: .15rem;
    margin-top: .2rem;
  }
</style>
