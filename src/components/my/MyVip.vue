<template>
  <div class="vip">
    <!-- 表头 -->
    <van-nav-bar title="开通会员" left-text="" left-arrow @click-left="zqd_go()">
      <template #right> </template>
    </van-nav-bar>

    <!-- 一点信息 -->
    <div class="zqd_mess">
      <img :src="arr.avatar" alt="" />
      <p>
        <span class="zqd_sp1">{{arr.nickname}}</span> <br />
        <span class="zqd_sp2">开通会员免费学习</span>
      </p>
    </div>

    <div class="content">
   <!-- 购买会员 -->
    <div class="zqd_mai">
      <p>
        <span>购买会员</span>
        <span class="zqd_sp3">购买会员后可免费观看会员课程</span>
      </p>
      <!-- 月季年卡 -->
      <div class="zqd_bottom">
        <div class="zqd_div1" :style="{background:a==1?'#F9F0D9':''}" @click="a=1">
          <p class="zqd_p1">季度会员</p>
          <p class="zqd_p2">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" alt="" />
            <span>40.00</span>
          </p>
        </div>
        <div class="zqd_div1" :style="{background:a==2?'#F9F0D9':''}" @click="a=2">
          <p class="zqd_p1">半年会员</p>
          <p class="zqd_p2">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" alt="" />
            <span>75.00</span>
          </p>
        </div>
        <div class="zqd_div1" :style="{background:a==3?'#F9F0D9':''}" @click="a=3">
          <p class="zqd_p1" >月会员</p>
          <p class="zqd_p2">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" alt="" />
            <span>15.00</span>
          </p>
        </div>
      </div>  
              <!-- 底部按钮 -->
    <!-- <van-button type="primary" id="zqd">立即支付</van-button> -->
      <van-button type="primary" text="立即支付" @click="show = true" />
      <van-overlay :show="show">
  <div class="wrapper" @click.stop="show = false">
    <div class="block">
      <p><span>提示</span><span>x</span></p>
      <p>
        <van-icon name="info-o" color="orange" style="margin-right:0.1rem"/>
        <span>你确定购买此会员</span>
      </p>
      <p>
        <button>取消</button>
        <button style="background:orange;color:#fff;margin-left:0.1rem" @click="show1 = true">确定</button>
      </p>
    </div>
  </div>
  </van-overlay>
   <van-overlay :show="show1">
  <div class="wrapper" @click.stop="show1 = false">
    <div class="block">
      <p><span>提示</span><span>x</span></p>
      <p>
        <van-icon name="info-o" color="orange" style="margin-right:0.1rem"/>
        <span>很抱歉，学习币不足，无法支付</span>
      </p>
      <p>
        <button>取消</button>
        <button style="background:orange;color:#fff;margin-left:0.1rem" @click="$router.push('/MyBalance')">去充值</button>
      </p>
    </div>
  </div>
</van-overlay>
    </div>
  
    </div>
 
  </div>
</template>

<script>
import {gets,post} from '@/utils/api'
export default {
  data() {
    return {
       a:1,
       arr:'',
       show:false,
       show1:false,
    };
  },
  created() {},
  mounted() {
    this.shuju()
    this.huiyuan()
  },
  methods: {
    async shuju(){
      let {data} = await gets('/api/app/userInfo')
      console.log(data)
      this.arr = data
    },
    async huiyuan(){
      let {data} = await gets('/api/app/vip/grade')
      console.log(data)
    },
    zqd_go() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    width: 3rem;
    height: 1rem;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 0.2rem;
    font-size: 0.14rem;
    P:nth-child(1){
      display: flex;
      justify-content: space-between;
      line-height: 0.3rem;
    }
    P:nth-child(2){
      line-height: 0.3rem;
    }
    P:nth-child(3){
      box-sizing: border-box;
      padding-left: 1.5rem;
       line-height: 0.3rem;
       button{
         width: 0.5rem;
         height: 0.3rem;
        background: white;
        border: 1px solid #8c8c8c;
       }
    }
  }
.vip{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.zqd_mess {
  background:white;
  width: 100%;
  height: 0.8rem;
  box-sizing: border-box;
  padding: 0 0.1rem;
  display: flex;
  align-items: center;
  > img {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
  }
  > p {
    margin-left: 0.1rem;
  }
  .zqd_sp1 {
    font-size: 0.16rem;
  }
  .zqd_sp2 {
    font-size: 0.16rem;
    color: #8c8c8c;
  }
}
.zqd_mai {
  padding: 0.5rem 0.2rem;
  
  background: #f0f2f5;
  .zqd_sp3 {
    margin-left: 0.1rem;
    font-size: 0.12rem;
    color: #808080;
  }
}
.zqd_bottom {
   display: flex;
   justify-content: space-between;
  .zqd_div1 {
    width: 1.1rem;
    height: 1.3rem;
    border: 1px solid orange;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.2rem;
    box-sizing: border-box;
    padding: 0.3rem 0;
   .zqd_p1{
      font-weight: bolder;
      font-size: 0.16rem;
      color: #678CAF;
   }
   .zqd_p2{
      img{
         width: 0.2rem;
         height: 0.2rem;
      }
      span{
         font-size: 0.3rem;
         color: #D5A322;
      }
   }
  }
}
.van-button{
   width: 3.5rem;
   height: 0.5rem;
   border: 0;
  //  margin-left: 0.3rem;
   margin-top: 3rem;
   border-radius: 0.5rem;
   background: linear-gradient(90deg,#eac687,#c8ae84);
}
.content{
  flex: 1;
  display: flex;
  flex-direction:column ;
  align-items: center;
}
</style>