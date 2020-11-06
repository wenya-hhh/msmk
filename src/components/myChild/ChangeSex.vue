<template>
  <div class="changeSex">
    <!-- 标题 -->
    <changeHead @save="saveSex" @changeHead="changeHead"></changeHead>
    <div class="name_null"></div>
    <!-- 选择性别 -->
    <div class="sex_container">
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="男" clickable @click="radio = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="女" clickable @click="radio = '0'">
            <template #right-icon>
              <van-radio name="0" checked-color="" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
  </div>
</template>
<script>
import { updateAjax } from "@/utils/api"
import changeHead from "./changeHead";
import Vue from "vue";
import { RadioGroup, Radio } from "vant";

Vue.use(Radio);
Vue.use(RadioGroup);
export default {
  components: {
    changeHead,
  },
  data() {
    return {
      radio: this.$route.query.sex,
    };
  },
  methods: {
    changeHead() {
      this.$router.go(-1);
    },

    // 设置性别
    async saveSex(){
let res = await updateAjax({sex:this.radio})
     console.log(res)
     if(res.code==200){
         this.$router.go(-1)
     }
    }

  },
};
</script>
<style lang="scss">
.changeSex {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
}
.sex_container {
  width: 100%;
}
.name_null {
  width: 100%;
  height: 0.1rem;
}
</style>