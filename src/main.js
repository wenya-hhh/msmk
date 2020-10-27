import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import './plugins/element.js'
import axios from "./utils/request"
import css from '../src/css/common.css'
import rem from "@/assets/rem"
<<<<<<< HEAD
import "@/css/common.css"
import "@/assets/font/iconfont.css"
import "@/directives" //全局自定义指令
Vue.prototype.$http=axios
=======
Vue.prototype.$axios=axios
>>>>>>> cf079cacf9e9bdb7c7de6b83dcb2552f7b6d8dfc
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
