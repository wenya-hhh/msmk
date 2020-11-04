<template>
  <div class="MyAttention">
    <header>
      <van-icon @click="$router.go(-1)" name="arrow-left" />
      <p>我的关注</p>
    </header>

    <div class="content">
      <ul>
        <li @click="toCouserDetail()">
          <img
            data-v-4cf843a1=""
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
          />
          <div>
            <p><span>杨胜德</span><span>M20</span></p>
            <p>
              　杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
              　　特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。
            </p>
          </div>
          <p>取消关注</p>
        </li>
      </ul>
      <p>没有更多了</p>
    </div>
  </div>
</template>

<script>
import { collect } from "@/utils/api";
export default {
  name: "MyAttention", //我的关注
  data() {
    return {};
  },
  created() {},
  mounted() {
     
     this.getCollectTeacher()

  },
  methods: {
    //   跳转到讲师详情页面
    toCouserDetail() {
      this.$router.push("/teacher");
    },

    //  获取关注的老师
    async getCollectTeacher() {
      let res = await collect({ page: 1, limit: 10, type: 2 });

      console.log(res)
    },
  },
};
</script>

<style lang="scss" scoped>
.MyAttention {
  width: 100%;
  height: 100%;
  display: flex;
  background: #f0f2f5;
  flex-direction: column;
}

header {
  width: 100%;
  height: 0.5rem;
  background: white;
  display: flex;
  padding: 0 0.1rem;
  margin-bottom: 0.2rem;
  align-items: center;
  > :nth-child(1) {
    font-size: 0.26rem;
    font-weight: bold;
    margin-right: 1.5rem;
  }
  > :nth-child(2) {
    font-size: 0.2rem;
  }
}

.content {
  flex: 1;
  overflow: auto;
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  > ul {
    width: 100%;
    margin-bottom: 0.3rem;
    justify-content: space-between;
    > li {
      width: 100%;
      height: 0.8rem;
      border-radius: 0.15rem;
      background: white;
      display: flex;
      padding: 0.1rem;
      align-items: center;
      img {
        width: 0.43rem;
        height: 0.43rem;
        margin-right: 0.1rem;
      }
      > :nth-child(3) {
        width: 0.83rem;
        height: 0.3rem;
        display: flex;
        border-radius: 0.15rem;
        background: #fdefe5;
        color: #f0774a;
        justify-content: center;
        font-size: 0.14rem;
        align-items: center;
      }

      > :nth-child(2) {
        > :nth-child(1) {
          > :nth-child(1) {
            font-size: 0.16rem;
          }
          > :nth-child(2) {
            font-size: 0.16rem;
            color: red;
            margin-left: 0.1rem;
          }
        }
        > :nth-child(2) {
          overflow: hidden;
          width: 2.5rem;
          font-size: 0.12rem;
          margin-top: 0.1rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #b7b7b7;
        }
      }
    }
  }
}
</style>
