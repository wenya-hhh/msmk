import vue from 'vue'


// 账号验证
export function phoneTest(val){
    var reg = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
   if(val==""){
       return "账号不能为空"
   }else if(!reg.test(val)){
      return "账号格式不正确"
   }
       return true
   
}

// 密码验证

export function passwordTest(val){
    console.log(String(val))
    if(val==""){
          return "密码不能为空"
    }else if(String(val).length<6&&String(val)>16){
          return "密码长度必须为6到16位"
    }
    return true
}
