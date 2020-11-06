<template>
  <div class="couser">
    <header>
      <!-- 标题导航栏 -->
      <van-nav-bar title="特色课">
        <template #right>
          <van-icon @click="toSearch()" name="search" size="24" color="black" />
        </template>
      </van-nav-bar>
      <!-- 分类排序筛选 -->
      <van-dropdown-menu>
        <!-- 分类 -->
        <van-dropdown-item title="分类" ref="classify">
          <div class="box">
            <div class="top" v-for="(i,k) in attrclassify" :key="k">
              <p>{{i.name}}</p>
              <div class="s">
                <span :class="{ 'active': grade == i.id+'.'+item.id || subject == i.id+'.'+item.id }" @click="classify(k,i.id,item.id)" v-for="(item,key) in i.child" :key="key">{{item.name}}</span>
               
              </div>
            </div>
            <!-- <div class="top">
              <p>学科</p>
              <div class="s">
                <span>语文</span>
              
              </div>
            </div> -->
            <div class="bt">
              <button @click="classifyReset()" style="border: 1px solid #f1f1f1">重置</button>
              <button @click="submitClassify" style="background: orange; color: white">确定</button>
              <!-- <van-button type="default">重置</van-button>
              <van-button type="danger">确定</van-button>-->
            </div>
          </div>
        </van-dropdown-item>
        <!-- 排序 -->
        <van-dropdown-item ref="sort" title="排序">
          <ul>
            <li v-for="(i,k) in sortArr" :key="k" :class="{'sortActive':k==sortActive}" @click="sort(k)">{{i}}</li>
           
          </ul>
        </van-dropdown-item>
        <!-- 筛选 -->
        <van-dropdown-item ref="screen" id="screen" title="筛选">
          <div class="shai">
            <span
              @click="selectAppCourseType(k, i.id)"
              v-for="(i,k) in appCourseType"
              :key="k"
              :class="{ active: k == appCourseTypeActive }"
              >{{ i.name }}</span
            > 
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </header>
    <!-- 中间课程 -->
    <section>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :offset="offsetTop"
        :immediate-check="false"
        @load="onLoad"
      >
        <van-cell v-for="(item, index) in arr" :key="index">
          <div @click="$router.push('/couserDetail?couserDetailId=' + item.id)">
            <p>{{ item.title }}</p>
            <div class="time">
              <van-icon name="clock-o" style="margin-right: 0.1rem" />
              <span
                >{{ item.start_play_date | time }} ~
                {{ item.end_play_date | time }}</span
              >
              <span style="margin-left: 0.1rem; margin-right: 0.1rem">|</span>
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
    </section>
  </div>
</template>

<script>
import { all , classify,classifys } from "../../utils/api";
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
      sortActive:0,
      grade:1.1,
      subject:2.1,
      sortArr:[
        "综合排序","最新","最热","价格从低到高","价格从高到低",
      ],

    attrclassify:[
          
        ],
      appCourseTypeActive: 0,
      switch1: false,
      switch2: false,
      loading: false,
      finished: false,
      appCourseType: [],
      classifyObj:{
         page: 1,
        limit: 4,
        course_type:"",
        classify_id:"",
        order_by:"",
        attr_val_id:"",
        is_vip: 0,
      },
      total: "",
      lastpage: "",
      offsetTop: 0,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {

    // 跳转到搜索
    toSearch(){
        this.$router.push("/search")
    },
  
  // 排序
    sort(k){
       this.sortActive=k
      this.classifyObj.order_by=k
        this.ajax()
       this.$refs.sort.toggle()

    },

    // 选择课程类型
    selectAppCourseType(k, id) {
      this.appCourseTypeActive = k;
      this.$refs.screen.toggle()
      this.classifyObj.course_type=id
      this.classifyObj.page=1
      this.classifyObj.limit=4
      this.ajax();
     
    },
    
    // 确定分类
    submitClassify(){
        this.classifyObj.page=1
      this.classifyObj.limit=4
       this.ajax()
       
       this.$refs.classify.toggle()

       
    },

    // 课程分类重置
    classifyReset(){
       this.classifyObj={
           page: 1,
        limit: 4,
        course_type:"",
        classify_id:"",
        order_by:"",
        attr_val_id:"",
        is_vip: 0,
       }

      this.ajax()
       this.$refs.classify.toggle()
    },

    // 分类
    classify(k,i,t){
       if(i==1){
        this.grade=i+"."+t
       }else{
this.subject=i+"."+t
       }

       this.classifyObj.attr_val_id=i+','+t
      
    
       console.log(this.grade)
       

    },
   
  //  特色课分类
    async getClassify() {
      
      let res = await classify();
      let data =await classifys()
      console.log(res);
      // console.log(data);

       this.appCourseType = data.data.data.appCourseType;
       this.attrclassify=res.data.attrclassify
      console.log(this.attrclassify)
    },

    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        if (this.classifyObj.limit < this.total) {
          this.classifyObj.limit+=5;
          this.ajax();
        } else {
          this.finished = true;
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.arr.length >= this.total) {
          this.finished = true;
        }
      }, 1000);
    },

    // 获取的数据
    async ajax() {
     
      
      let res = await all(this.classifyObj);
      console.log(res);
      this.lastpage = res.data.last_page;
      this.total = res.data.total;
      this.arr=res.data.list;
      console.log(this.arr);

    },
   
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
  created() {},
  mounted() {
    this.ajax();
    this.getClassify();
  },
  updated() {},
  activated() {},
  deactivated() {},
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
header {
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
 .active {
    color: #eb6100 !important;
    background: #ebeefe !important;
  }
.sortActive{
  color: #ee0a24;
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
 
}
// 中间课程布局
section {
  flex: 1;
  overflow: auto;
}

.van-list {
  width: 100%;
  min-height: 101%;
  padding: 0.15rem 0.15rem;
  background: #F0F2F5;

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
