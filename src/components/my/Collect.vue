<template>
  <div class="collect">
    <header>
      <van-icon @click="$router.go(-1)" name="arrow-left" />
      <p>我的收藏</p>
    </header>

    <div class="content">
      <ul>
        <li @click="toCouserDetail()">
          <div>
            <div>
              <p>李老师18号20号地理大课堂开课啦</p>
              <p data-v-c6eb1152="" class="time">
                <span data-v-c6eb1152="" class="duration"
                  ><img
                    src="data:image/png;base64,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"
                  /><span data-v-c6eb1152=""
                    >02月18日 13:00 ~ 02月20日 17:00</span
                  ></span
                ><span data-v-c6eb1152="">共4课时</span>
              </p>
            </div>
            <van-icon name="star" />
          </div>


           
              <div data-v-c6eb1152="">
                <img
                  data-v-c6eb1152=""
                  src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                /><span data-v-c6eb1152="">李青</span>
              </div>
           


            <div>
              <p>68人已报名</p>
              <p data-v-c6eb1152="" class="price-now">
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                  class="price-ico"
                />
                <span>1</span>
              </p>
          </div>

        </li>
      </ul>
      <p>没有更多了</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "collect", //我的收藏
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    //   跳转到课程详情页面
    toCouserDetail() {
      this.$router.push("/couserDetail");
    },
  },
};
</script>

<style lang="scss" scoped>
.collect{
  width: 100%;
  height: 100%;
  display: flex;
  background: #f0f2f5;
  flex-direction: column;
}

header {
  width: 100%;
  height: 0.5rem;
  background: white;
  display: flex;
  padding: 0 0.1rem;
  margin-bottom: 0.2rem;
  align-items: center;
  > :nth-child(1) {
    font-size: 0.26rem;
    font-weight: bold;
    margin-right: 1.5rem;
  }
  > :nth-child(2) {
    font-size: 0.2rem;
  }
}

.content {
  flex: 1;
  overflow: auto;
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  > ul {
    width: 100%;
    margin-bottom: 0.3rem;
    justify-content: space-between;
    li {
      width: 100%;
      height: 1.75rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: white;
      padding: 0.1rem;

    >:nth-child(3){
        display: flex;
        justify-content: space-between;
        >:nth-child(1){
            color: #8C8C8C;
           font-size: 0.12rem;

        }
        >:nth-child(2){
            img{
                width: 0.08rem;
                height: 0.09rem;
            }
            >:nth-child(2){
                font-size: 0.18rem;
                color: red;
                margin-left: 0.03rem;
            }
           font-size: 0.12rem;
        }
    }
      >:nth-child(2){
           display: flex;
           height: 0.4rem;
              align-items: center;
              font-size: 0.12rem;
          img {
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.1rem;
      }
      }
      
      
      > :nth-child(1) {
       
        height: 0.77rem;
        display: flex;
        >:nth-child(1){
          height: 0.5rem;
           >:nth-child(1){
          font-size: 0.16rem;
          font-weight: bold;
        }
          >:nth-child(2){
              display: flex;
              height: 0.3rem;
              align-items: center;
              img{
                  margin-right: 0.05rem;
                  width: 0.15rem;
                  height: 0.15rem;
              }
              
          font-size: 0.14rem;
        }
        
        }
         >:nth-child(2){
             width: 0.6rem;
             text-align: end;
             line-height: 0.5rem;
          font-size: 0.16rem;
          color: #FC5500;
      }
      }



     
    }
  }
}
</style>
