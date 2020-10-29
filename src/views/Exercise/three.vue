<template>
  <div>
    <NavigationBar></NavigationBar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" title="考试类型" />
      <van-dropdown-item v-model="value2" :options="option2" title="考试状态" />
      <van-dropdown-item v-model="value3" :options="option3" title="参考状态" />
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
      value3: "z",
      option1: [
        { text: "全部", value: 0 },
        { text: "模拟考试", value: 1 },
        { text: "正是考试", value: 2 },
      ],
      option2: [
        { text: "全部", value: "a" },
        { text: "未开始", value: "b" },
        { text: "进行中", value: "c" },
        { text: "已结束", value: "d" },
      ],
      option3: [
        { text: "全部", value: "z" },
        { text: "已做", value: "x" },
        { text: "未做", value: "c" },
      ],
    };
  },
};
</script>
<style lang="">
</style>