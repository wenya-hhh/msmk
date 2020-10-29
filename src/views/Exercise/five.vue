<template>
  <div>
    <NavigationBar></NavigationBar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" title="类型不限" />
      <van-dropdown-item v-model="value2" :options="option2" title="时间" />
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
      value2: "a",
      option1: [
        { text: "全部", value: 0 },
        { text: "套卷练习", value: 1 },
        { text: "仿真模考", value: 2 },
        { text: "专点专练", value: 3 },

      ],
      option2: [
        { text: "全部", value: "a" },
        { text: "今天", value: "b" },
        { text: "7天", value: "c" },

      ],
    };
  },
};
</script>
<style lang="">
</style>