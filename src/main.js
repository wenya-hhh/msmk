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
import { FormItem } from 'element-ui'
Vue.prototype.$http=axios

router.beforeEach((to,from,next)=>{
  
  console.log(to,from)
  document.title=to.meta.title

  next()
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
