<template>
  <div>
    <van-nav-bar
<<<<<<< HEAD
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>
<script>
export default {
 methods:{
   //点击返回
    onClickLeft(){
    this.$router.go("-1")
  }
 }
=======
    v-show="isShowNav"
      :title="this.$route.meta.title"
      :left-arrow="isShowLeft"
      @click-left="callBack"
      @click-right="search"
    >
    <template #right>
      <van-icon name="search" size="18" v-show="isShowRight" />
    </template>
    </van-nav-bar>
  </div>

</template>

<script>
export default {
  name:"NavigationBar",
  computed:{
    //头部显示
    isShowNav:function(){
      return this.$route.meta.isShowNav;
    },
    //左边返回显示
    isShowLeft:function(){
      return this.$route.meta.isShowLeft;
    },
    //右边搜索显示
    isShowRight:function(){
      return this.$route.meta.isShowRight;
    },

  },
  methods:{
    //返回上一级按钮
    callBack(){
      this.$router.go(-1);
    },
    //跳转到搜索页面
    search(){
      this.$router.push("/exerciseSearch")
    }
  },
 
>>>>>>> 41613f16fef5c084bac89b7dcc16fd46eccd6c97
}
</script>