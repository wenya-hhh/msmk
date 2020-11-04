<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="我的学习卡" left-text="" left-arrow @click-left="zqd_go()">
      <template #right>
        <span class="zqd_sp1">学习卡兑换</span>
      </template>
    </van-nav-bar>
    <van-empty
  class="custom-image"
  image="https://wap.365msmk.com//img/empty.0d284c2e.png"
  description="暂无兑换记录"
  v-show="xuexi == ''"
/>

  </div>
</template>

<script>
import { gets,post } from "@/utils/api";
export default {
  data() {
    return {
      xuexi:'',
    };
  },
  created() {},
  mounted() {
    this.shuju()
  },
  methods: {
    async shuju(){
      let {data} = await post('/api/app/myStudy')
        this.xuexi = data
    },
    zqd_go() {
      this.$router.go(-1);
    },
   
  },
};
</script>

<style scoped>
.zqd_sp1 {
  font-size: 0.12rem;
}
</style>
