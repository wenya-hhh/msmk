<template>
  <div class="sub_container">
    <!-- 头部组件 -->
    <changeHead @changeHead="changeHead" @save="keep"></changeHead>
    <div class="subject_null"></div>

    <!-- 课程分类 -->
    <div class="sub_wrapper">
      <ul>
        <li v-for="(item, index) in subject" :key="index">
          <div class="sub">
            <span
              ><input
                @click="change(index)"
                type="checkbox"
                :value="item.id"
                :checked="indexs == index ? true : false"
                v-model="chose"
            /></span>
            <!-- {{chose}} -->
            <span>{{ item.name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {updateAjax} from "@/utils/api"
import changeHead from "./changeHead";
export default {
  components: {
    changeHead,
  },
  data() {
    return {
      chose: [],
      subject: "",
      indexs: -1,
      string: "",
      
    };
  },
  mounted() {
    this.getSub();
  },
  methods: {
    //   点击左上角返回
    changeHead() {
      this.$router.go(-1);
    },
    // 右上角保存
   async keep() {
        let arr = []
      this.chose.forEach((el, index) => {
         arr.push({
             "attr_id":2,"attr_val_id":el
         })
      });

        let  res = await updateAjax({'user_attr':JSON.stringify(arr)})
        console.log(res)
      // console.log(this.string);
       if(res.code==200){
      this.$router.push({ path: "/personal", query: { val: this.string } });
        
       }
    },
    change(index) {
      console.log(index);
    },

    // 请求接口
    async getSub() {
      let res = await this.$http.get("/api/app/module/attribute/1?");
      console.log(res);
      this.subject = res.data[1].value;
      //   console.log(this.subject);
    },
  },
};
</script>

<style lang="scss" scoped>
.sub_container {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  .subject_null {
    width: 100%;
    height: 0.1rem;
  }
  //   课程分类
  .sub_wrapper {
    width: 100%;
    // height: 3rem;
    background-color: #ffff;
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      li {
        width: 90%;
        height: 0.7rem;
        border-bottom: 0.01px solid #ececee;
        display: flex;
        align-items: center;

        // width: 100%;
        span {
          margin: 0 0.1rem;
        }
      }
    }
  }
}
</style>