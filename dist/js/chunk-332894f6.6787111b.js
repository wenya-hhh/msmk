(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-332894f6"],{ac1b:function(a,t,e){"use strict";var s=e("e41e"),i=e.n(s);i.a},b11e:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"search_container"},[e("div",{staticClass:"search_left_container",on:{click:a.callBack}},[e("van-icon",{attrs:{name:"arrow-left",size:"20"}})],1),e("div",{staticClass:"search_right_container"},[e("form",{attrs:{action:"/"}},[e("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词",shape:"round","action-text":"取消"},on:{search:a.onSearch,cancel:a.onCancel},model:{value:a.value,callback:function(t){a.value=t},expression:"value"}})],1)])]),e("div",{staticClass:"lishi_container"},[e("div",{staticClass:"lishi_top"},[e("span",[a._v("搜索记录")]),e("span",{staticClass:"del",on:{click:a.del}},[e("van-icon",{attrs:{name:"close"}})],1)]),e("div",a._l(a.history,(function(t,s){return e("span",{directives:[{name:"show",rawName:"v-show",value:s<=3,expression:"index <= 3"}],key:s,staticClass:"list"},[a._v(a._s(t))])})),0)])])},i=[],n=e("2241"),c={data(){return{value:"",history:JSON.parse(localStorage.getItem("history"))||[]}},methods:{onCancel(){},onSearch(){this.history.unshift(this.value),localStorage.history=JSON.stringify(this.history),this.$router.go(-1)},callBack(){this.$router.go(-1)},del(){n["a"].confirm({title:"确认清空？",message:"确认清空？"}).then(()=>{this.history=[],localStorage.removeItem("history")}).catch(()=>{})}}},o=c,r=(e("ac1b"),e("2877")),l=Object(r["a"])(o,s,i,!1,null,"e5f611ba",null);t["default"]=l.exports},e41e:function(a,t,e){}}]);
//# sourceMappingURL=chunk-332894f6.6787111b.js.map