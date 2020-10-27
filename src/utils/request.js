import axios from "axios"

let serve=  axios.create({

 baseURL:"https://www.365msmk.com/api/app"
  

})

serve.interceptors.request.use((req)=>{


 return req

})

serve.interceptors.response.use((res)=>{


    return res.data
   
   })

   export default serve