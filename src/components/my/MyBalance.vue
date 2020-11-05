<template>
<div class="balance">
     <van-nav-bar title="我的余额" left-text="" left-arrow @click-left="$router.go(-1)">
      <template #right @click="$router.push('/mingxi')">余额明细</template>
    </van-nav-bar>
    <div class="content">
      <div class="top">
        我的余额：<span>{{arr.coin_icon}} {{arr.coin_name}}</span>
      </div>
      <div class="middle">
        <ul>
          <li v-for="(item,index) in list" :key="index" @click="add(item.id)" :class="item.id == id?'active':''">
            <span>{{item.rmb|number}}学习币</span>
            <span>￥{{item.coin}}</span>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <h5>充值说明</h5>
        <p>{{arr.agreement}}</p>
      </div>
    </div>
    <footer :class="id!=''?'active1':''" @click="showPopup">
      立即充值
    </footer>
    <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
      <h4>充值方式</h4>
     <van-radio-group v-model="radio">
  <van-radio name="1">微信</van-radio>
  <van-radio name="2">支付宝</van-radio>
</van-radio-group>
      </van-popup>

</div>
</template>

<script>
import {gets} from '../../utils/api'
export default {
 // 组件名称
 name: '',
 // 组件参数 接收来自父组件的数据
 props: [],
 // 局部注册的组件
 components: {},
 // 组件状态值
 data () {
 return {
   radio:1,
   arr:[],
   list:[],
   id:0,
   show:false,
 }
 },
 // 计算属性
 computed: {},
 // 侦听器
 watch: {},
 // 组件方法
 methods: {
     showPopup() {
      this.show = true;
    },
   add(id){
     this.id = id
   },
   async shuju(){
     let {data} = await gets('/api/app/coin/coinRank?')
     console.log(data)
     this.arr = data.coinInfo
     this.list = data.list
   }
 },
 filters: {
    //保留2位小数点过滤器 不四舍五入
    number(value) {
      var toFixedNum = Number(value).toFixed(3);
      var realVal = toFixedNum.substring(0, toFixedNum.toString().length - 1);
      return realVal;
    }
  },
 /**
 * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
 */
 created () {
 },
 /**
 /**
 * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
 * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
 */
 mounted () {
   this.shuju()
 },
 /**
 * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
 * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
 */
 updated () {
 },
 /**
 * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
 */
 activated () {
 },
 /**
 * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
 */
 deactivated () {
 },
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
.van-popup{
//     box-sizing: border-box;
    // padding:0.2rem 0.3rem;
    h4{
      margin-top:0.2rem;
      margin-left:0.3rem;
    }
}
.balance{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.van-nav-bar{
  height: 0.5rem;
}
footer{
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
 background-color: rgb(204, 204, 204);
}
.active1{
  background: #eb6100;
}
.content{
  flex:1;
  .top{
    height: 0.6rem;
    background: white;
    box-sizing: border-box;
    padding: 0 0.2rem;
    line-height: 0.6rem;
    span{
      color:red;
    }
  }
  .middle{
    width: 100%;
    // height: 100%;
    ul{
      width: 100%;
      // height: 100%;
      box-sizing: border-box;
      padding: 0.2rem 0.2rem 0;
      li{
        width: 100%;
        height: 0.6rem;
        display: flex;
        box-sizing: border-box;
        padding: 0.2rem;
        justify-content: space-between;
        align-items: center;
        background: white;
        border-radius: 0.1rem;
        margin-bottom: 0.2rem;
        span:nth-child(2){
          color: red;
        }
      }
      .active{
        border: 0.01rem solid #eb6100;
        background: #fcede2;
        box-shadow: 0 0.05rem 0.05rem 0 rgba(235,97,0,.75);
      }
    }
  }
  .bottom{
      background: white;
      box-sizing: border-box;
      padding: 0 0.2rem 0.2rem;
      h5{
        line-height: 0.4rem;
      }
      p{
        font-size: 0.14rem;
        color: #8c8c8c;
      }
  }
}
</style>
