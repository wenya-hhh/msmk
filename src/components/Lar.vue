<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar title="约课记录" />
    <!-- 选项卡 -->
    <van-tabs v-model="active" title-active-color="orangered">
      <van-tab title="待上课">
        <van-empty
          class="custom-image"
          image="/img/yueke_loading.jpg"
          description="还没有待上课记录哦"
        >
          <van-button @click="onChange" class="bottom-button">
            立即约课
          </van-button>
        </van-empty>
      </van-tab>
      <van-tab title="已上课">
        <van-empty
          class="custom-image"
          image="/img/yueke_loading.jpg"
          description="还没有上课记录哦"
        >
          <van-button @click="onChange" class="bottom-button">
            立即约课
          </van-button>
        </van-empty>
      </van-tab>
      <van-tab title="已取消">
          <van-empty
          class="custom-image"
          image="/img/yueke_loading.jpg"
          description="还没有取消上课记录哦"
        />
        
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "0",
    };
  },
  created() {},
  mounted() {},
  methods: {
      //点击跳转到一对一辅导
      onChange(){
          this.$router.push("/oto")
      }
  },
};
</script>

<style scoped>
.bottom-button {
  width: 160px;
  height: 40px;
}
.van-button{
    background: orangered;
    color: white;
}
</style>

