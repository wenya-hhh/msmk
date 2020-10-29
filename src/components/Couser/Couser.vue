<template>
  <div class="couser">
    <header>
      <!-- 标题导航栏 -->
      <van-nav-bar title="特色课">
        <template #right>
          <van-icon name="search" size="24" color="black" />
        </template>
      </van-nav-bar>
      <!-- 分类排序筛选 -->
      <van-dropdown-menu>
        <!-- 分类 -->
        <van-dropdown-item title="分类" ref="item">
          <div class="box">
            <div class="top">
              <p>年级</p>
              <div class="s">
                <span>初一</span>
                <span>初二</span>
                <span>初三</span>
                <span>高一</span>
                <span>高二</span>
              </div>
            </div>
            <div class="top">
              <p>学科</p>
              <div class="s">
                <span>语文</span>
                <span>数学</span>
                <span>英语</span>
                <span>物理</span>
                <span>化学</span>
              </div>
            </div>
            <div class="bt">
              <button style="border: 1px solid #f1f1f1;">重置</button>
              <button style="background:orange;color:white">确定</button>
              <!-- <van-button type="default">重置</van-button>
              <van-button type="danger">确定</van-button>-->
            </div>
          </div>
        </van-dropdown-item>
        <!-- 排序 -->
        <van-dropdown-item title="排序">
          <ul>
            <li style="color:#ee0a24">综合排序</li>
            <li>最新</li>
            <li>最热</li>
            <li>价格从低到高</li>
            <li>价格从高到低</li>
          </ul>
        </van-dropdown-item>
        <!-- 筛选 -->
        <van-dropdown-item title="筛选">
          <div class="shai">
            <span class="active">全部</span>
            <span>大班课</span>
            <span>小班课</span>
            <span style="margin-right:0;">公开课</span>
            <span>点播课</span>
            <span>面授课</span>
            <span>音频课</span>
            <span style="margin-right:0;">系统课</span>
            <span>图文课</span>
            <span>会员课</span>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </header>
    <!-- 中间课程 -->
    <section>
      <div class="con">
      <div class="list" v-for="(item,index) in arr" :key="index" @click="$router.push('/couserDetail?id='+item.id)">
        <p>{{item.title}}</p>
        <div class="time">
          <van-icon name="clock-o" style="margin-right:0.1rem" />
          <span>{{item.start_play_date|time}} ~ {{item.end_play_date|time}}</span>
          <span style="margin-left:0.1rem;margin-right:0.1rem;">|</span>
          <span>共{{item.total_periods}}课时</span>
        </div>
        <div class="tou" v-for="(i,k) in item.teachers_list" :key="k">
          <img :src="i.teacher_avatar" alt />
          <span>{{i.teacher_name}}</span>
        </div>
        <p class="section_p">
          <span>{{item.sales_num}}人已报名</span>
          <span style="color:green;font-size:0.18rem">免费</span>
        </p>
      </div>
     </div>
    </section>
  </div>
</template>

<script>
import { all } from "../../utils/api";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      arr: [],
      page: 1,
      limit: 10,
      switch1: false,
      switch2: false
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    // 获取的数据
    async ajax() {
      let { data } = await all({ page: this.page, limit: this.limit });
      console.log(data);
      this.arr = data.data.list;
      console.log(data.data.list);
    },
    handleScrollx() {
      // console.log('滚动高度', window.pageYOffset)
      // console.log( this.$refs.content.scrollTop)
    }
  },
  filters: {
    time: function(val) {
      var obj = new Date(val);
      // 月
      var month = (obj.getMonth() + 1).toString().padStart(2, "0");
      // 日
      var day = obj
        .getDate()
        .toString()
        .padStart(2, "0");
      // 时
      var hour = obj
        .getHours()
        .toString()
        .padStart(2, "0");
      // 分
      var minute = obj
        .getMinutes()
        .toString()
        .padStart(2, "0");
      return month + "月" + day + "日" + " " + hour + ":" + minute;
    }
  },
  created() {},
  mounted() {
    this.ajax();
    window.addEventListener("scroll", this.handleScrollx, true);
  },
  updated() {},
  activated() {},
  deactivated() {}
};
</script> 
<style scoped lang="scss">
.couser {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // overflow: auto;
}
header{
  width: 100%;
  height: 1rem;
}
// 分类布局
.box {
  padding-left: 0.2rem;
  padding-bottom: 0.1rem;
  .top {
    padding-bottom: 0.1rem;
    border-bottom: 1px solid #f1f1f1;
    p {
      padding: 0.1rem 0 0.1rem;
      font-size: 0.16rem;
      color: #595959;
    }
    .s {
      display: flex;
      flex-wrap: wrap;
      span {
        display: block;
        margin-right: 0.23rem;
        margin-bottom: 0.2rem;
        width: 19%;
        height: 0.4rem;
        background: #f5f5f5;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.4rem;
        color: #595959;
      }
    }
  }
  .bt {
    box-sizing: border-box;
    padding: 0.1rem 0.1rem 0;
    display: flex;
    justify-content: space-between;
    button {
      width: 48%;
      background: white;
      height: 0.4rem;
      border: none;
    }
  }
}

// 排序布局
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    border-top: 1px solid #f1f1f1;
  }
}
// 筛选布局
.shai {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0.2rem 0.1rem;
  span {
    width: 20%;
    margin-right: 0.25rem;
    margin-bottom: 0.1rem;
    display: block;
    height: 0.35rem;
    background: #f5f5f5;
    font-size: 0.12rem;
    text-align: center;
    line-height: 0.35rem;
    color: #595959;
  }
  .active {
    color: #eb6100;
    background: #ebeefe;
  }
}
// 中间课程布局
section{
  flex: 1;
  overflow: auto;
}
.con {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0.15rem 0.15rem;
  background: #f0f2f5;
  .list {
    width: 100%;
    // height: 1.9rem;
    background: white;
    box-sizing: border-box;
    padding: 0 0.15rem;
    margin-bottom: 0.15rem;
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
      width: 0.8rem;
      height: 0.7rem;
      display: flex;
      font-size: 0.12rem;
      align-items: center;
      color: #666666;
      img {
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.1rem;
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
}
</style>
