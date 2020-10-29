<template>
    <div>
 <!-- 提示登陆弹窗 -->
    <van-dialog show-confirm-button v-model="show" title="标题" show-cancel-button>
      <div  class="van-dialog" style="z-index: 2040">
      <img src="https://wap.365msmk.com/img/feiji.decaf161.png">
      <p >赶紧登录一下吧</p>
      <p >立即预约一对一辅导，浏览更多视频课程~</p>
      <button @click="$router.push('/login')">立即登录</button>
         <i @click="isshow" class="el-icon-close"></i>
      </div>
    </van-dialog>
    </div>
</template>

<script>

export default {
    props:["show"],
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

        isshow(){
            this.$emit("Login",false)
        }

    }
};
</script>

<style lang="scss" scoped>
// 提示登陆弹框
.van-dialog{
  width: 3.17rem;
  height: 3.87rem;
  border-radius: 0.15rem;
  
  img{
    width: 100%;
    height: 2.24rem;
    margin-top: 0.2rem;
  }
  >:nth-child(2){
    width: 100%;
    height: 0.24rem;
    font-size: 0.16rem;
    text-align: center;
    margin-bottom: 0.06rem;
  }
  >:nth-child(3){
    width: 100%;
    height: 0.21rem;
    font-size: 0.12rem;
    text-align: center;
    color: #999999;
    margin-bottom: 0.32rem;
  }
  button{
    width: 2.62rem;
    height: 0.44rem;
    background: #EB6100;
    text-align: center;
    line-height: 0.44rem;
    color: white;
    font-size: 0.16rem;
    border: 0;
    border-radius: 0.22rem;
  }
  >:nth-child(5){
    font-size: 0.2rem;
    position: absolute;
    right: 0.1rem;
    top: 0.3rem;
  }
 
}
</style>
