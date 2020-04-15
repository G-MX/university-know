import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import City from '@/components/Home/pages/City'
import School from '@/components/Home/pages/School'
import Major from '@/components/Home/pages/Major'
import SchoolDetail from '@/components/Home/pages/SchoolDetail'
import MajorDetail from '@/components/Home/pages/MajorDetail'
import Topic from '@/components/Topic/Topic'
import AddTopic from '@/components/Topic/pages/AddTopic'
import TopicDetail from '@/components/Topic/pages/TopicDetail'
<<<<<<< HEAD
=======
import HotTopicDetail from '@/components/Home/pages/HotTopicDetail'
>>>>>>> 71c01e52a03e92ca0d8c03ed708b614f6d640bd1
import My from '@/components/My/My'
import MyCollection from '@/components/My/pages/MyCollection'
import MyComment from '@/components/My/pages/MyComment'
import MyTopic from '@/components/My/pages/MyTopic'
import SetUp from '@/components/My/pages/SetUp'
import UpdatePwd from '@/components/My/pages/UpdatePwd'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/school',
      name: 'School',
      component: School
    },
    {
      path: '/schooldetail',
      name: 'SchoolDetail',
      component: SchoolDetail
    },
    {
      path: '/majordetail',
      name: 'MajorDetail',
      component: MajorDetail
    },
    {
      path: '/major',
      name: 'Major',
      component: Major
    },
    {
      path: '/topic',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/addtopic',
      name: 'AddTopic',
      component: AddTopic,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/topicdetail',
      name: 'TopicDetail',
      component: TopicDetail
    },
    {
<<<<<<< HEAD
=======
      path: '/hottopicdetail',
      name: 'HotTopicDetail',
      component: HotTopicDetail
    },
    {
>>>>>>> 71c01e52a03e92ca0d8c03ed708b614f6d640bd1
      path: '/my',
      name: 'My',
      component: My,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/mycollection',
      name: 'MyCollection',
      component: MyCollection
    },
    {
      path: '/mycomment',
      name: 'MyComment',
      component: MyComment
    },
    {
      path: '/mytopic',
      name: 'MyTopic',
      component: MyTopic
    },
    {
      path: '/setup',
      name: 'SetUp',
      component: SetUp
    },
    {
      path: '/updatePwd',
      name: 'UpdatePwd',
      component: UpdatePwd
    },
  ]
})

// * 全局钩子
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // * 对于需要auth的路径
    // * 没有userName信息，redirect to login
    if (!localStorage.userName) {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router;
