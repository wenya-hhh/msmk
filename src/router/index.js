import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
<<<<<<< HEAD
import Home from '../views/Home.vue'
import login from '../views/login/Login.vue'
import retrieve from '../views/login/Retrieve.vue'
=======
// import Home from '../views/Home.vue'
=======
>>>>>>> a07d9695dd951f1e33ca4e729c665f1f9d1b8eb2
import Home from "@/views/Home"
import Index from "@/components/Index"
import Couser from "@/components/Couser"
import Exercise from "@/components/Exercise"
import Lar from "@/components/Lar"
import My from "@/components/My"

>>>>>>> 1814c543eb8fb0a97702ff783856ea3653056503
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
<<<<<<< HEAD
    redirect:'/my',
    children:[
      {
        path: '/my',
        name: 'My',
        component: function () {
          return import('../components/my.vue')
        }
      },
    ]
    
=======
    redirect:"/index", //默认显示index页面
    children:[  
        {
          path:"/index",  //首页路由
          name:"Index",
          component:Index
        },
        {
          path: '/couser',  //课程路由
          name: 'Couser', 
          component: function () {
            return import('../views/Couser/Couser.vue')
          },
          children:[
            // {
            //   path:'text',
            //   name:"text",
            //   component:
            // }
          ]
        },
        {
          path:"/lar",  //约课记录路由
          name:"Lar",
          component:Lar
        },
        {
          path: '/exercise',
          name: 'exercise',
          component: function () {
            return import( '../views/Exercise/Exercise_index.vue')
          },
        },
        {
          path:"/my",  //我的路由
          name:"My",
          component:My
        },

    ]
<<<<<<< HEAD
>>>>>>> 1814c543eb8fb0a97702ff783856ea3653056503
  },
<<<<<<< HEAD
 
=======
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
<<<<<<< HEAD
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/retrieve',
    name: 'retrieve',
    component: retrieve
  }

=======
    }
  },
  {
    path: '/couser',
    name: 'Couser',
    component: function () {
      return import('../views/kc/couser.vue')
    }
  },
=======
  }, 
 
>>>>>>> a07d9695dd951f1e33ca4e729c665f1f9d1b8eb2
  {
    path: '/text',
    name: 'Text',
    component: function () {
      return import('../views/Couser/Test.vue')
    }
  },
  

    {
      path:'/one',
      name:"one",
      component:()=>import('../views/Exercise/one.vue'),
      meta:{
        isShowNav:true,
        title:"考点专练"
      }
    },
    {
      path:'/two',
      name:"two",
      component:()=>import('../views/Exercise/two.vue'),
      meta:{
        isShowNav:true,
        title:"套卷练习"
      }
    },
    {
      path:'/three',
      name:"three",
      component:()=>import('../views/Exercise/three.vue'),
      meta:{
        isShowNav:true,
        title:"仿真模考"
      }
    },
    {
      path:'/four',
      name:"four",
      component:()=>import('../views/Exercise/four.vue'),
      meta:{
        isShowNav:true,
        title:"错题练习"
      }
    },
    {
      path:'/five',
      name:"five",
      component:()=>import('../views/Exercise/five.vue'),
      meta:{
        isShowNav:true,
        title:"测评记录"
      }
    },
    {
      path:'/six',
      name:"six",
      component:()=>import('../views/Exercise/six.vue'),
      meta:{
        isShowNav:true,
        title:"习题收藏"
      }
    },
    
  
<<<<<<< HEAD
>>>>>>> cf079cacf9e9bdb7c7de6b83dcb2552f7b6d8dfc
>>>>>>> 1814c543eb8fb0a97702ff783856ea3653056503
=======
>>>>>>> a07d9695dd951f1e33ca4e729c665f1f9d1b8eb2
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
