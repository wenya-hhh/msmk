import axios from "axios"

let serve=  axios.create({

<<<<<<< HEAD
//  baseURL:"https://wap.365msmk.com"
   baseURL:"http://120.53.31.103:84"
 
=======
 baseURL:"https://www.365msmk.com/api/app"
  
>>>>>>> cf079cacf9e9bdb7c7de6b83dcb2552f7b6d8dfc

})

serve.interceptors.request.use((req)=>{


 return req

})

serve.interceptors.response.use((res)=>{


    return res.data
   
   })

   export default serve