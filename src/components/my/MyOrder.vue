<template>
    <div class="order">
        <!-- 头部 -->
          <header>
              <p @click="$router.go(-1)"><van-icon name="arrow-left" /></p>
              <p>{{orderType | title}}</p>
          </header>
          
        <!-- 导航选项 -->
          <ul class="nav">
                <li @click="changeTab(k)" v-for="(i,k) in tab" :key="k" :class="{'active':order_status==i.order_status}">{{i.title}}</li>  
              
          </ul>
           
           <!-- 列表 -->
          <div class="content">

              <ul  v-show="list.length>0">
                  <li v-for="(i,k) in list" :key="k">

                       <div>
                           <p>订单编号:{{i.order_number}}</p>
                           <p>{{i.order_status | text}}</p>
                       </div>
                       
                       <p>{{i.title}}</p>
                       <p>时间：{{i.created_at | time}}</p>
                        <p><span>实付款:</span> <img data-v-2ff4f37d="" src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" class="price-ico"><span>{{i.order_price}}</span></p>
                       

                  </li>
              </ul>

             <Null v-show="list.length==0" :title="'暂无订单'"></Null>

          </div>
    </div>
</template>

<script>
import Null from "@/components/null"
export default {
    name:"myorder", //我的订单
    components:{
       Null
    },
    data() {
        return {
           orderType:this.$route.query.orderType,
           order_status:0,
           tab:[
               {
                   title:"全部订单",
                   order_status:0
               },
                {
                   title:"代付款",
                   order_status:1
               },
                {
                   title:"已完成",
                   order_status:2
               },
                {
                   title:"已取消",
                   order_status:3
               }
           ],
           list:[]
        };
    },
    created() {

    },
    filters:{

        text(el){
             
             if(el==2){
                    return "已付款"
             }else if(el==1){
                 return "代付款"
             }else if(el==3){
                 return "已取消"
             }


        },

        title(el){
               if(el==2){
                    return "课程订单"
             }else if(el==1){
                 return "约课订单"
             }else if(el==3){
                 return "会员订单"
             }
            

        },

        //  时间过滤器
        time(el){
             
             let time=new Date(Number(el))
             console.log(time)
             let year=time.getFullYear()
             let month=time.getMonth()
             let date=time.getDate()
             let hour=time.getHours()
             let min=time.getMinutes()
             let miao=time.getMilliseconds()
            return  year+"."+month+"."+date+" "+hour+"/"+min


        }

    },
    mounted() {
            this.getOrder()
    },
    methods: {
            
           async getOrder(){

               let res= await this.$http.post("/api/app/myOrder",{page: 1, limit: 10, order_status: this.order_status, order_type:this.orderType})
               console.log(res.data.list)
                this.list=res.data.list
            },

            // 切换选项卡
            changeTab(k){
                this.order_status=k

                this.getOrder()

            }
    }
};
</script>

<style lang="scss" scoped>
.order{
    width:100% ;
    height: 100%;
    display: flex;
    flex-direction: column;
}

/* 头部 */
header{
    width: 100%;
    height: 0.56rem;
    position: relative;
    display: flex;
    justify-content: center;
    >:nth-child(1){
        width: 0.52rem;
        font-size: 0.2rem;
        position: absolute;
        height: 0.57rem;
        text-align: center;
        line-height: 0.57rem;
        left: 0;
        top: 0;
    }
    >:nth-child(2){
        width: 2rem;
        font-size: 0.18rem;
        height: 0.57rem;
        text-align: center;
        line-height: 0.57rem;
    }
}

.nav{
    width: 100%;
    height: 0.58rem;
    display: flex;
    padding: 0.1rem;
    justify-content: space-between;
    border-bottom: 0.02rem solid #F8F8F8;
    li{
        width: 1.16rem;
        height: 0.58rem;
        text-align: center;
        line-height: 0.58rem;
        font-size:0.18rem;
    }
    .active{
         color: #EB6100;
          border-bottom: 0.02rem solid #EB6100;
    }
}

// 内容区域
.content{
    flex: 1;
    
    overflow: auto;
    background: white;
   
    >ul{
        width: 100%;
        height: 100%;
        padding: 0.2rem;
        li{
            width: 100%;
            height: 1.62rem;
            display: flex;
           margin-bottom:  0.2rem;
            flex-direction: column;
            padding:0.1rem 0.2rem;
            box-shadow: 0 0 0.2rem rgba(0,0,0,0.1);
           
            >:nth-child(1){
                width: 100%;
                height: 0.3rem;
                margin-top: 0.2rem;
                display: flex;
                font-size: 0.14rem;
                justify-content: space-between;
                    border-bottom: 1px solid #f5f5f5;
                    >:nth-child(2){
                        color: #EB6100;
                    }
            }
            >:nth-child(2){
                width: 100%;
                height: 0.2rem;
                margin-bottom: 0.1rem;
                font-size: 0.16rem;
            }
             >:nth-child(3){
                width: 100%;
                height: 0.2rem;
               color: #8c8c8c;
                font-size: 0.16rem;
            }
            >:nth-child(4){
               
                width: 100%;
                height: 0.3rem;
                display: flex;
                align-items: center;
                img{
                    width: 0.16rem;
                    height: 0.16rem;
                    margin-left: 0.05rem;
                }
                >:nth-child(3){
                    font-size: 0.2rem;
                    margin-left: 0.02rem;
                }
            }
        }
    }
}

</style>
