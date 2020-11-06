import axios from "axios"
import { Loading } from 'element-ui';
import {Guid} from "@/plugins/guid.js"
let serve=  axios.create({

 baseURL:"https://www.365msmk.com",
   // baseURL:"http://120.53.31.103:84",
   timeout:5000

})

let loadingInstance1;
serve.interceptors.request.use((req)=>{

   if(localStorage.Token){  //把token 放到请求头上
      req.headers.authorization=`Bearer ${localStorage.Token}`
   }

   if(localStorage.deviceid){  //设置设备id
      req.headers.deviceid=localStorage.deviceid
   }else{
      Guid.NewGuid(toString("D"))
      req.headers.deviceid=localStorage.deviceid

   }
    req.headers.devicetype="H5"  //设备类型

   loadingInstance1 = Loading.service({background:"rgba(0, 0, 0, 0.8)", text:"拼命加载中", fullscreen: true, spinner:'el-icon-loading'});
  
 return req

})

// 响应拦截
serve.interceptors.response.use((res) => {

   loadingInstance1.close()

   return res.data

})

export default serve