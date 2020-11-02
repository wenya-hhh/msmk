<template>
  <div class="xuexi">
    <header>
      <van-icon @click="$router.go(-1)" name="arrow-left" />
      <span>学习</span>
      <van-icon name="calendar-o" />
    </header>
    <section>
      <div class="content">
        <div class="xian">
          <span>共7课时</span>
          <div class="tiao"></div>
          <span>已学习0%</span>
        </div>
        <ul>
          <li>
            <div>
              <span class="dian"></span>
              <span class="hui">[回放]</span>
              <span>第一节就看见空间</span>
            </div>
            <p>
              <span style="margin-right:0.18rem">李青</span>
              <span>asdasasd</span> ~
              <span>894941238</span>
            </p>
            <div class="xian1">
              <div class="tiao"></div>
              <span>以观看0%</span>
            </div>
          </li>
          <li>
            <div>
              <span class="dian"></span>
              <span class="hui">[回放]</span>
              <span>第一节就看见空间</span>
            </div>
            <p>
              <span style="margin-right:0.18rem">李青</span>
              <span>asdasasd</span> ~
              <span>894941238</span>
            </p>
            <div class="xian1">
              <div class="tiao"></div>
              <span>以观看0%</span>
            </div>
          </li>
          <li>
            <div>
              <span class="dian"></span>
              <span class="hui">[回放]</span>
              <span>第一节就看见空间</span>
            </div>
            <p>
              <span style="margin-right:0.18rem">李青</span>
              <span>asdasasd</span> ~
              <span>894941238</span>
            </p>
            <div class="xian1">
              <div class="tiao"></div>
              <span>以观看0%</span>
            </div>
          </li>
          <li>
            <div>
              <span class="dian"></span>
              <span class="hui">[回放]</span>
              <span>第一节就看见空间</span>
            </div>
            <p>
              <span style="margin-right:0.18rem">李青</span>
              <span>asdasasd</span> ~
              <span>894941238</span>
            </p>
            <div class="xian1">
              <div class="tiao"></div>
              <span>以观看0%</span>
            </div>
          </li>
          <li>
            <div>
              <span class="dian"></span>
              <span class="hui">[回放]</span>
              <span>第一节就看见空间</span>
            </div>
            <p>
              <span style="margin-right:0.18rem">李青</span>
              <span>asdasasd</span> ~
              <span>894941238</span>
            </p>
            <div class="xian1">
              <div class="tiao"></div>
              <span>以观看0%</span>
            </div>
          </li>
          <li>
            <div>
              <span class="dian"></span>
              <span class="hui">[回放]</span>
              <span>第一节就看见空间</span>
            </div>
            <p>
              <span style="margin-right:0.18rem">李青</span>
              <span>asdasasd</span> ~
              <span>894941238</span>
            </p>
            <div class="xian1">
              <div class="tiao"></div>
              <span>以观看0%</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <footer>
      <div @click="showPopup">
          <van-icon name="edit" />
          <span>写评论</span>
      </div>
      <div @click="$router.push('/couserDetail')">
        <van-icon name="qr" />
        <span>课程详情</span>
      </div>
      <div>
        <van-icon name="delete" />
        <span>移除列表</span>
      </div>
    </footer>
     <van-popup v-model="show">
       <span class="cha" @click="shows()">×</span>
       <p>
         <span>星级：</span>
          <van-rate v-model="value" size="0.16rem" color="orange"/>
       </p>
       <div class="nr">
         <span>内容：</span>
         <textarea name="" id="" cols="30" rows="10"></textarea>
       </div>
       <div class="bt">
        <button>发布</button>
       </div>
     </van-popup>
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
      show:false,
      value:5,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    shows(){
      this.show = false;
    },
     showPopup() {
      this.show = true;
    },
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
.xuexi {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
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
section {
  flex: 1;
  overflow: auto;
  .content {
    background: white;
    width: 100%;
    .xian {
      height: 0.5rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 0.14rem;
      border-bottom: 1px solid #f5f5f5;
      .tiao {
        width: 2.6rem;
        height: 0.03rem;
        background: #f5f5f5;
      }
    }
    ul {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0.2rem 0.2rem 0rem;
      li {
        width: 100%;
        height: 100%;
        // margin-top: 0.15rem;
        border: 1px solid #f5f5f5;
        box-sizing: border-box;
        padding: 0.15rem;
        margin-bottom: 0.2rem;
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
            color: #ea7a2f;
            // background: #ea7a2f;
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
          padding: 0 0.1rem;
        }
        .xian1 {
          height: 0.3rem;
          display: flex;
          font-size: 0.14rem;
          // border-bottom: 1px solid #f5f5f5;
          // line-height: 0.5rem;
          .tiao {
            width: 2.6rem;
            height: 0.03rem;
            background: #f5f5f5;
          }
        }
      }
    }
  }
}
footer {
  width: 100%;
  height: 0.4rem;
  display: flex;
  border-top: 1px solid #f1f1f1;
  div {
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.12rem;
    color: #8c8c8c;
  }
}
.van-popup{
  width:4rem;
  height: 3rem;
  border-radius: 0.1rem;
  box-sizing: border-box;
  padding: 0.4rem 0.2rem;
  // position: relative;
  .cha{
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    font-size: 0.2rem;
  }
  // p{
  //   display: flex;
  // }
  .nr{
    width: 100%;
    margin-top: 0.3rem;
    display: flex;
    >span{
      text-align: left;
    }
    textarea{
      flex:1;
      border: 1px solid #bfbfbf;
      border-radius: 0.05rem;
      height: 1rem;
    }
  }
  .bt{
    width: 100%;
    height: 1rem;
    justify-content: center;
    display: flex;
    align-items: center;
    button{
      width: 0.8rem;
      height: 0.3rem;
      border:none;
      background: #ea7a2f;
      color: white;
    }
  }
}
</style>
