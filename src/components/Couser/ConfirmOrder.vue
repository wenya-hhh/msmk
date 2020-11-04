<template>
  <div class="confirmorder">
    <!-- 头部 -->
    <Headers :title="'确认订单'"></Headers>

    <!-- 内容 -->
    <div class="content">
      <div class="title">
        <div>
          <p>{{ list.title }}</p>
          <p>{{ list.price | fixed}}</p>
        </div>
        <p>授课老师:{{ list.teacher_name }}</p>
      </div>

      <div class="youhui">
        <p>优惠券</p>
        <p v-show="list.has_coupon == 0">无可用</p>
      </div>

      <div class="price">
        <div>
          <p>商品金额</p>
          <p><img data-v-315f06a1="" class="price_img" src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"><span>{{ list.price | fixed}}</span></p>
        </div>
        <div>
          <p>优惠券金额</p>
          <p><img data-v-315f06a1="" class="price_img" src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"><span>{{ list.has_coupon | fixed}}</span></p>
        </div>
        <div>
          <p>合计</p>
          <p><img data-v-315f06a1="" class="price_img" src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"><span class="allprice">{{ list.price-list.has_coupon | fixed}}</span></p>
        </div>
      </div>
    </div>
    
    <footer>
        <div>
            <p>实付价格</p>
         <img data-v-315f06a1="" class="price_img" src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png">
         <span class="allprice">{{ list.price-list.has_coupon | fixed}}</span>

        </div>
        <button @click="submit">提交订单</button>
    </footer>
  </div>
</template>

<script>
import { applyApi,downOrder } from "../../utils/api";
import Headers from "@/components/Header";
export default {
  name: "confirmorder", //确认订单
  components: {
    Headers,
  },
  data() {
    return {
      list: "",
     
    };
  },
  filters:{
       
       fixed(val){
          
          return Number(val).toFixed(2)

       }

  },
  created() {},
  mounted() {
    this.confirmOrder();
  },
  methods: {
    async confirmOrder() {
      //确认订单数据
      let res = await applyApi(this.$route.query.confirmOrderId);

      this.list = res.data.info;
      console.log(this.list);
    },
    
    // 提交订单
   async submit(){
     
        let res = await downOrder(
           {shop_id:this.$route.query.confirmOrderId, type: "5", user_coupon_id: this.list.checked_coupon.coupon_id}
        )
        console.log(res)
         this.$confirm( res.msg, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         
        }).catch(() => {
          
        });

    }
  },
};
</script>

<style lang="scss" scoped>
.el-message-box__wrapper{
   width: 2.33rem !important;

}
.confirmorder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 0.2rem 0.1rem;
  .title {
    width: 100%;
    background: white;
    padding: 0.2rem 0.1rem;
    > :nth-child(1) {
      width: 100%;
      display: flex;
      > :nth-child(1) {
        width: 3.05rem;
        font-size: 0.2rem;
      }
      > :nth-child(2) {
        width: 0.55rem;
        font-size: 0.2rem;
        text-align: center;
      }
    }
    > :nth-child(2) {
      margin-top: 0.1rem;
      width: 100%;
      font-size: 0.14rem;
      color: #b7b7b7;
    }
  }

  .youhui {
    width: 100%;
    height: 0.53rem;
    display: flex;
    padding: 0 0.2rem;
    margin-top: 0.2rem;
    background: white;
    justify-content: space-between;
    p {
      width: 1.91rem;
      height: 0.53rem;
      line-height: 0.53rem;
      font-size: 0.18rem;
    }
    > :nth-child(2) {
      color: #b7b7b7;
      display: flex;
      justify-content: flex-end;
    }

  }

  .price{
      width: 100%;
      padding: 0.2rem;
      background: white;
      margin-top: 0.2rem;
      div{
          width: 100%;
          height: 0.24rem;
          display: flex;
          margin-bottom: 0.1rem;
          justify-content: space-between;
         
          >:nth-child(1){
              font-size: 0.16rem;
              color: #8C8C8C;
          }
          >:nth-child(2){
            width: 0.6rem;
            height: 0.24rem;
            display: flex;
            align-items: center;
            img{
                width: 0.12rem;
                height: 0.11rem;
                margin-right: 0.05rem;
            }
            span{
                 font-size: 0.16rem;
              color: #8C8C8C;
            }
             .allprice{
                color: #E02020;
            }
          }
      }
  }

}

footer{
    width: 100%;
    height: 0.6rem;
    display: flex;
    div{
        width: 2.97rem;
        height: 100%;
        display: flex;
        padding: 0.3rem;
        align-items: center;
        p{
            font-size: 0.16rem;
        }
         img{
                width: 0.12rem;
                height: 0.11rem;
               
            }
            span{
                 font-size: 0.3rem;
              color: #8C8C8C;
            }
             .allprice{
                color: #E02020;
            }
    }
    button{
        width: 1.7rem;
        height: 100%;
        border: 0;
        text-align: center;
        line-height: 100%;
        color: white;
        background: #EB6100;
        font-size:0.2rem;
    }
}
</style>
