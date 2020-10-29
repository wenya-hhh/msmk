<template>
  <div>
    <NavigationBar></NavigationBar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" title="题目类型" />
    
    </van-dropdown-menu>
    <!-- 空状态 -->
    <NullState></NullState>
  </div>
</template>
<script>
/* 引入头部 */
import NavigationBar from "@/components/navigation/NavigationBar";
/* 引入空状态 */
import NullState from "@/components/nullState/NullState";
export default {
  components: {
    NavigationBar,
    NullState,
  },
  data() {
    return {
      value1: 0,

      option1: [
        { text: "单选", value: 0 },
        { text: "多选", value: 1 },
        { text: "判断", value: 2 },
        { text: "连线", value: 3 },

      ],
    };
  },
};
</script>
<style lang="">
</style>