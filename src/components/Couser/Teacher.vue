<template>
  <div class="teacher">
    <div class="header">
      <header>
        <span>
          <van-icon name="arrow-left" size="0.3rem" @click="$router.go(-1)" />
        </span>
        <h3>讲师详情</h3>
      </header>
      <!-- <Navigation></Navigation> -->
    </div>
     <div class="xiang">
        <div class="top">
          <img :src="info.avatar" alt />
          <div class="zi">
            <p>
              <span>{{ info.real_name }}</span>
              <span>M20</span>
            </p>
            <p>
              <span>男</span>
              <span>25年教龄</span>
            </p>
          </div>
          <button @click="collectTeacher" v-show="flag == 2">关注</button>
          <p @click="collectTeacher" v-show="flag == 1" class="cancel">已关注</p>
        </div>
        <div class="xia">
          <span v-for="(i, k) in commentList" :key="k">{{ i.title }}</span>
        </div>
      </div>
    <section>
     
      <div class="box">
        <div class="list">
          <van-tabs line-width="0.1rem" title-active-color="#EB6100">
            <van-tab title="讲师介绍">
              <div class="nr">
                <ul>
                  <li>
                    <span>教学年龄</span>
                    <font>99</font>
                  </li>
                  <li>
                    <span>授课价格</span>
                    <font>900学习币</font>
                  </li>
                  <li>
                    <span>教师简介</span>
                    <font>{{ info.introduction }}</font>
                  </li>
                </ul>
              </div>
            </van-tab>
            <van-tab  title="主讲课程">
               <div class="content">

                <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :offset="offsetTop"
        :immediate-check="false"
        @load="onLoad"
      >
        <van-cell v-for="(item, index) in list" :key="index">
          <div @click="$router.push('/couserDetail?couserDetailId=' + item.id)">
            <p>{{ item.title }}</p>
            <div class="time">
             
             
              <span>共{{ item.total_periods }}课时</span>
            </div>
            <div class="tou" v-for="(i, k) in item.teachers_list" :key="k">
              <p>
                 <img :src="i.teacher_avatar" alt />
              <span>{{ i.teacher_name }}</span>
              </p>
             
              <img v-show="item.has_buy==1" src="@/assets/img/has_buy.png" alt="">
            </div>
            <p class="section_p">
              <span>{{ item.sales_num }}人已报名</span>
              <span style="color: green; font-size: 0.18rem">免费</span>
            </p>
          </div>
        </van-cell>
      </van-list>
               </div>

            </van-tab>
            <van-tab title="学员评价">
              <Null title="暂无评论"></Null>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </section>

    <footer @click="$router.push('/yuyue')">立即预约</footer>
  </div>
</template>

<script>
// import Navigation from "@/components/navigation/NavigationBar"
import Null from "@/components/null"
import { teacher, teacherInfo, mainCourse, teacherComment,attention } from "@/utils/api";
export default {
  // 组件名称
  name: "",
  components:{
    Null
  },
  data() {
    return {
      info: "",
      recomment: "", //老师介绍
      flag: 2,
      commentList: [],
      courseList: [],
      total: "",
      page: 1,
      limit: 1,
      list:[],
      offsetTop:3,
      finished: false,
      loading: false,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    onClickLeft() {
      //返回
      Toast("返回");
    },
    
    // 取消关注
  async cancel(){

  },

    // 关注讲师
   async collectTeacher(){
     
     let res = await attention(this.$route.query.teacherId)
     console.log(res)
     if(res.code==200){

       if(this.flag==2){
          this.$toast("关注成功")
       }else{
          this.$toast("取消关注")

       }
      
       this.getTeacher()
     }
    },

    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        if (this.limit < this.total) {
          this.limit += 1;
          this.mainCourse();
        } else {
          this.finished = true;
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.total) {
          this.finished = true;
        }
      }, 1000);
    },

    // 获取讲师信息
    async getTeacher() {
      let res = await teacher(this.$route.query.teacherId);

      console.log(res);
      this.info = res.data.teacher;
      this.flag = res.data.flag;
    },

    //  获取老师介绍
    async getTeacherInfo() {
      let res = await teacherInfo(this.$route.query.teacherId);

      console.log(res);
    },

    // 讲师评价
    async getcomment() {
      let res = await teacherComment({
        teacher_id: this.$route.query.teacherId,
        page: 1,
        limit: 2,
      });

      console.log(res);
      this.commentList = res.data.comment.list;
    },

    //  主讲课程
    async getMainCourse() {
      let res = await mainCourse({
        page: 1,
        limit: 10,
        teacher_id: this.$route.query.teacherId,
      });

      console.log(res);
      this.total = res.total;
      this.list = res.data.list;
    },
  },

  mounted() {
    this.getTeacher();
    this.getTeacherInfo();
    this.getcomment();
    this.getMainCourse();
  },

  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {},
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {},
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
.teacher {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: auto;
}
.header {
  width: 100%;
  height: 1.21rem;
  background: linear-gradient(180deg, #63b7fe, #4e7de3);
  color: white;
  header {
    width: 100%;
    height: 0.5rem;
    display: flex;
    box-sizing: border-box;
    padding: 0 0.2rem;
    align-items: center;
    h3 {
      width: 3.3rem;
      text-align: center;
    }
  }
}
.xiang {
  width: 94%;
  // height: 1.4rem;
  background: white;
  position: absolute;
  left: 0.11rem;
  padding:0.1rem;
  top: 0.6rem;
  height: 1.3rem;
  border-radius: 0.05rem;
  img {
    width: 0.48rem;
    height: 0.48rem;
    border-radius: 50%;
    margin-right: 0.2rem;
  }
  .top {
    width: 100%;
    height: 0.5rem;
    display: flex;
    align-items: center;
    .zi {
      width: 2rem;
      :nth-child(1) {
        height: 0.2rem;
        line-height: 0.2rem;
        :nth-child(2) {
          color: red;
          font-size: 0.12rem;
          margin-left: 0.1rem;
        }
      }
      :nth-child(2) {
        font-size: 0.12rem;
        color: #8c8c8c;
      }
    }
    button {
      width: 0.7rem;
      height: 0.3rem;
      color: #eb6100;
      border-radius: 0.15rem;
      background: #ebeeee;
      font-size: 0.12rem;
      border: none;
    }
    .cancel {
      font-size: 0.18rem;
     color: #B7B7B7;
     margin-left: 0.2rem;
    }

  }
  .xia {
    width: 100%;
    height: 0.4rem;
    box-sizing: border-box;
    padding-bottom: 0.2rem;
    display: flex;
    justify-content: space-between;
    span {
      width: 0.8rem;
      height: 0.2rem;
      border-radius: 0.15rem;
      background: #ffe4d3;
      color: #eb6100;
      font-size: 0.14rem;
      text-align: center;
      line-height: 0.3rem;
    }
  }
}
section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  // overflow: auto;
}

.box {
  width: 100%;
 flex: 1;
  background: white;
  margin-top: 1rem;
  .list {
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.01rem solid #eee;
    .van-tabs {
      width: 100%;
      height: 100%;
      ul {
        width: 100%;
        // height: 100%;
        box-sizing: border-box;
        padding: 0 0.2rem;
        background: white;
        li {
          display: flex;
          font-size: 0.14rem;
          line-height: 0.44rem;
          font-family: PingFangSC-Regular;
          color: #8c8c8c;
          padding-top: 0.15rem;
          span {
            margin-left: 0.1rem;
            margin-right: 0.2rem;
          }
          font {
            padding-top: 0.13333rem;
            padding-top: 1.33333vw;
            line-height: 0.8rem;
            line-height: 8vw;
            flex: 1;
          }
        }
      }
    }
  }
  .nr {
    width: 100%;
   
  }
}
footer {
  width: 100%;
  height: 0.5rem;
  background: #EB6100;
  color: white;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.2rem;
}

.van-list {
  width: 100%;
  padding: 0.15rem 0.15rem;
  background: #F0F2F5;
  overflow: auto;

}
.van-cell {
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
