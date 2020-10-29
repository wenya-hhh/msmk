<template>
  <div>
    <!-- 头部组件 -->
    <NavigationBar></NavigationBar>
    <!-- 搜索栏 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" height="1rem" />
    <!-- 侧边导航 -->
    <van-row>
      <!-- 侧边导航 -->
      <van-col span="6"
        ><van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="(item,index) in list"
            :key="index"
            :title="item.name"
            @click="change(item)"
          /> </van-sidebar
      ></van-col>
      <!-- 右边数据 -->
      <van-col span="18">
        <p v-for="(item,index) in goodlist" :key=" index" >
          {{ item.title }}
        </p>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import axios from "axios";
import NavigationBar from "@/components/navigation/NavigationBar";
export default {
  name: "one",
  components: {
    NavigationBar,
  },
  data() {
    return {
      value: "",
      goodlist: [],
      list: [
        { id: "1", index: "0", name: "求导题库" },
        { id: "2", index: "1", name: "极限题库" },
        { id: "3", index: "2", name: "生物" },
        { id: "4", index: "3", name: "化学" },
        { id: "5", index: "4", name: "数学" },
        { id: "6", index: "5", name: "物理" },
        { id: "7", index: "6", name: "英语" },
        { pid: "1", activeKey: "0", title: "小学英语" },
        { pid: "2", activeKey: "1", title: "两个重要" },
        { pid: "3", activeKey: "2", title: "高生物中" },
        { pid: "4", activeKey: "3", title: "化学实验" },
        { pid: "5", activeKey: "4", title: "初中数学" },
        { pid: "6", activeKey: "5", title: "初中物理" },
        { pid: "7", activeKey: "6", title: "初中英语" },
      ],
      activeKey: 0,
      // type: "1",
    };
  },
  mounted() {
    this.goodlist = [{pid:"1",activeKey:"0",title:"小学英语"}]
  },
  // computed: {
  //   listInfo() {
  //     if (this.list != []) {
  //       console.log(this.list);
  //       let data = this.list.filter((res) => {
  //         return res.id == this.type;
  //       });

  //       console.log(data);
  //       let list= data[0].children || [];
  //       return list 
  //     }else{
  //       return [];
  //     }
  //   },
  // },
  methods: {
    /* 侧边栏数据 */
    // async getlist() {
    //   let { data } = await axios.get("http://localhost:8080/list.json");
    //   console.log(data.data);
    //   this.list = data.data;
    // },

    change(item,index) {
      // this.type = id;
      this.activeKey = index;
      this.goodlist = [];
      this.list.forEach((ele)=>{
        if(ele.pid === item.id){
          this.goodlist.push(ele);
        }
        console.log(this.goodlist);
      })
    },
  },
};
</script>
<style scoped>
.slide_container {
  display: flex;
}
.slide_left_container {
  width: 50%;
}
p {
  font-size: 0.2rem;
}
</style>