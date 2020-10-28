<template>
  <div>
    <van-nav-bar title="找回密码" left-arrow @click-left="onClickLeft"/>
    <div class="retrieve_input_container">
      <div class="retrieve_input_wrapper">
        <div class="retrieve_tel_container">
          <van-field
            placeholder="请输入手机号"
            :class="active == true ? 'changBottom' : ''"
            @focus="active = true"
            @blur="active = false"
          >
            <template #button>
              <span>获取验证码</span>
            </template>
          </van-field>
        </div>
        <div class="retrieve_pass_container">
          <van-field
            placeholder="请输入验证码"
            :class="nother == true ? 'changBottom' : ''"
            @focus="nother = true"
            @blur="nother = false"
          />
        </div>
        <div class="retrieve_password_container">
          <van-field
            placeholder="请输入密码"
            :class="last == true ? 'changBottom' : ''"
            @focus="last = true"
            @blur="last = false"
          />
        </div>
      </div>
    </div>
    <div class="login_button_container">
      <div class="login_button_wrapper">
        <van-button
          type="primary"
          size="large"
          round
          color="linear-gradient(to right, #FF9349, #FC5500)"
          >确定</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
      data() {
        return {
            active:false,
            nother:false,
            last:false,
            
        }
    },
    methods:{
        onClickLeft(){
           this.$router.go(-1);
        }
    }
};
</script>
<style lang="scss" >
.van-nav-bar__arrow {
  color: #000 !important;
  font-size: 20px !important;
}
.van-nav-bar__title {
  font-size: 20px !important;
}
.van-field__button {
  color: rgb(235, 97, 82) !important;
  font-size: 12px !important;
}
.retrieve_input_container {
  width: 100%;
  height: 28vh;
  // background-color: powderblue;
  display: flex;
  justify-content: center;
  align-items: center;
  .retrieve_input_wrapper {
    width: 85%;
    .retrieve_tel_container {
      border-bottom: 1px solid rgba(211, 211, 211, 0.308);
      .van-field__control {
        font-size: 16px;
      }
    }
    .retrieve_pass_container {
      border-bottom: 1px solid rgba(211, 211, 211, 0.308);
      .van-field__control {
        font-size: 16px;
      }
    }
    .retrieve_password_container {
      border-bottom: 1px solid rgba(211, 211, 211, 0.308);
      .van-field__control {
        font-size: 16px;
      }
    }
  }
}
.changBottom {
  border-bottom: 1px solid #fc5500;
}
</style>