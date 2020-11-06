<template>
  <div class="MyAttention">
    <header>
      <van-icon @click="$router.go(-1)" name="arrow-left" />
      <p>我的关注</p>
    </header>

    <div class="content">
      <ul>
        <li v-for="(i, k) in list " :key="k" @click="toCouserDetail()">
          <img
            data-v-4cf843a1=""
            :src="i.avatar"
          />
          <div>
            <p><span>{{i.teacher_name}}</span><span>{{i.level_name}}</span></p>
            <p>
              　{{i.introduction}}
            </p>
          </div>
          <p @click.stop="cancel(i.collect_id)">取消关注</p>
        </li>
      </ul>
      <p>没有更多了</p>
    </div>
  </div>
</template>

<script>
import { collect,cancelAttention } from "@/utils/api";
export default {
  name: "MyAttention", //我的关注
  data() {
    return {
      list:[]
    };
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
      this.list=res.data.list
    },

    // 取消关注
    async cancel(id){
     

   let res = await cancelAttention(id)

   if(res.code==200){
     this.$toast("取消关注")
     this.getCollectTeacher()
   }

    }
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
          width: 2.2rem;
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
