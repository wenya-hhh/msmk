<template>
    <div>
        <!-- 头部 -->
        <NavigationBar></NavigationBar>
        <div class="list" v-show="this.list == 0">
            <ul>
                <li @click="$router.push('/kechengTz')">
                    <div class="photo"><img src="@/assets/消息1.jpg" alt=""></div>
                    
                    <div class="title">
                        <p class="p1">课程通知</p>
                        <p class="p2">暂无消息</p>
                    </div>
                </li>
                <li @click="$router.push('/xitongTz')">
                    <div class="photo"><img src="@/assets/xiaoxi2.jpg" alt=""></div>
                    
                    <div class="title">
                        <p class="p1">系统通知</p>
                        <p class="p2">暂无消息</p>
                    </div>
                </li>
                <li @click="$router.push('/dingdanTz')">
                    <div class="photo"><img src="@/assets/xiaoxi3.jpg" alt=""></div>
                    
                    <div class="title">
                        <p class="p1">订单通知</p>
                        <p class="p2">暂无消息</p>
                    </div>
                </li>
                <li @click="$router.push('/yuekeTz')">
                    <div class="photo"><img src="@/assets/消息1.jpg" alt=""></div>
                    
                    <div class="title">
                        <p class="p1">约课通知</p>
                        <p class="p2">暂无消息</p>
                    </div>
                </li>
                <li @click="$router.push('/kaoshiTz')">
                    <div class="photo"><img src="@/assets/消息4.jpg" alt=""></div>
                    
                    <div class="title">
                        <p class="p1">考试通知</p>
                        <p class="p2">暂无消息</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import NavigationBar from "../navigation/NavigationBar"
import {classifyMessage} from "../../utils/api"
export default {
    components:{
        NavigationBar,
    },
    data() {
        return {
            list:[],
        }
    },
    methods: {
        async getlist(){
            let res = await classifyMessage();
            console.log(res);
            this.list = res.data
        }
    },
    mounted() {
        this.getlist()
    },
}
</script>
<style lang="scss" scoped>
    .list{
        width: 100vw;
        ul{
            width: 100%;
            li{
                width: 100%;
                height: 0.8rem;
                border-bottom: 0.5px solid rgba(204, 204, 204, 0.568);
                display: flex;
                justify-content: start;
                align-items: center;
                .photo{
                    width: 20%;
                    text-align: center;
                }
                img{
                    width: 0.3rem;
                    height: 0.3rem;
                    border-radius: 25%;
                }
                .title{
                    width: 80%;
                    font-size: 0.18rem;
                    .p2{
                        font-size: 0.1rem;
                        margin: 0.05rem 0;
                    }
                }
            }
        }
    }
</style>