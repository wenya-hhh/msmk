<template>
    <div>

            <header>
      <van-icon @click="$router.go(-1)" name="arrow-left" />
      <p>{{title}}</p>
    </header>
    </div>
</template>

<script>

export default {
    props:["title"],
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
header {
  width: 100%;
  height: 0.5rem;
  background: white;
  display: flex;
  padding: 0 0.1rem;
  margin-bottom: 0.2rem;
  align-items: center;
  > :nth-child(1) {
    font-size: 0.26rem;
    font-weight: bold;
    margin-right: 1.4rem;
  }
  > :nth-child(2) {
    font-size: 0.2rem;
  }
}
</style>
