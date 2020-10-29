<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar  left-arrow  @click-left="onClickLeft">
      <template #right>
        <van-icon name="notes-o" />
        <van-icon name="star-o" />
        <van-icon name="todo-list-o" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
        //返回上一级
        onClickLeft(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .van-icon{
        margin: 0 0.1rem;
        color: gray;
    }
</style>