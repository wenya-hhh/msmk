<template>
  <div>
    <!-- 头部组件 -->
    <NavigationBar></NavigationBar>
    <div class="box_container">
      <span @click="onClick"
        ><van-icon name="coupon-o" size="20" />题库选择</span
      >
      <span @click="showPopup"><van-icon name="setting-o" size="20" /></span>
    </div>
    <!-- 弹出框 -->
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <div class="prop_container">
        <p class="prop_config">考点专练设置</p>
        <p class="prop_num">设置考点专练出题数量</p>
        <div>
          <van-checkbox-group v-model="result" direction="horizontal" icon-size="12">
            <van-checkbox name="a">随机15道</van-checkbox>
            <van-checkbox name="b">按顺序做题</van-checkbox>
          </van-checkbox-group>
        </div>
        
      </div><div class="sure" @click="close">确定</div>
    </van-popup>
  </div>
</template>
<script>
import NavigationBar from "@/components/navigation/NavigationBar";
export default {
  components: {
    NavigationBar,
  },
  data() {
    return {
      show: false,
      result:[],
    };
  },
  methods: {
    //跳转到考点专练
    onClick() {
      this.$router.push("/one");
    },
    //点击弹出框
    showPopup() {
      this.show = true;
    },
    //关闭弹出框
    close(){
        this.show = false;
    }
  },
};
</script>
<style lang="scss" scoped>
.box_container {
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
  box-sizing: border-box;
  .van-icon {
    position: relative;
    top: 4.1px;
    margin: 0 0.1rem;
  }
}
.van-popup{
    border-radius: 5% 5% 0 0;
}
.prop_container {
  width: 100vw;
  border-radius: 20% ;
  padding: 0.1rem;
  box-sizing: border-box;
  .prop_config {
    width: 100%;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    border-bottom: 1px solid whitesmoke;
  }
  .prop_num {
    width: 100%;
    height: 0.5rem;
    color: gray;
    line-height: 0.5rem;
    font-size: 0.15rem;
  }
}
.van-checkbox-group{
    display: flex;
    justify-content: space-between;
    font-size: 0.15rem;
}
.sure{
    width: 100%;
    height: 8vh;
    background: orangered;
    color: white;
    text-align: center;
    line-height: 8vh;
    margin-top: 0.2rem;
}
</style>