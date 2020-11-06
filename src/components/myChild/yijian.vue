<template>
      
  <div>
    <!-- 头部 -->
    <NavigationBar></NavigationBar>
    <!-- 文本域 -->
    <div class="text">
      <textarea
        name=""
        id=""
        cols="48"
        rows="10"
        v-model="value"
        maxlength="500"
        placeholder="请输入你的意见..."
      ></textarea>
      <p>{{ this.value.length }}/500</p>
    </div>
    <button @click="subYiJian">提交</button>

        
  </div>
</template>

<script>
import NavigationBar from "../navigation/NavigationBar";
import { yijianSubmit } from "../../utils/api";
export default {
  components: {
    NavigationBar,
  },
  data() {
    return {
      value: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    async subYiJian() {
      let res = await yijianSubmit({ content: this.value });
      //   console.log(res);
      this.$router.push("/my");
    },
  },
};
</script>

<style scoped lang="scss" scoped>
.text {
  width: 96vw;
  margin: 10px auto;
  text-align: center;
  textarea {
    border-radius: 2%;
    padding: 2.66667vw 2.66667vw;
    font-size: 3.2vw;
    line-height: 3.2vw;
    min-height: 0;
    height: 44vw;
  }
  p {
    text-align: right;
    margin-right: 0.2rem;
    color: gray;
  }
}
button {
  width: 96vw;
  height: 0.5rem;
  background: orangered;
  color: white;
  border: 0;
  margin-top: 1rem;
  margin-left: 0.08rem;
  border-radius: 2%;
}
</style>
