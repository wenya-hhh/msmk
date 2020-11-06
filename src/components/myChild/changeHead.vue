<template>
  <div>
    <div class="back_container">
      <van-nav-bar
        title="修改个人信息"
        left-arrow
        @click-left="onClickLeft"
        right-text="保存"
        @click-right="onClickRight"
      />
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        onClickLeft(){
            this.$emit('changeHead')
        },
        onClickRight(){
          this.$emit('keep')
        }
    }
}
</script>

<style lang="scss">
.van-nav-bar__right {
  .van-nav-bar__text {
    font-size: 0.16rem !important;
    color: #000 !important;
  }
}
.van-icon-arrow-left {
  color: #333 !important;
  font-size: 0.25rem !important;
}
.van-nav-bar__title {
  font-size: 0.22rem !important;
}
</style>