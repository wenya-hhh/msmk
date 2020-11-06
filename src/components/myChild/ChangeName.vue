<template>
  <div class="changeNname">
    <!-- 标题 -->
    <changeHead @save="save" @changeHead='changeHead'></changeHead>

    <div class="name_null"></div>
    <!-- 个人昵称 -->
    <div class="changeName_container">
      <van-field v-model="value"  />
    </div>
  </div>
</template>

<script>
import changeHead from './changeHead'
import { updateAjax } from "@/utils/api"
export default {
    components:{
    changeHead
    },
    data() {
        return {
            value:this.$route.query.name
        }
    },
  methods: {
    changeHead() {
      this.$router.go(-1);
    },
      // 设置名字
   async save(){
     let res = await updateAjax({nickname:this.value})
     console.log(res)
     if(res.code==200){
         this.$router.go(-1)
     }
    },
  },
};
</script>

<style lang="scss">
.changeNname {
    width: 100%;
    height: 100%;
  background-color: #f0f2f5;
}
// .van-nav-bar__right {
//   .van-nav-bar__text {
//     font-size: 0.16rem !important;
//     color: #000 !important;
//   }
// }
// .van-icon-arrow-left {
//   color: #333 !important;
//   font-size: 0.25rem !important;
// }
// .van-nav-bar__title {
//   font-size: 0.22rem !important;
// }
.name_null {
  width: 100%;
  height: 0.1rem;
}
.changeName_container {
  width: 100%;
  height: 0.7rem;
  background-color: #fff;
  display: flex;
  align-items: center;
}
</style>