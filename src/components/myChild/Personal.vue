<template>
  <div>
      <!-- 标题 -->
    <div class="back_container">
      <van-nav-bar title="个人信息" left-arrow @click-left="onClickLeft"/>
    </div>
    <div class="person_null"></div>
    <!-- 个人资料 -->
    <div class="all_data_container">
      <div class="all_data_wrapper">
        <span>头像</span>
        <div class="data_right" @click="changeHead">
          <span>
            <img src="@/assets/00.png" alt="" />
          </span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="all_data_wrapper">
        <span>昵称</span>
        <div class="name_data_right">
          <span> 马兴龙123 </span>
          <van-icon name="arrow" size="0.25rem" color="#b7b7b7" />
        </div>
      </div>
      <div class="all_data_wrapper">
        <span>手机号</span>
        <div class="name_data_right">
          <span> 15810195203 </span>
          <van-icon name="arrow" size="0.28rem" color="#fff" />
        </div>
      </div>
      <div class="all_data_wrapper">
        <span>性别</span>
        <div class="name_data_right">
          <span> 女 </span>
          <van-icon name="arrow" size="0.25rem" color="#b7b7b7" />
        </div>
      </div>
       <div class="all_data_wrapper">
        <span>出生日期</span>
        <div class="name_data_right">
          <span> 2018-05-18 </span>
          <van-icon name="arrow" size="0.25rem" color="#b7b7b7" />
        </div>
      </div>
       <div class="all_data_wrapper">
        <span>所在城市</span>
        <div class="name_data_right">
          <span> 内蒙古自治区，呼和浩特市，武川县 </span>
          <van-icon name="arrow" size="0.25rem" color="#b7b7b7" />
        </div>
      </div>
       <div class="all_data_wrapper">
        <span>学科</span>
        <div class="name_data_right">
          <span> 化学 </span>
          <van-icon name="arrow" size="0.25rem" color="#b7b7b7" />
        </div>
      </div>
       <div class="all_data_wrapper">
        <span>年级</span>
        <div class="name_data_right">
          <span> 小学一年级 </span>
          <van-icon name="arrow" size="0.25rem" color="#b7b7b7" />
        </div>
      </div>
    </div>
    <van-popup v-model="headshow" position="bottom" >
        <ul class="headStyle">
            <li>拍照</li>
            <li>从手机相册选择</li>
            <li>取消</li>
        </ul>
    </van-popup>
  </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            headshow:false
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        changeHead(){
            this.headshow=true
        }
    },
    mounted() {
        this.$http.get('/api/app/userInfo').then(res=>{
            console.log(res);
        })
    },
}
</script>
<style lang="scss" soped>
// body{
//     background-color:#f0f2f5;
// }
.back_container {
  width: 100%;
}
.person_null {
  width: 100%;
  height: 0.1rem;
  background-color: #f0f2f5;
}
// 个人资料
.all_data_container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .all_data_wrapper {
    width: 90%;
    height: 0.7rem;
    font-size: 0.14rem;
    // background-color: lightpink;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f0f2f5;
    .data_right {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    //   个人资料头像
      span {
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .van-icon-arrow {
        font-size: 0.28rem;
        color: #b7b7b7;
        font-weight: 100;
      }
    }
    // 其余个人资料
    .name_data_right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #8c8c8c;
    }
  }
}
.headStyle{
    width: 100%;
    li{
        width: 100%;
        height: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 0.01rem solid #f0f2f5;
    }
}
</style>