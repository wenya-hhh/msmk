import axios from "axios"

let serve=  axios.create({

//  baseURL:"https://wap.365msmk.com"
   baseURL:"http://120.53.31.103:84"
 

})

serve.interceptors.request.use((req)=>{
   let token= localStorage.getItem("Token")
      console.log(token)
      if(token){
          
          req.headers.authorization=token
         
      }else{
               
         router.push("/login")

      }
  
 return req

})

serve.interceptors.response.use((res)=>{


    return res.data
   
   })

   export default serve