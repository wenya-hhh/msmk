<template>
  <div>
    <van-nav-bar title="找回密码" left-arrow @click-left="onClickLeft" />
    <div class="retrieve_input_container">
      <div class="retrieve_input_wrapper">
        <div class="retrieve_tel_container">
          <van-field
            placeholder="请输入手机号"
            :class="active == true ? 'changBottom' : ''"
            @focus="active = true"
            @blur="active = false"
            v-model="tel"
          >
            <template #button>
              <span @click="getmsg" v-show="getCode">获取验证码</span>
              <div class="time_box" v-show="timeOut">
                获取验证码 (<van-count-down
                  ref="countDown"
                  :time="time"
                  format="ss"
                  @finish="timeend"
                  :auto-start="false"
                />)
              </div>
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
    <!-- 弹出框 -->
    <div class="mes" v-show="show">
      <span>手机号码格式不正确</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";
import axios from "axios";
Vue.use(NavBar);
export default {
  
  data() {
    return {
      active: false,
      nother: false,
      last: false,
      getCode: true,
      timeOut: false,
      tel: "",
      time: 60 * 1000,
      show:false,
    };
  },
  methods: {
    // 点击返回按钮返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 获取验证码
    getmsg() {
      var reg = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
      if (this.tel == "" || !reg.test(this.tel)) {
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 1500);
        return;
      }
      // 验证码倒计时
      this.$refs.countDown.start();
      // 验证码第一个样式消失
      this.getCode = false;
      // 验证码第二个样式出现
      this.timeOut = true;

      axios.post('http://120.53.31.103:84/api/app/smsCode',{
        mobile:this.tel,sms_type:'getPassword'
      }).then(res=>{
        console.log(res);
      })
    },
    // 倒计时结束时触发样式改变
    timeend() {
      this.timeOut = false;
      this.getCode = true;
      this.$refs.countDown.reset();
    },
  },
};
</script>
<style lang="scss" >
.van-nav-bar__arrow {
  color: #000 !important;
  font-size: 0.2rem !important;
}
.van-nav-bar__title {
  font-size: 0.2rem !important;
}
.van-field__button {
  color: rgb(235, 97, 82) !important;
  font-size: 0.12rem !important;
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
      border-bottom: 0.01rem solid rgba(211, 211, 211, 0.308);
      .van-field__control {
        font-size: 0.16rem;
      }
    }
    .retrieve_pass_container {
      border-bottom: 0.01rem solid rgba(211, 211, 211, 0.308);
      .van-field__control {
        font-size: 0.16rem;
      }
    }
    .retrieve_password_container {
      border-bottom: 0.01rem solid rgba(211, 211, 211, 0.308);
      .van-field__control {
        font-size: 0.16rem;
      }
    }
  }
}
.changBottom {
  border-bottom: 0.01rem solid #fc5500;
}
</style>