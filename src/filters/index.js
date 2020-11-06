import Vue from "vue"

// 过滤性别
Vue.filter("sex",(el)=>{
    
    if(el== 0){
        return "女"
    }else{
        return "男"
    }

})

// 转换为月日
Vue.filter("years",(res)=>{

  return new Date(res).toLocaleDateString().replace("2020/",'')

})

// 转换为星期
Vue.filter("week",(res)=>{

    let weekArr=["周一","周二","周三","周四","周五","周六","周日"]
    return weekArr[new Date(res).getDay()] 
})
