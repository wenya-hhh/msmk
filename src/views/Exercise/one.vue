<template>
  <div>
    <!-- 头部组件 -->
    <NavigationBar></NavigationBar> 
    <!-- 搜索栏 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" height="1rem" />
    <!-- 侧边导航 -->
    <van-row>
        <!-- 侧边导航 -->
  <van-col span="6"><van-sidebar v-model="activeKey" >
      <van-sidebar-item v-for="item in list"
       :key="item.id"
        :title="item.title"
        @click="change(item.id)"/>
    </van-sidebar></van-col>
    <!-- 右边数据 -->
  <van-col span="18">
     
      <p v-for="item in listInfo" :key="item.id" :title="item.title">{{item.title}}</p>
  </van-col>
</van-row>
    
 
  </div>
</template>
<script>
import axios from "axios"
import NavigationBar from "@/components/navigation/NavigationBar";
export default {
 name:"one",
  components: {
    NavigationBar,
  },
  data() {
    return {
      value: "",
      list: [],
    
      
      activeKey: 0,
      type:1
    };
  },
  mounted() {
      this.getlist();
     
  },
  computed:{

      listInfo(){
           console.log(this.list)
           let data = this.list.filter((res)=>{
               return res.id==this.type
           })

           console.log(data)

           return data.children

      }

  },
  methods: {
      /* 侧边栏数据 */
  async  getlist() {
       let {data} = await axios.get("http://localhost:8080/list.json")
        console.log(data.data);
        this.list = data.data;
    
    },
  
    change(id) {

        this.type=id
     
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
p{
    font-size: 0.2rem;
}
</style>