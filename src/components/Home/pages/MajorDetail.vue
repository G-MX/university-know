<template>
  <!-- 选择专业然后进入详情页，了解专业信息，学习路线，就业选择等信息 -->
  <div class="bg">

    <!-- 头部  -->
    <div class="header">
      <mt-header fixed :title="HeadTitle">
        <router-link to="/major" slot="left">
          <span class="iconfont">&#xe6db;</span>
        </router-link>
      </mt-header>
    </div>

    <div class="MajorIntroduce">
      <p>专业介绍：</p>
      &nbsp;&nbsp;&nbsp;{{MajorList.introduce}}
    </div>

    <div class="Work">
      <ul>
        <p>就业方向：</p>
        <span v-for="(work,index) in MajorList.workchoice">
          <div>{{work.workRoute}}</div>
        </span>
      </ul>
    </div>

    <!--  数组，需要写循环  -->
    <div class="Choose">
      <ul>
        <p>学习课程：</p>
        <li v-for="(study,index) in MajorList.StudyChoose">
          <div class="StudyClass">{{study.choose}}</div>
          <div>参考书籍：{{study.book}}</div>
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
        Major_id:"",
      }
    },
    created() {
      this.getMajorDetail();
      this.getMajorId();
      // this.ChooseNum();
    },
    computed:{
      HeadTitle(){
        return this.MajorList.major
      },
      ChooseNum(){
        for(var i = 0;i<this.MajorList.StudyChoose.length;i++){
          console.log(i+=1);
          return (i+=1);
        }

        console.log("数组长度:"+this.MajorList.StudyChoose.length);
      }
    },
    methods:{
      getMajorDetail(){
        let self = this;
        this.axios.get("/data/Major.json").then((response)=>{
          // console.log(response.data.data[0]);
          self.MajorList = response.data.data[this.Major_id];
          // console.log(self.MajorList.StudyChoose.length)
          // response.data.school_data[0].schoolList.forEach((item,index)=>{
          //   self.SchoolList.push(item.School);
          // })
        })
      },
      getMajorId(){
        let self = this;
        self.Major_id = self.$route.query.major_id;
        // console.log(self.Major_id )
      }
    }
  }
</script>


<style scoped>
  header{
    height: 3.2rem;
    line-height: 3.2rem;
    width: 100%;
    font-size: 1.1rem;
    background: #34A2DA;
  }
  header .iconfont{
    font-size: 1.8rem;
  }
  .MajorIntroduce{
    text-align: left;
    padding-left: 1rem;
    margin-top: .4rem;
    line-height: 2rem;
    font-size: .9rem;
  }
  .MajorIntroduce p{
    font-weight: bold;
  }
  .Choose{
    margin-top: 1.6rem;
    text-align: left;
    padding-left: 1rem;
  }
  .Choose p{
    font-weight: bold;
  }
  .Choose li{
    margin-top: .5rem;
    line-height: 2rem;
    padding-bottom: .8rem;
    border-bottom: 1px dashed #E4E7ED;
  }
  .Choose li div{
    font-size: .9rem;
  }
  .Work{
    text-align: left;
    padding-left: 1rem;
    margin-top: 1.4rem;
    line-height: 2rem;
  }
  .Work p{
    font-weight: bold;
  }
  .Work span div{
    width: 40%;
    text-align: center;
    display: inline-block;
    padding-left: .8rem;
    font-size: .9rem;
    line-height: 2.5rem;
    border-bottom: 1px dashed #E4E7ED;
  }
</style>
