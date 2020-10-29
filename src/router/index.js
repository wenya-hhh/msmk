import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../views/login/Login.vue'
import retrieve from '../views/login/Retrieve.vue'
// import Home from '../views/Home.vue'
import Home from "@/views/Home"
import Index from "@/components/Index"
import Couser from "@/components/Couser"
import Exercise from "@/components/Exercise"
import Lar from "@/components/Lar"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/index", //默认显示index页面
<<<<<<< HEAD
    children: [
      {
        path: "/index",  //首页路由
=======
    children: [{
        path: "/index", //首页路由
>>>>>>> 788e2ef135d2cb4698c0315c3bdb8dd5407e8cce
        name: "Index",
        component: Index
      },
      {
<<<<<<< HEAD
        path: '/my',  //我的路由
        name: 'My',
        component: function () {
          return import('../components/my.vue')},
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
=======
        path: 'my', //我的路由
        name: 'My',
        component: function () {
          return import('../components/my.vue')
        },
        beforeEnter(to, from, next) {

          console.log(to, from, next)

          if (sessionStorage.token) {
            next()
          } else {
            setTimeout(() => {
              next("/login")
            }, 200)

          }

        }
      },

      {
        path: '/couser', //课程路由
>>>>>>> 788e2ef135d2cb4698c0315c3bdb8dd5407e8cce
        name: 'Couser',
        component: function () {
          return import('../views/Couser/Couser.vue')
        },
<<<<<<< HEAD

      },
      {
        path: "/lar",  //约课记录路由
=======
<<<<<<< HEAD

      },
      {
        path: "/lar", //约课记录路由
>>>>>>> 788e2ef135d2cb4698c0315c3bdb8dd5407e8cce
        name: "Lar",
        component: Lar
      },
      {
        path: '/exercise',
        name: 'exercise',
        component: function () {
          return import('../views/Exercise/Exercise_index.vue')
<<<<<<< HEAD
=======
=======
        {
          path: '/exercise',
          name: 'exercise',
          component: function () {
            return import( '../views/Exercise/Exercise_index.vue')
          },
        
            

>>>>>>> c87136964b5c54eb896094d6a2c8eb99edc8bfcf
>>>>>>> 788e2ef135d2cb4698c0315c3bdb8dd5407e8cce
        },
      },
    ]

  },

  // 一级路由区域
  {
<<<<<<< HEAD
    path: '/personal',  //修改个人信息路由
    name: 'Personal',
    component: function () {
      return import('../components/myChild/Personal.vue')
    }
  },
  {
    path: "/login",//登录页面
=======
    path: "/login",
>>>>>>> 788e2ef135d2cb4698c0315c3bdb8dd5407e8cce
    name: "login",
    component: function () {
      return import("@/views/login/Login.vue")
    },
<<<<<<< HEAD
  },

  {
    path: "/retrieve",//找回密码页面
    name: "Retrieve",
    component: function () {
      return import("@/views/login/Retrieve.vue")
    },
  },
  {
    path: "/setPass",//设置密码页面
    name: "SetPass",
    component: function () {
      return import("@/views/login/Setpass.vue")
    },
  },
  

=======
  },
>>>>>>> 788e2ef135d2cb4698c0315c3bdb8dd5407e8cce
  {
    path: '/test',
    name: 'Test',
    component: function () {
      return import('../views/Couser/Test.vue')
    }
  },
<<<<<<< HEAD


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

=======
  {
<<<<<<< HEAD
    path: '/teacher',
    name: 'Teacher',
    component: function () {
      return import('../views/Couser/Teacher.vue')
    }
  },
  {
    path: '/yuyue',
    name: 'Yuyue',
    component: function () {
      return import('../views/Couser/Yuyue.vue')
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

=======
    path:'/oneElect',
    name:"one_elect",
    component:()=>import('../views/Exercise/one_elect.vue'),
    meta:{
      isShowNav:true,//判断头部是否显示
      isShowLeft:true,//判断左边返回按钮
      isShowRight:false,//判断右边按钮
      title:"数学"//头部标题
    }
  },
    {
      path:'/one',
      name:"one",
      component:()=>import('../views/Exercise/one.vue'),
      meta:{
        isShowNav:true,//判断头部是否显示
        isShowLeft:true,//判断左边返回按钮
        isShowRight:true,//判断右边按钮
        title:"考点专练"//头部标题
      }
    },
    {
      path:'/two',
      name:"two",
      component:()=>import('../views/Exercise/two.vue'),
      meta:{
        isShowNav:true,//判断头部是否显示
        isShowLeft:true,//判断左边返回按钮
        isShowRight:true,//判断右边按钮
        title:"套卷练习"
      }
    },
    {
      path:'/three',
      name:"three",
      component:()=>import('../views/Exercise/three.vue'),
      meta:{
        isShowNav:true,//判断头部是否显示
        isShowLeft:true,//判断左边返回按钮
        isShowRight:true,//判断右边按钮
        title:"仿真模考"
      }
    },
    {
      path:'/four',
      name:"four",
      component:()=>import('../views/Exercise/four.vue'),
      meta:{
        isShowNav:true,//判断头部是否显示
        isShowLeft:true,//判断左边返回按钮
        isShowRight:true,//判断右边按钮
        title:"错题练习"
      },

    },
    {
      path:'/five',
      name:"five",
      component:()=>import('../views/Exercise/five.vue'),
      meta:{
        isShowNav:true,//判断头部是否显示
        isShowLeft:true,//判断左边返回按钮
        isShowRight:true,//判断右边按钮
        title:"测评记录"
      }
    },
    {
      path:'/six',
      name:"six",
      component:()=>import('../views/Exercise/six.vue'),
      meta:{
        isShowNav:true,//判断头部是否显示
        isShowLeft:true,//判断左边返回按钮
        isShowRight:true,//判断右边按钮
        title:"习题收藏"
      }
    },
    //练习题库里的搜索
    {
      path:'/exerciseSearch',
      name:"exercise_search",
      component:()=>import('../views/Exercise/exercise_search.vue'),
    },
    //练习题four全部考题
    {
      path:'/fourAll',
      name:"four_all",
      component:()=>import('../views/Exercise/four_all.vue'),
    }
    
>>>>>>> c87136964b5c54eb896094d6a2c8eb99edc8bfcf
>>>>>>> 788e2ef135d2cb4698c0315c3bdb8dd5407e8cce
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router