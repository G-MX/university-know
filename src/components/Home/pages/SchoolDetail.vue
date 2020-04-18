<template>
  <div>
    <!-- 头部  -->
    <div class="header">
      <mt-header fixed :title="HeadTitle">
        <router-link to="" slot="left">
          <span class="iconfont" @click="goback()">&#xe6db;</span>
        </router-link>
      </mt-header>
    </div>

    <div class="SchoolContent animated flipInY">
      <p>基本信息：</p>
      <div>
        <div class="Basic">
          <div>
            <span>所属城市：</span>
            <span>{{Location.replace(/\"/g,"")}}</span>
          </div>
          <div>
            <span>创办时间：</span>
              <span>{{StartTime.replace(/\"/g,"")}}</span>
          </div>
          <div>
            <span>学校类别：</span>
            <span>{{Category.replace(/\"/g,"")}}</span>
          </div>
          <div>
            <span> 学校类型：</span>
            <span>{{School_type.replace(/\"/g,"")}}</span>
          </div>
          <div>
            <span> 主管部门：</span>
            <span>{{Department.replace(/\"/g,"")}}</span>
          </div>
          <div>
            <span>院系设置：</span>
            <span>{{College.replace(/\"/g,"")}}</span>
          </div>
          <div>
            <span>学校校训：</span>
            <span>{{SchoolMotto.replace(/\"/g,"")}}</span>
          </div>
          <div>
            <span>学校编码：</span>
            <span>{{SchoolId.replace(/\"/g,"")}}</span>
          </div>
        </div>
      </div>

      <div class="otherMsg">
        <p>师资力量：</p>
        <div>
          &nbsp;&nbsp;{{Resources.replace(/\"/g,"")}}
        </div>
        <p>学校介绍：</p>
        <div>
          &nbsp;&nbsp;{{Introduce.replace(/\"/g,"")}}
        </div>
      </div>
    </div>


  </div>
</template>


<script>
  import axios from "axios"
  export default {
    data(){
      return{
        SchoolList:[],
        School:"",
        SchoolId:"",
        Department:"",
        Location:"",
        School_type:"",
        Introduce:"",
        City_id:"",
        School_id:"",
        SchoolMotto:"",
        Resources:"",
        Category:"",
        College:"",
        StartTime:""
      }
    },
    mounted() {
      this.getSchool();
      this.getSchoolId();
    },
    computed:{
      HeadTitle(){
        return this.School.replace(/\"/g,"")
      }
    },
    methods:{
      getSchool(){
        let self = this;
        axios.get("data/School.json").then((response)=>{
          console.log(response.data.schooldata[self.City_id].schoolList[self.School_id]);
          //City_id       JSON文件中schooldata的数组下标
          //School_id     JSON文件中schoolList的数组下标
          this.Schoollist = response.data.schooldata[self.City_id].schoolList[self.School_id];
          this.School = JSON.stringify(this.Schoollist.School);
          this.SchoolId = JSON.stringify(this.Schoollist.School_id);
          this.Department = JSON.stringify(this.Schoollist.department);
          this.Location = JSON.stringify(this.Schoollist.location);
          this.School_type = JSON.stringify(this.Schoollist.school_type);
          this.Introduce = JSON.stringify(this.Schoollist.introduce);
          this.SchoolMotto = JSON.stringify(this.Schoollist.school_motto);
          this.Resources = JSON.stringify(this.Schoollist.teacher_resources);
          this.Category = JSON.stringify(this.Schoollist.school_category);
          this.College = JSON.stringify(this.Schoollist.school_college);
          this.StartTime = JSON.stringify(this.Schoollist.Start_time);

          console.log(self.SchoolList)
        })
      },
      getSchoolId(){
        let self = this;
        self.City_id = self.$route.query.city_id;
        self.School_id = self.$route.query.school_id;
        // console.log(typeof (self.City_id) )
      },
      goback(){
        this.$router.go(-1);
      }
    }
  }
</script>


<style scoped>
  header{
    height: 3.2rem;
    width: 100%;
    font-size: 1.5rem;
    background: #34A2DA;
  }
  header .iconfont{
    font-size: 1.8rem;
  }
  header /deep/ .mint-header-title{
    overflow: visible;
  }
  .SchoolContent{
    height: auto;
    background: #ffffff;
    text-align: left;
    padding-left: 1rem;
    font-size: .8rem;
    line-height: 2rem;
    margin-top: -.5rem;
  }
  .SchoolContent p{
    padding-top: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .Basic{
    float: left;
    padding-left: .5rem;
    font-weight: bold;
    color: #C0C4CC;
  }
  .Basic span:nth-child(2){
    padding-left: .1rem;
    font-size: .8rem;
    color: #606266;
  }
  .Basic div{
    border-bottom: 1px dashed #E4E7ED;
    line-height: 2.5rem;
  }
  .otherMsg{
    margin-top: 21.5rem;
    color: #606266;
    width: 97%;

  }
  .otherMsg p{
    padding-top: 0;
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .otherMsg p:nth-child(3){
    padding-top: 1rem;
  }
  .otherMsg div{
    padding-left: .5rem;
    line-height: 2rem;
    color: #606266;
    border-bottom: 1px dashed #E4E7ED;
  }
</style>
