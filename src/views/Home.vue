<template>
<<<<<<< HEAD
    <div class="home">
         <div class="content">

             <router-view></router-view>

         </div>    

         <!-- 底部组件 -->
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from "@/components/Footer"
export default {
    components:{
       Footer
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
=======
  <div class="home">
<<<<<<< HEAD
  <router-view></router-view>
=======
<<<<<<< HEAD
  home
=======
  <couser/>
>>>>>>> 38a55e3f242d2fd2e1f79c9c0f746c69ce2ffebf
>>>>>>> 1814c543eb8fb0a97702ff783856ea3653056503
  </div>
</template>

<script>
<<<<<<< HEAD

export default {

 
=======
// @ is an alias to /src
import couser from './kc/couser'
export default {
  name: 'Home',
<<<<<<< HEAD
  
=======
  components: {
   couser
  }
>>>>>>> 38a55e3f242d2fd2e1f79c9c0f746c69ce2ffebf
>>>>>>> 1814c543eb8fb0a97702ff783856ea3653056503
}
>>>>>>> cf079cacf9e9bdb7c7de6b83dcb2552f7b6d8dfc
</script>

<style lang="scss" scoped>
.home{
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
}
.content{
 
 flex: 1;
 background:#F0F2F5 ;
 overflow: auto;

}
</style>
