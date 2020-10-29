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
  redirect: "/index", //默认显示index页面
  children: [
    {
      path: "/index",  //首页路由
      name: "Index",
      component: function () {
        return import('../components/Index.vue')
      },
    },
<<<<<<< HEAD
    redirect:"/index", //默认显示index页面
    children:[  
        {
          path:"/index",  //首页路由
          name:"Index",
          component: function () {
            return import('../components/Index.vue')
          }, 
          meta:{
            title:'每时每课'
          }
        },
      {
        path:"/my",
        name:"my",
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
=======

    {
      path: "/my",
      name: "my",
      component: function () {
        return import('../components/My.vue')
>>>>>>> cacab8a2e3bfa466809dca902e2672b505f42bd5
      },
      // var token=window.localStorage.getItem('Token')
      beforeEnter(to, from, next) {
        console.log(to, from, next)
        if (localStorage.Token) {
          next()
        } else {
          setTimeout(() => {
            next("/login")
          }, 200)
        }
      }
    },
    
<<<<<<< HEAD
        {
          path: '/couser',  //课程路由
          name: 'Couser', 
          component: function () {
            return import('../components/Couser/Couser.vue')
          },
          meta:{
            title:'特色课'
          }
        },
     
      {
        path: "/lar", //约课记录路由
        name: "Lar",
        component: Lar,
        meta:{
          title:'约课记录'
        }
      },
      {
        path: '/exercise',
        name: 'exercise',
        component: function () {
          return import('../views/Exercise/Exercise_index.vue')
        },
        meta:{
          title:'个人中心'
        }
=======
     {
      path: '/couser',  //课程路由
      name: 'Couser',
      component: function () {
        return import('../components/Couser/Couser.vue')
      }
    },
        
      {
      path: "/lar", //约课记录路由
      name: "Lar",
      component: Lar
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: function () {
        return import('../views/Exercise/Exercise_index.vue')
>>>>>>> cacab8a2e3bfa466809dca902e2672b505f42bd5
      },
    },
  ]

},

// 一级路由区域

// 一对一辅导
{
  path: "/oto",
  name: "oto",
  component: function () {
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
  path: "/setPerson",//登录设置密码页面
  name: "SetPerson",
  component: function () {
    return import("@/views/login/SetPerson.vue")
  },
  meta:{
    thitle:'设置'
  }
},
{
  path: "/mySet",//我的设置密码页面
  name: "MySet",
  component: function () {
    return import("@/components/myChild/MySet.vue")
  },
  meta:{
    thitle:'设置'
  }
},
{
  path: "/changepass",//改变密码
  name: "Changepass",
  component: function () {
    return import("@/components/myChild/ChangePass.vue")
  },
  meta:{
    title:'修改密码'
  }
},
{
  path: "/personal",//修改个人信息
  name: "Personal",
  component: function () {
    return import("@/components/myChild/Personal.vue")
  },
  meta:{
    title:'修改个人信息'
  }
},

// 课程详情
{
  path: '/couserDetail',
  name: 'couserDetail',
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
  path: '/teacher',
  name: 'Teacher',
  component: function () {
    return import('../components/Couser/Teacher.vue')
  }
},
{
  path: '/yuyue',
  name: 'Yuyue',
  component: function () {
    return import('../components/Couser/Yuyue.vue')
  }
},

<<<<<<< HEAD
  {
    path: '/teacher',
    name: 'Teacher',
    component: function () {
      return import('../components/Couser/Teacher.vue')
    },
    // meta: {
    //   isShowNav: true,
    //   isShowLeft:true,
    //   isShowRight:false,
    //   title: "讲师详情"
    // }
  },
  {
    path: '/yuyue',
    name: 'Yuyue',
    component: function () {
      return import('../components/Couser/Yuyue.vue')
    },
  },
  {
    path: '/xuexi',
    name: 'Xuexi',
    component: function () {
      return import('../components/Couser/Xuexi.vue')
    },
  },
 
=======
>>>>>>> cacab8a2e3bfa466809dca902e2672b505f42bd5

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router