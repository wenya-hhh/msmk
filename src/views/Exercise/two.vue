<template>
    <div>
        <!-- <NavigationBar></NavigationBar> -->
        <!-- 下拉菜单 -->
        <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
    </div>
</template>
<script>
import NavigationBar from "./../../components/navigation/NavigationBar"
export default {
    components:{
        NavigationBar
    },
    data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部', value: 0 },
        { text: '中考真题', value: 1 },
        { text: '化学', value: 2 },
        { text: '英语', value: 3 },

      ],
      option2: [
        { text: '全部', value: 'a' },
        { text: '已做', value: 'b' },
        { text: '未做', value: 'c' },
      ],
    };
  },
}
</script>
<style lang="">
    
</style>