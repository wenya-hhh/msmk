import axios from "axios"
import { Loading } from 'element-ui';
let serve=  axios.create({

//  baseURL:"https://wap.365msmk.com"
   baseURL:"http://120.53.31.103:84"
 

})

let loadingInstance1;
serve.interceptors.request.use((req)=>{
  
   loadingInstance1 = Loading.service({background:"rgba(0, 0, 0, 0.8)", text:"拼命加载中", fullscreen: true, spinner:'el-icon-loading'});
  
 return req

})

serve.interceptors.response.use((res)=>{

   loadingInstance1.close()

    return res.data
   
   })

   export default serve