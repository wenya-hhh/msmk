<template>
  <div id="app">
    <!-- <login></login> -->
    <!-- <retrieve></retrieve> -->
    <router-view></router-view>
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
};
</script>

<style>
body{
  font-size: 16px;
}
*{
  margin: 0;
  padding: 0;
}
</style>
