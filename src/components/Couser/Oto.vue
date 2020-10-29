<template>
  <div class="oto">
    <!-- 头部 -->
    <header>
      <i @click="$router.go(-1)" class="el-icon-arrow-left"></i>
      <p>一对一辅导</p>
      <i class="el-icon-search"></i>
    </header>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 选项卡 -->
      <div class="tab">
        <p @click="content = 1" :class="content == 1 ? 'bottom' : ''">
          选择上课时间<span></span>
        </p>
        <p @click="content = 2" :class="content== 2 ? 'bottom' : ''">
          选择老师条件<span></span>
        </p>
      </div>

      <!-- 日期 -->
      <div  v-show="content==1" class="date">
         
        <van-calendar
          :show-title="false"
          type="single"
          :poppable="false"
          lazy-render
          row-height="0.6rem"
          :show-confirm="false"
          :style="{ height: '3rem' }"
        />

        <!-- 时段 -->
        <div class="shiduan">
          <p>时段</p>
          <div>
            <p @click="changeTime(1)">
              <input v-model="startTime"  placeholder="开始时间" type="text" /><span
                ><van-icon name="underway"
              /></span>
            </p>
            <p  @click="changeTime(2)">
              <input v-model="endTime" placeholder="结束时间" type="text" /><span
                ><van-icon name="underway"
              /></span>
            </p>
          </div>
        </div>

<!-- 日期弹框 -->
<van-popup position="bottom" v-model="popup_show">
 <div style="width:100%;">
        <van-datetime-picker
          v-model="currentTime"
          @confirm="confirm"
          @canel="canel"
          type="time"
          title="选择时间"
          :min-hour="10"
          :max-hour="20"
        />
   </div>

</van-popup>

        <!-- 按钮 -->
        <div class="date_btn">
          <button>重置</button>
          <button>确定</button>
        </div>
      </div>

      <!-- 列表 -->
      <div v-show="content == 3" class="mingxing">
        <ul>
          <li>
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
              alt=""
            />
            <div>
              <p>
                <span>杨德胜</span>
              </p>
              <p>男 9000年教龄(孔子也是我学生)</p>
            </div>
            <p>预约</p>
          </li>
        </ul>
      </div>
     
       <!-- 选择老师条件区域 -->

      <div v-show="content==2" class="Teacher_condition">
         
         <p>老师类型</p>
         <ul>
             <li v-for="i in 20" :key="i">
                 M{{i}}
             </li>
         </ul>
          
        
          
         
   <div class="date_btn">
          <button>重置</button>
          <button>确定</button>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "oto", //一对一辅导页面
  data() {
    return {
      content: 3,
      currentTime: "12:00",
      drawer: false,
      popup_show: false,
      startTime: "",
      endTime: "",
      status: 1, //开始和结束时间的状态
    };
  },
  created() {},
  mounted() {},
  methods: {
    //   确定时间
    confirm(val) {
      this.popup_show = false;
      console.log(val);
      if (this.status == 1) {
        this.startTime = val;
      } else {
        this.endTime = val;
      }
    },
    //   取消
    canel() {
      this.popup_show = false;
    },

    //   选择时间
    changeTime(val) {
      this.status = val;
      this.popup_show = !this.popup_show;
    },
  },
};
</script>

<style lang="scss" scoped>
// 选择老师条件区域
.Teacher_condition {
  width: 100%;
  background: white;
  height: 100%;
  padding: 0.2rem;
  > p {
    font-size: 0.16rem;
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.2rem;
    border-bottom: 0.01rem solid slategrey;
    justify-content: space-between;
    li {
      width: 0.75rem;
      height: 0.36rem;
      background: #f5f5f5;
      text-align: center;
      line-height: 0.36rem;
      margin-bottom: 0.1rem;
    }
  }
}

.oto {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 头部 */
header {
  width: 100%;
  height: 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: 0.01rem solid #f5f5f5;
  justify-content: space-between;
  > :nth-child(1),
  > :nth-child(3) {
    width: 0.4rem;
    height: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.22rem;
    font-weight: bold;
  }
  > :nth-child(2) {
    font-size: 0.2rem;
  }
}

// 内容区域
.content {
  flex: 1;
  background: #f0f2f5;
  overflow: auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

// 选项卡
.tab {
  width: 100%;
  height: 0.46rem;
  display: flex;
  background: white;
  p {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.16rem;

    span {
      height: 0;
      width: 0;
      overflow: hidden;
      font-size: 0;
      line-height: 0;
      border-style: solid;
      border-width: 0.08rem;
      margin-left: 0.1rem;
      margin-top: 0.13rem;
      border-color: #cacaca transparent transparent transparent;
    }
  }

  .bottom {
    color: red;
    span {
      margin-bottom: 0.2rem;
      border-color: transparent transparent red transparent;
    }
  }
}

// 列表
.mingxing {
  width: 100%;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
    li {
      width: 100%;
      background: white;
      margin-bottom: 0.2rem;
      display: flex;
      border-radius: 0.08rem;
      padding: 0.16rem;
      height: 0.88rem;
      align-items: center;
      img {
        width: 0.43rem;
        height: 0.43rem;
        margin-right: 0.15rem;
        border-radius: 50%;
      }
      > :nth-child(3) {
        width: 0.76rem;
        height: 0.34rem;
        text-align: center;
        line-height: 0.34rem;
        background: #ebeefe;
        border-radius: 0.2rem;
        color: #eb6100;
      }
      div {
        width: 2.23rem;
        height: 0.47rem;

        > :nth-child(1) {
          margin-bottom: 0.05rem;
          > :nth-child(1) {
            font-size: 0.22rem;
            margin-right: 0.05rem;
          }
        }
        > :nth-child(2) {
          font-size: 0.14rem;
          color: #b7b7b7;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}

// 日期
.date {
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  .shiduan {
    width: 3.7rem;
    height: 1rem;
    position: absolute;

    top: 3.4rem;
    background: white;
    display: flex;
    padding: 0.2rem;
    flex-direction: column;
    > :nth-child(1) {
      height: 0.18rem;
      font-size: 0.16rem;
      margin-bottom: 0.1rem;
    }
    > div {
      display: flex;
      justify-content: space-between;
      p {
        width: 1.56rem;
        height: 0.36rem;
        border: 0.01rem solid slategray;
        display: flex;
        justify-content: space-between;
        align-items: center;

        input {
          width: 1.19rem;
          height: 0.18rem;
          margin-left: 0.1rem;
          border: 0;
          background: #fafafa;
        }
        span {
          width: 0.36rem;
          height: 0.2rem;
          background: white;
          i {
            color: #c8c8c8;
          }
        }
      }
    }
  }
}
.date_btn {
  width: 100%;
  height: 0.46rem;
  position: absolute;
  bottom: 0;
  display: flex;
  left: 0;
  > :nth-child(1) {
    width: 50%;
    height: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    border: 0;
  }
  > :nth-child(2) {
    width: 50%;
    height: 100%;
    border: 0;

    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
}
</style>
