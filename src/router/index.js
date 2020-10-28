import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login/Login.vue'
import retrieve from '../views/login/Retrieve.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
