<template>
    <div>
         <!-- 头部 -->
        <NavigationBar></NavigationBar>
        <!-- 文本域 -->
        <div class="text">
           <textarea name="" id="" cols="42" rows="10"></textarea> 
           <p>0/500</p>
        </div>
        <button>提交</button>
        
    </div>
</template>

<script>
import NavigationBar from "../navigation/NavigationBar"
export default {
    components:{
        NavigationBar,
    },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="scss" scoped>
    .text{
        width: 96vw;
        margin: 10px auto;
        text-align: center;
        textarea{
            border-radius: 2%;
        }
        p{
            text-align: right;
            margin-right: 0.2rem;
            color: gray;
        }
    }
    button{
        width: 96vw;
        height: 0.5rem;
        background: orangered;
        color: white;
        border: 0;
        margin-top: 1rem;
        margin-left: 0.08rem;
        border-radius: 2%;
    }
</style>
