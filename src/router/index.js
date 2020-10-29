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

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/index", //默认显示index页面
    children: [
      {
        path: "/index",  //首页路由
        name: "Index",
        component: Index
      },
      {
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
        name: 'Couser',
        component: function () {
          return import('../views/Couser/Couser.vue')
        },

      },
      {
        path: "/lar",  //约课记录路由
        name: "Lar",
        component: Lar
      },
      {
        path: '/exercise',
        name: 'exercise',
        component: function () {
          return import('../views/Exercise/Exercise_index.vue')
        },
      },
    ]

  },

  // 一级路由区域
  {
    path: '/personal',  //修改个人信息路由
    name: 'Personal',
    component: function () {
      return import('../components/myChild/Personal.vue')
    }
  },
  {
    path: "/login",//登录页面
    name: "login",
    component: function () {
      return import("@/views/login/Login.vue")
    },
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
  

  {
    path: '/text',
    name: 'Text',
    component: function () {
      return import('../views/Couser/Test.vue')
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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
