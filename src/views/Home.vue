<template>
  <div class="home">
    <div class="content">
      <router-view></router-view>
      
    </div>

    <!-- 底部组件 -->
    <div class="footer">
         <app-footer></app-footer>
    </div>
   
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

}
</script>


<style lang="scss" scoped>
.footer{
   
    height: 0.55rem;
}
</style>
