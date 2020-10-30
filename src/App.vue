<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<script>
// import login from "../src/login/Login.vue";
// import retrieve from "../src/login/Retrieve.vue";
export default {

  name: "app",
  components: {
    // login,
    // retrieve
    
  },
  data(){
    return {
      messageShow:false
    }
  }, 
  watch:{
    $route(to){
      document.title = to.meta.title;
    }
  }
};
</script>


<style lang="scss">

.liuyan{
  width: 0.62rem;
  height: 0.62rem;
  border-radius: 50%;
  background: #007AFF;
  position: fixed;
  bottom:0.82rem ;
  right: 0.3rem;
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  i{
        font-size: 0.26rem;
       color: white;
  }
}

// 留言页面
.message{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  background:#F2F3F5;
  top: 0;
  header{
    width: 100%;
    height: 0.6rem;
    background: #007AFF;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.14rem;
    color: white;
    i{
      font-size: 0.2rem;
    }
  }
}

// 提示
.tishi{
  width: 100%;
  height: 0.62rem;
  font-size: 0.12rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;
}

// 表单
.from{
  width: 100%;
  >:nth-child(1){
    margin-left: 0.2rem;
    font-size: 0.12rem;
    margin-bottom: 0.1rem;
  }
  >:nth-child(2){
    width: 100%;
    height: 0.39rem;
  
    font-size: 0.12rem;
    border: 0;
    background: white;
   text-indent: 0.2rem;
   font-size: 0.12rem;
   outline: none;
  }
   >:nth-child(3){
    margin-left: 0.2rem;
    font-size: 0.12rem;
    margin-top: 0.3rem;
    margin-bottom: 0.1rem;
  }
  >:nth-child(4){
    width: 100%;
   height: 0.9rem;
    font-size: 0.12rem;
    border: 0;
    background: white;
   text-indent: 0.1rem;
   font-size: 0.12rem;
   outline: none;
   padding: 0.1rem;
  }
  button{
    width:3.7rem ;
    height: 0.4rem;
    background: #007AFF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.14rem;
    margin-left: 0.2rem;
    border: 0;
    margin-top: 0.2rem;
  }

}
</style>