import vue from 'vue'

export function phoneTest(val){
    var reg = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
   if(reg.test(val)){
       return true
   }else{
       return false
   }
}
