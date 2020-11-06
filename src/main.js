import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import './plugins/element.js'
import axios from "./utils/request"
import css from '../src/css/common.css'
import rem from "@/assets/rem" 
import "@/assets/font/iconfont.css"
import "@/directives" //全局自定义指令
import { FormItem,Message } from 'element-ui'
import Filter from "@/filters"
Vue.prototype.$http=axios

router.beforeEach((to,from,next)=>{
  
  console.log(to,from)
  document.title=to.meta.title

  // 登陆成功提示
  if(from.path=="/login"&&to.path!="/setPass"&&localStorage.Token){
    
   

    Message.success('登陆成功')
  }
   
  // Token失效返回登录
  if(!localStorage.Token&&to.path=="/confirmOrder"){
      
      next("/login")
  }

  // 登陆成功之后返回的页面

  if(to.path=="/login"){
    localStorage.setItem('returnPage',from.path)
  }

 next()
  
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')



