import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/Login.vue'
import retrieve from '../views/login/Retrieve.vue'
import Lar from "@/components/Lar"



Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: function () {
      return import('../views/Home.vue')
    },
    redirect:"/index", //默认显示index页面
    children:[  
        {
          path:"/index",  //首页路由
          name:"Index",
          component: function () {
            return import('../components/Index.vue')
          },
          meta:{
            title:"首页"
          }
        },
     
      {
        path:"/my",
        name:"my",
        meta:{
          title:"我的"
        },
        component: function () {
          return import('../components/My.vue')},
        // var token=window.localStorage.getItem('Token')
        beforeEnter(to,from,next){
          console.log(to,from,next)
          if(localStorage.Token){
              next()
          }else{
            setTimeout(()=>{
               next("/login")
            },200)
          }
         }
      },
    
        {
          path: '/couser',  //课程路由
          name: 'Couser', 
          meta:{
            title:"课程"
          },
          component: function () {
            return import('../components/Couser/Couser.vue')
          },
        
        },
     
      {
        path: "/lar", //约课记录路由
        name: "Lar",
        component: Lar,
        meta:{
          title:"约课记录"
        },
      },
      {
        path: '/exercise',  //练习
        name: 'exercise',
        meta:{
          title:"练习"
        },
        component: function () {
          return import('../views/Exercise/Exercise_index.vue')
        },
      },
    ]

  },

  // 一级路由区域

//  我的关注
  {
   path:"/my-attention",
   name:"MyAttention",
   component:function(){
     return import("@/components/my/MyAttention")
   },
  meta:{
   title:"我的关注"
  }

  },


// 我的收藏
{
  path:"/my-collect",
  name:"MyCollect",
  component:function(){
    return import("@/components/my/Collect")
  },
 meta:{
  title:"我的收藏"
 }

 },

  

  // 一对一辅导
  {
    path:"/oto",
    name:"oto",
    meta:{
      title:"一对一辅导"
    },
    component:function(){
      return import("@/components/Couser/Oto.vue")
    },
    
  },

  
// 登录路由
  {
    path: "/login",
    name: "login",
    component: function () {
      return import("@/views/login/Login.vue")
    },
    meta:{
      title:"登录"
    }
  },

  {
    path: "/retrieve",//找回密码页面
    name: "Retrieve",
    meta:{
      title:"找回密码"
    },
    component: function () {
      return import("@/views/login/Retrieve.vue")
    },
  },
  {
    path: "/setPass",//设置密码页面
    name: "SetPass",
    meta:{
      title:"设置密码"
    },
    component: function () {
      return import("@/views/login/Setpass.vue")
    },
  },
 
  // 课程详情
  {
    path: '/couserDetail',
    name: 'couserDetail',
    meta:{
      title:"课程详情"
    },
    component: function () {
      return import('../components/Couser/couserDetail.vue')
    }
  },


  {
    path: '/one',
    name: "one",
    component: () => import('../views/Exercise/one.vue'),
    meta: {
      isShowNav: true,
      title: "考点专练"
    }
  },
  {
    path: '/two',
    name: "two",
    component: () => import('../views/Exercise/two.vue'),
    meta: {
      isShowNav: true,
      title: "套卷练习"
    }
  },
  {
    path: '/three',
    name: "three",
    component: () => import('../views/Exercise/three.vue'),
    meta: {
      isShowNav: true,
      title: "仿真模考"
    }
  },
  {
    path: '/four',
    name: "four",
    component: () => import('../views/Exercise/four.vue'),
    meta: {
      isShowNav: true,
      title: "错题练习"
    }
  },
  {
    path: '/five',
    name: "five",
    component: () => import('../views/Exercise/five.vue'),
    meta: {
      isShowNav: true,
      title: "测评记录"
    }
  },
  {
    path: '/six',
    name: "six",
    component: () => import('../views/Exercise/six.vue'),
    meta: {
      isShowNav: true,
      title: "习题收藏"
    }
  },

  {
    path: '/teacher',  //讲师详情
    name: 'Teacher',
    meta:{
      title:"讲师详情"
    },
    component: function () {
      return import('../components/Couser/Teacher.vue')
    }
  },
  {
    path: '/yuyue',  //预约
    name: 'Yuyue',
    meta:{
      title:"预约"
    },
    component: function () {
      return import('../components/Couser/Yuyue.vue')
    }
  },
 

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router