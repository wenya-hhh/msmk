import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/exercise',
    name: 'exercise',
    component: function () {
      return import( '../views/exercise.vue')
    },
  },

    {
      path:'/one',
      name:"one",
      component:()=>import('../views/myexercise/one.vue'),
      meta:{
        isShowNav:true,
        title:"考点专练"
      }
    },
    {
      path:'/two',
      name:"two",
      component:()=>import('../views/myexercise/two.vue'),
      meta:{
        isShowNav:true,
        title:"套卷练习"
      }
    },
    {
      path:'/three',
      name:"three",
      component:()=>import('../views/myexercise/three.vue'),
      meta:{
        isShowNav:true,
        title:"仿真模考"
      }
    },
    {
      path:'/four',
      name:"four",
      component:()=>import('../views/myexercise/four.vue'),
      meta:{
        isShowNav:true,
        title:"错题练习"
      }
    },
    {
      path:'/five',
      name:"five",
      component:()=>import('../views/myexercise/five.vue'),
      meta:{
        isShowNav:true,
        title:"测评记录"
      }
    },
    {
      path:'/six',
      name:"six",
      component:()=>import('../views/myexercise/six.vue'),
      meta:{
        isShowNav:true,
        title:"习题收藏"
      }
    },
    
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
