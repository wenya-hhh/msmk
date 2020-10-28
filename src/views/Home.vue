<template>
  <div class="home">
    <div class="content">
      <router-view></router-view>
      
    </div>

    <!-- 底部组件 -->
    <footer class="footer">
         <app-footer></app-footer>
    </footer>
   
  </div>
</template>

<script>
import appFooter from "@/components/Footer"
export default {
    name:"Home",
    components:{
       appFooter
    },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};   
</script>
<style lang="scss" scoped>
.footer{
    width:100%;
    height: 0.55rem;
}
</style>
