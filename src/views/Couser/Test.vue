<template>
  <div class="Text">
    <!-- 头部 -->
    <header id="header">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <span v-if="!flag" style="color:#666666;font-size:0.14rem">课程介绍</span>
      <span v-if="!flag" style="color:#666666;font-size:0.14rem">课程大纲</span>
      <span v-if="!flag" style="color:#666666;font-size:0.14rem">课程评价</span>
      <span v-if="flag">课程详情</span>
      <van-icon name="info-o" />
    </header>
    <!-- 中间 -->
    <section id="section">
      <div class="content" id="content">
        <!-- 第一块 -->
        <div class="top">
          <p>{{arr.title}}</p>
          <van-icon name="star-o" size="0.25rem" />
          <span>免费</span>
          <p class="p1">
            <span>共{{arr.total_periods}}课时</span>
            <span style="margin:0 0.1rem;">|</span>
            <span>{{arr.sales_num}}人已报名</span>
          </p>
          <p class="p1">开课时间：{{arr.start_play_date}} ~ {{arr.end_play_date}}</p>
        </div>
        <!-- 第二块 -->
        <div class="bottom">
          <p>教学团队</p>
          <div class="tou" v-for="(item,index) in arr1" :key="index">
            <div class="xiang" @click="goto(item.teacher_id)">
              <img :src="item.avatar" alt />
              <span>{{item.teacher_name}}</span>
            </div>
          </div>
        </div>
        <!-- 课程介绍 -->
        <div class="jieshao">
          <p>课程介绍</p>
        </div>
        <!-- 课程大纲 -->
        <div class="gang">
          <p>课程大纲</p>
          <div class="gang_list">
            <ul v-for="(item,index) in arr3" :key="index">
              <li>
                <div>
                  <span class="dian"></span>
                  <span class="hui">回放</span>
                  <span>{{item.periods_title}}</span>
                </div>
                <p>
                  <span
                    style="margin-right:0.18rem"
                    v-for="(i,k) in item.teachers"
                    :key="k"
                  >{{i.teacher_name}}</span>
                  <span>{{item.start_play}}</span> ~
                  <span>{{item.end_play}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 课程评论-->
        <div class="lun">
          <p>课程评论</p>
          <div class="ping">
            <ul>
              <li v-for="(item,index) in arr4" :key="index">
                <div class="tu">
                  <img :src="item.avatar" alt />
                </div>
                <div class="zi">
                  <p>
                    <span style="margin-right:0.1rem;font-size:0.14rem">{{item.nickname}}</span>
                    <van-rate v-model="item.grade" readonly size="0.14rem" color="#ea7a2f"></van-rate>
                    <span>{{item.created_at}}</span>
                  </p>
                  <p style="margin-top:0.1rem;color:#8c8c8c;font-size:0.12rem">{{item.content}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- 尾部立即报名 -->
    <footer>立即报名</footer>
  </div>
</template>
<script>
import { first, two, treen } from "../../utils/api";
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
      top: 0,
      flag: true,
      id: this.$route.query.id, //传过来的id
      arr: [], //课程内容
      arr1: [], //头像内容
      arr3: [], //课程大纲
      arr4: [], //课程评论
      page: 1, //第几页
      limit: 10 //数量
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async ajax() {
      // 课程内容
      let { data } = await first("/courseInfo/basis_id=" + this.id);
      console.log(this.id, data);
      this.arr = data.data.info;
      this.arr1 = data.data.teachers;
      // 课程大纲
      let { data: res } = await two("/courseChapter", { id: this.id });
      console.log(res);
      this.arr3 = res.data;
      // 课程评论
      let { data: lun } = await treen("/courseComment", {
        page: 1,
        limit: 10,
        id: this.id
      });
      console.log(lun);
      this.arr4 = lun.data.list;
    },
    goto(id){
      this.$router.push('/teacher?id='+id)
    },
  },
  created() {},
  /**
 /**
 * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
 * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
 */
  mounted() {
    this.ajax();
    window.addEventListener("scroll", this.handleScrollx, true);
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
  deactivated() {}
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
.Text {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
  // overflow: auto;
}
// 头部布局
header {
  height: 0.5rem;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 0.1rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.2rem;
  background: white;
  border-bottom: 1px solid #f1f1f1;
}

// 中间第一块
section {
  flex: 1;
  overflow: auto;
}
.content {
  width: 100%;
  // height: 100%;
  box-sizing: border-box;
  .top {
    width: 100%;
    box-sizing: border-box;
    padding: 0.15rem 0.15rem;
    background: white;
    position: relative;
    .van-icon {
      position: absolute;
      right: 0.2rem;
      top: 0rem;
    }
    p {
      font-size: 0.16rem;
    }
    > span {
      display: block;
      color: orange;
      width: 100%;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.2rem;
    }
    > .p1 {
      height: 0.3rem;
      font-size: 0.16rem;
      color: #8c8c8c;
    }
  }
  // 第二块
  .bottom {
    background: white;
    width: 100%;
    margin-top: 0.2rem;
    box-sizing: border-box;
    padding: 0.2rem 0.1rem;
    .tou {
      width: 100%;
      height: 1rem;
      .xiang {
        width: 0.8rem;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0.2rem 0.1rem;
        align-items: center;
        img {
          width: 0.4rem;
          height: 0.4rem;
          margin-bottom: 0.1rem;
        }
      }
    }
  }
  // 课程介绍
  .jieshao {
    width: 100%;
    height: 0.8rem;
    background: white;
    margin-top: 0.2rem;
    box-sizing: border-box;
    padding: 0.1rem 0.1rem;
  }
  // 课程大纲
  .gang {
    width: 100%;
    background: white;
    margin-top: 0.2rem;
    box-sizing: border-box;
    padding: 0.2rem 0.1rem;
    .gang_list {
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.2rem;
      ul {
        width: 100%;
        height: 100%;
        li {
          width: 100%;
          height: 100%;
          margin-top: 0.15rem;
          div {
            display: flex;
            height: 0.3rem;
            align-items: center;
            .dian {
              display: block;
              width: 0.05rem;
              height: 0.05rem;
              background: #ea7a2f;
              border-radius: 50%;
              margin-right: 0.1rem;
            }
            .hui {
              display: block;
              color: white;
              background: #ea7a2f;
              font-size: 0.12rem;
              width: 0.4rem;
              height: 0.2rem;
              text-align: center;
              line-height: 0.2rem;
              margin-right: 0.1rem;
            }
            span {
              font-size: 0.14rem;
              color: #595959;
            }
          }
          p {
            box-sizing: border-box;
            font-size: 0.14rem;
            color: #8c8c8c;
            padding: 0 0.3rem;
          }
        }
      }
    }
  }
  // 课程评论
  .lun {
    width: 100%;
    background: white;
    margin-top: 0.2rem;
    box-sizing: border-box;
    padding: 0.18rem 0.1rem;
    .ping {
      width: 100%;
      height: 100%;
      ul {
        width: 100%;
        height: 100%;
        li {
          box-sizing: border-box;
          width: 100%;
          height: 0.7rem;
          padding: 0.15rem 0.15rem;
          display: flex;
          .tu {
            width: 0.3rem;
            height: 100%;
            box-sizing: border-box;
            padding-bottom: 0.1rem;
            img {
              width: 0.3rem;
              height: 100%;
              border-radius: 50%;
            }
          }
          .zi {
            padding-left: 0.1rem;
            box-sizing: border-box;
            p {
              width: 3.2rem;
              > :nth-child(3) {
                font-size: 0.14rem;
                color: #8c8c8c;
                float: right;
              }
            }
          }
        }
      }
    }
  }
}
// 尾部
footer {
  width: 100%;
  height: 0.5rem;
  background: #ea7a2f;
  color: white;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.2rem;
  // position: fixed;
  // bottom: 0;
}
</style>