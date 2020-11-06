<template>
      
  <div>
    <!-- 头部 -->
    <NavigationBar></NavigationBar>
    <NullStateJian v-show="this.list==0"></NullStateJian>
        
  </div>
</template>

<script>
import NavigationBar from "../navigation/NavigationBar"
/* 引入空状态 */
import NullStateJian from "@/components/nullState/NullStateJian";
import {getMessage} from "../../utils/api"
export default {
    components:{
        NavigationBar,
        NullStateJian,
    },
    data() {
        return {
            list:[],
           
        };
    },
    created() {

    },
    mounted() {
    this.getlist()
    },
    methods: {
    async getlist(){
        let res = await getMessage({
            page: 1,
            limit: 10,
            message_classify: "system",
        })
        console.log(res);
        this.list = res.data.list;
       
    }
    }
};
</script>

<style scoped>
</style>
