<template>
  <div class="teacher">
    <div class="header">
      <header>
        <span>
          <van-icon name="arrow-left" size="0.3rem" />
        </span>
        <h3>讲师详情</h3>
      </header>
    </div>
    <section>
      <div class="xiang">
        <div class="top">
          <img src alt />
          <div class="zi">
            <p>
              <span>李青</span>
              <span>M20</span>
            </p>
            <p>
              <span>男</span>
              <span>25年教龄</span>
            </p>
          </div>
          <button>关注</button>
        </div>
        <div class="xia">
          <span>阿萨大大</span>
          <span>阿萨大大</span>
          <span>阿萨大大</span>
          <span>阿萨大大</span>
        </div>
      </div>
      <div class="box">
        <div class="list">
          <van-tabs line-width="0.1rem" title-active-color="#EB6100">
            <van-tab title="讲师介绍">
              <div class="nr">
                <ul>
                  <li>
                    <span>教学年龄</span>
                    <font>asda</font>
                  </li>
                  <li>
                    <span>受教价格</span>
                    <font>asda</font>
                  </li>
                  <li>
                    <span>受教价格</span>
                    <font>啊实打实大苏打实打实大苏打实打实大苏打啊实打实大苏打萨达萨达萨达萨达萨达是的撒旦撒的</font>
                  </li>
                </ul>
              </div>
            </van-tab>
            <van-tab title="主讲课程"></van-tab>
            <van-tab title="学员评价"></van-tab>
          </van-tabs>
        </div>
      </div>
    </section>

    <footer @click="$router.push('/yuyue')">立即预约</footer>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    onClickLeft() {
      Toast("返回");
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  /**
 /**
 * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
 * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
 */
  mounted() {},
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
.teacher {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 1rem;
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
section{
    flex: 1;

}
.xiang {
  width: 94%;
  // height: 1.4rem;
  background: white;
  box-sizing: border-box;
  margin: -0.5rem auto 0;
  box-sizing: border-box;
  padding: 0 0.2rem;
  border-radius: 0.05rem;
  .top {
    width: 100%;
    height: 0.7rem;
    display: flex;
    align-items: center;
    .zi {
      flex: 1;
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
      color: orange;
      border-radius: 0.15rem;
      background: #ccc;
      font-size: 0.12rem;
      border: none;
    }
  }
  .xia {
    width: 100%;
    height: 0.6rem;
    box-sizing: border-box;
    padding-bottom: 0.2rem;
    display: flex;
    justify-content: space-between;
    span {
      width: 0.8rem;
      height: 0.3rem;
      border-radius: 0.15rem;
      background: #ccc;
      color: orange;
      font-size: 0.12rem;
      text-align: center;
      line-height: 0.3rem;
    }
  }
}
.box {
  width: 100%;
  height: 4.5rem;
  background: white;
  margin-top: 0.2rem;
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
    height: 4rem;
  }
}
footer {
  width: 100%;
  height: 0.5rem;
  background: #ea7a2f;
  color: white;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.2rem;
}
</style>
