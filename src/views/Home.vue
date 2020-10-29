<template>
  <div class="home">
<<<<<<< HEAD
  <!-- home -->
  <couser/>
=======
    <div class="content">
      <router-view></router-view>
      
    </div>

    <!-- 底部组件 -->
    <div class="footer">
         <app-footer></app-footer>
    </div>
   
>>>>>>> 41613f16fef5c084bac89b7dcc16fd46eccd6c97
  </div>
</template>

<script>
import appFooter from "@/components/Footer"
export default {
<<<<<<< HEAD
  name: 'Home',
  
  components: {
   couser
  }
=======
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

>>>>>>> 41613f16fef5c084bac89b7dcc16fd46eccd6c97
}
</script>


<style lang="scss" scoped>
.footer{
   
    height: 0.55rem;
}
</style>
