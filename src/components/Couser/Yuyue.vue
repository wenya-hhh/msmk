<template>
  <div class="yuyue">
    <div class="header">
      <header>
        <span>
          <van-icon name="arrow-left" size="0.3rem" @click="$router.go(-1)" />
        </span>
        <h3>预约课程</h3>
      </header>
    </div>
    <section>
      <div class="xiang">
        <div class="top">
          <img
            data-v-0da794c7=""
            alt=""
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
          />
          <div class="zi">
            <p>
              <span>李青</span>
            </p>
            <p>
              <span>男</span>
              <span>25年教龄</span>
            </p>
          </div>
          <van-button
            round
            type="info"
            color="#EB6100"
            plain
            size="small"
            @click="$router.push()"
            >查看详情</van-button
          >
        </div>
      </div>

      <div class="list">
        <div class="list_title">
          <p class="red_title"></p>
          <span>选择时间 （北京时间）</span>
        </div>

        <div class="date"></div>
        <ul>
          
        </ul>
        <div v-show="list.length==0"  class="empty">
          <img data-v-0fa74510="" src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
          <p data-v-0fa74510="">暂无信息</p>
        </div>
      </div>
    </section>

    <footer>立即预约</footer>
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
    return {
      list: [], //课程列表
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
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
  deactivated() {},
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
.yuyue {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 1.2rem;
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
section {
  flex: 1;
  .xiang {
    width: 94%;
    // height: 1.4rem;
    background: white;
    box-sizing: border-box;
    margin: -0.7rem auto 0;
    box-sizing: border-box;
    padding: 0.1rem 0.2rem;
    border-radius: 0.05rem;
    .top {
      width: 100%;
      height: 0.88rem;
      display: flex;
      align-items: center;
      img {
        width: 0.43rem;
        margin-right: 0.1rem;
      }
      .zi {
        flex: 1;
        :nth-child(1) {
          height: 0.3rem;
          line-height: 0.3rem;
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
      // button {
      //   width: 0.7rem;
      //   height: 0.3rem;
      //   color: orange;
      //   border-radius: 0.15rem;
      //   background: #ccc;
      //   font-size: 0.12rem;
      //   border: none;
      // }
    }
  }
}

// 列表区域
.list {
  flex: 1;
  padding: 0.1rem;
  .list_title {
    margin-top: 0.1rem;
    width: 100%;
    height: 0.18rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.2rem;
    .red_title {
      width: 0.03rem;
      height: 100%;
      background: red;
    }
    > :nth-child(2) {
      font-size: 0.16rem;
      margin-left: 0.1rem;
    }
  }
  
  .date{
    width: 100%;
    height: 0.8rem;
    background: white;
  }

  .empty{
   width: 100%;
   height: 2.32rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   img{
     width: 1.64rem;
   }
   p{
     font-size: 0.16rem;
   }
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
