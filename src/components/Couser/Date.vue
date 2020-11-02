<template>
  <div>
    <!-- 头部 -->
    <Navigation></Navigation>
    <!-- 日期 -->
    <van-calendar
    :show-title="false"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '500px' }"
    />
  </div>
</template>
<script>
import Navigation from "@/components/navigation/NavigationBar";
export default {
  components: {
    Navigation,
  },
};
</script>
<style lang="scss" scoped>
.van-calendar__header-title{
    display: none;
}
</style>