<template>
  <div class="myset_container">
    <div class="back_container">
      <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="myset_null"></div>
    <div class="my_con_container">
      <div class="my_con_pass" @click="changePass">
        <span>设置密码</span>
        <span> <van-icon name="arrow" size="0.25rem" color="#b7b7b7" /></span>
      </div>
      <div class="outLogin"><van-button type="primary" block color="#fc5500" @click="outLogin">退出登录</van-button></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //   点击返回上一页
    onClickLeft() {
      this.$router.push('/my');
    },
    // 退出登录
    outLogin(){
        localStorage.removeItem('Token')
        this.$router.push('/login')
    },
    // 修改密码
    changePass(){
      this.$router.push('/changepass')
    }
  },
};
</script>
<style lang="scss" scoped>
.myset_container {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  .myset_null {
    width: 100%;
    height: 0.1rem;
  }
  .my_con_container {
    width: 100%;
    height: 2.3rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    // 设置密码样式
    .my_con_pass {
      width: 90%;
      height: 0.7rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 0.16rem;
      }
    }
    // 退出登录按钮
    .outLogin {
      width: 90%;
      height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>