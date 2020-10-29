<template>
  <div>
    <van-nav-bar
      title="设置密码"
      right-text="跳过"
      @click-right="onClickRight"
    />
    <div class="set_container">
      <div class="pass_container">
        <van-field
          placeholder="请设置登录密码"
          :class="nother == true ? 'changBottom' : ''"
          @focus="nother = true"
          @blur="nother = false"
          v-model="password1"
        />
      </div>
      <div class="pass_container">
        <van-field
          placeholder="请再次输入密码"
          :class="aginnother == true ? 'changBottom' : ''"
          @focus="aginnother = true"
          @blur="aginnother = false"
           v-model="password2"
        />
      </div>
    </div>
    <div class="login_button_container">
      <div class="login_button_wrapper">
        <van-button
          type="primary"
          size="large"
          round
          @click="paaSure"
          color="linear-gradient(to right, #FF9349, #FC5500)"
          >确认</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nother: false,
      aginnother: false,
      password1:'',
      password2:''
    };
  },
  methods: {
    // 点击跳过按钮直接到下一页
    onClickRight() {
     this.$router.push('/setPerson')
    },
    //点击确认设置密码
    paaSure(){
      if(this.password1===this.password2){
        this.$router.push('/setPerson')
      }
    }
  },
};
</script>
<style lang="scss">
.set_container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  // background-color: burlywood;
  .pass_container {
    // height: 0.7rem;
    border-bottom: 0.01rem solid rgba(211, 211, 211, 0.308);
    width: 95%;
    font-size: 0.2rem !important;
  }
}
.van-nav-bar__text {
  color: #595959 !important;
  font-size: 0.16rem !important;
}
</style>