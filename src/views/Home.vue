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
<<<<<<< HEAD
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
=======
};   
>>>>>>> a07d9695dd951f1e33ca4e729c665f1f9d1b8eb2
</script>
<style lang="scss" scoped>
.footer{
    width:100%;
    height: 0.55rem;
}
</style>
