<template>
  <div>
    <van-nav-bar title="我的学习" left-text left-arrow @click-left="$router.go(-1)">
      <template #right>
          <van-icon name="newspaper-o" />
      </template>
    </van-nav-bar>
    <van-tabs title-active-color="red">
  <van-tab v-for="(item,index) in arr.typeNum" 
  :title="item.name + (item.num)" :key="index" 
  title-inactive-color="red"
  >
  <ul>
      <li v-for="(i, k) in arr.courseList" :key="k" v-show="index == 0">
        <div @click="$router.push('/study?id=' + i.course_id)">
            <p>{{ i.title }}</p>
            <div class="time">
              <van-icon name="clock-o" style="margin-right: 0.1rem" />
              <span
                >{{ i.start_play_date | time }} ~
                {{ i.end_play_date | time }}</span
              >
              <span style="margin-left: 0.1rem; margin-right: 0.1rem">|</span>
              <span>共{{ i.section_num }}课时</span>
            </div>
            <p class="section_p">
              <el-progress style="width: 2.5rem" :show-text="false" :percentage="i.progress_rate"></el-progress>
              <span>已观看0%</span>
            </p>
        </div>
      </li>
  </ul>
  <ul>
      <li v-for="(a, b) in arr1.courseList" :key="b" v-show="index == 1">
        <div @click="$router.push('/study?id='+a.course_id)">
            <p>{{ a.title }}</p>
            <div class="time">
              <van-icon name="clock-o" style="margin-right: 0.1rem" />
              <span
                >{{ a.start_play_date | time }} ~
                {{ a.end_play_date | time }}</span
              >
              <span style="margin-left: 0.1rem; margin-right: 0.1rem">|</span>
              <span>共{{ a.section_num }}课时</span>
            </div>
            <p class="section_p">
              <el-progress style="width: 2.5rem" :show-text="false" :percentage="a.progress_rate"></el-progress>
              <span>已观看0%</span>
            </p>
        </div>
      </li>
  </ul>
  <ul v-show="index>1">
    <van-empty description="还没有课程"
    image="https://img.yzcdn.cn/vant/custom-empty-image.png">
  <van-button round type="danger" class="bottom-button" @click="$router.push('/couser')">
    选择课程
  </van-button>
</van-empty>
  </ul>
  </van-tab>
   
</van-tabs>

  </div>
</template>

<script>
import {gets,classify1} from '../../utils/api'

export default {
  name: "mystudy",
  data() {
    return {
        arr:[],
        arr1:[]
    };
  },
  created() {},
  mounted() {
      this.shuju()
  },
  methods: {
      // async add(type){
      //     let {data} = await gets(`/api/app/myStudy/${type}`)
      //     console.log(data)
      //     this.arr = data
      // },
      async shuju(){
          let {data} = await gets(`/api/app/myStudy/2`)
          console.log(data)
          this.arr = data
           let {data:res} = await gets(`/api/app/myStudy/5`)
          console.log(res)
          this.arr1 = res
      },
      // add(type){
      //   console.log(type)
      // }
  },
   filters: {
    time: function (val) {
      var obj = new Date(val);
      // 月
      var month = (obj.getMonth() + 1).toString().padStart(2, "0");
      // 日
      var day = obj.getDate().toString().padStart(2, "0");
      // 时
      var hour = obj.getHours().toString().padStart(2, "0");
      // 分
      var minute = obj.getMinutes().toString().padStart(2, "0");
      return month + "月" + day + "日" + " " + hour + ":" + minute;
    },
  },
};
</script>

<style scoped lang="scss">
li {
  width: 100%;
  background: white;
  // height: 1.9rem;
  box-sizing: border-box;
  padding: 0 0.15rem;
  margin-bottom: 0.15rem !important;
  border-radius: 0.05rem;
  padding-top: 0.15rem;
  .time {
    width: 100%;
    height: 0.3rem;
    display: flex;
    align-items: center;
    font-size: 0.12rem;
    color: #666666;
  }
  .tou {
    width: 3.5rem;
    height: 0.8rem;
    display: flex;
    font-size: 0.12rem;
    align-items: center;
    color: #666666;
    display: flex;
    justify-content: space-between;
    >:nth-child(2){
      width: 0.72rem;
      height: 0.59rem;
    }
    p{
      width: 0.9rem;
      height: 100%;
      display: flex;
      align-items: center;
       img {
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 50%;
      margin-right: 0.1rem;
    }
    }
   
  }
  .section_p {
    width: 100%;
    height: 0.5rem;
    // background: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f0f2f5;
    span {
      font-size: 0.12rem;
      color: #666666;
    }
  }
}
</style>
