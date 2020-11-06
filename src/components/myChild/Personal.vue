<template>
  <div>
    <!-- 标题 -->
    <div class="back_container">
      <van-nav-bar title="个人信息" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="person_null"></div>
    <!-- 个人资料 -->
    <div class="all_data_container">
      <div class="all_data_wrapper">
        <span>头像</span>
        <div class="data_right" @click="changeHead">
          <span>
            <img :src="info.avatar" alt="" />
          </span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="all_data_wrapper" @click="changeName">
        <span>昵称</span>
        <div class="name_data_right">
          <span> {{ info.nickname }}</span>
          <van-icon name="arrow" size="0.25rem" color="#b7b7b7" />
        </div>
      </div>
      <div class="all_data_wrapper">
        <span>手机号</span>
        <div class="name_data_right">
          <span> {{ info.mobile }} </span>
          <van-icon name="arrow" size="0.28rem" color="#fff" />
        </div>
      </div>
      <div class="all_data_wrapper" @click="changeSex">
        <span>性别</span>
        <div class="name_data_right">
          <span> 女 </span>
          <van-icon name="arrow" size="0.25rem" color="#b7b7b7" />
        </div>
      </div>
      <div class="all_data_wrapper" @click="changedate">
        <span>出生日期</span>
        <div class="name_data_right">
          <van-field v-model="birthdate" input-align="right" />
          <van-icon name="arrow" size="0.25rem" color="#b7b7b7" />
        </div>
      </div>
      <div class="all_data_wrapper" @click="changes">
        <span>所在城市</span>
        <div class="name_data_right">
          <van-field v-model="tem" input-align="right" size="mini" />
          <van-icon name="arrow" size="0.25rem" color="#b7b7b7" />
        </div>
      </div>
      <div class="all_data_wrapper" @click="changeSubject">
        <span>学科</span>
        <div class="name_data_right">
          <span> {{ subject }} </span>
          <van-icon name="arrow" size="0.25rem" color="#b7b7b7" />
        </div>
      </div>
      <div class="all_data_wrapper">
        <span>年级</span>
        <div class="name_data_right">
          <span> 小学一年级 </span>
          <van-icon name="arrow" size="0.25rem" color="#b7b7b7" />
        </div>
      </div>
    </div>
    <!-- 更改头像 -->
    <van-popup v-model="headshow" position="bottom">
      <ul class="headStyle">
        <li>拍照</li>
        <li>从手机相册选择</li>
        <li>取消</li>
      </ul>
    </van-popup>
    <!-- 时间选择 -->
    <van-popup v-model="dateshow" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirms"
        @cancel="cancels"
      />
    </van-popup>
    <!-- 城市选择 -->
    <van-popup v-model="cityshow" position="bottom">
      <van-area
        :area-list="bm"
<<<<<<< HEAD
=======
      
>>>>>>> a657fc3e533109a622130ef6eb7f731fc7b84fe4
        @cancel="cancel"
        ref="djj"
        @change="Picker"
        @confirm="confirm"
      />
    </van-popup>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import { Area , } from "vant";

Vue.use(Area);
export default {
  data() {
    return {
      headshow: false, //头像框
      dateshow: false, //日期框
      minDate: new Date(1890, 0, 1), //最小日期
      maxDate: new Date(), //最大日期
      currentDate: new Date(), //当前选中日期
      birthdate: "", //出生日期
      nowdate: new Date().toLocaleDateString(), //当前日期
      // changeCity: "内蒙古自治区，呼和浩特市，武川县",
      cityshow: false,
      areaList: "",
      bm: {
        province_list: {},
        city_list: {},
        county_list: {},
      },
      city: "",
      county: "",
      sheng: "",
      tem: "",
      subject: this.$route.query.val,
      info: "",
    };
  },
  methods: {
    // 点击左上角返回
    onClickLeft() {
      this.$router.push("/my");
    },
    // 点击头像选择框
    changeHead() {
      this.headshow = true;
    },
    // 跳转到改变名字页面
    changeName() {
      this.$router.push("/changeName");
    },
    // 改变性别
    changeSex() {
      this.$router.push("/changeSex");
    },
    changes() {
      this.cityshow = true;
      this.bm = { ...this.bm };
      console.log(this.bm);
    },
    // 日期
    changedate() {
      this.dateshow = true;
    },
    // 时间选择框的完成
    confirms(val) {
      if (val.toLocaleDateString() == this.nowdate) {
        this.$toast("出生日期最少是当前日期的前一天");
      } else {
        this.birthdate = val.toLocaleDateString();
        this.birthdate=this.birthdate.replace(/\//g,'-')
        this.dateshow = false;
      }
    },
    // 时间取消
    cancels() {
      this.dateshow = false;
    },
    // 城市选择取消
    cancel() {
      this.cityshow = false;
    },
    // 当改变省份时
    async Picker(Picker, data, index) {
      console.log(Picker, data, index);
      if (index == 0) {
        this.sheng = data[index].name;
<<<<<<< HEAD
        var datases = await this.$http.get(
          "/api/app/sonArea/" + data[index].code
        );
=======
        var data = await this.$http.get("/api/app/sonArea/" + data[index].code);
        // this.city_list = {};
        // this.county_list = {};
        // console.log(this.bm.city_list);F
        // console.log(data.data);
>>>>>>> a657fc3e533109a622130ef6eb7f731fc7b84fe4
        this.bm.city_list = {};
        datases.data.forEach((el) => {
          this.$set(this.bm.city_list, el.id, el.area_name);
        });

        var arr = [];
        for (const key in this.bm.city_list) {
          arr.push(key);
        }
        // console.log(arr);
        var datas = await this.$http.get("/api/app/sonArea/" + arr[0]);
        // console.log(datas.data);
        datas.data.forEach((el) => {
          this.$set(this.bm.county_list, el.id, el.area_name);
        });
      } else if (index == 1) {
        // window.alert("jinini");
        this.city = data[index].name;
        var data = await this.$http.get("/api/app/sonArea/" + data[index].code);
        data.data.forEach((el) => {
          this.$set(this.bm.county_list, el.id, el.area_name);
        });
      } else if (index == 2) {
        this.county = data[index].name;
        this.tem = this.sheng + "," + this.city + "," + this.county;
        // console.log(this.tem);
      }
    },
    async beijing() {
      var res = await this.$http.get("/api/app/sonArea/0");
      res.data.forEach((element) => {
        this.bm.province_list[element.id] = element.area_name;
      });
      // console.log(this.bm.province_list);
      var arrs = [];
      for (const keys in this.bm.province_list) {
        arrs.push(keys);
      }
      console.log(arrs[0]);
      var data = await this.$http.get("/api/app/sonArea/" + arrs[0]);

      data.data.forEach((el) => {
        this.$set(this.bm.city_list, el.id, el.area_name);
      });
      // alert(this.bm.city_list)
      var arr = [];
      for (const key in this.bm.city_list) {
        arr.push(key);
      }
      var datas = await this.$http.get("/api/app/sonArea/" + arr[0]);

      datas.data.forEach((el) => {
        this.$set(this.bm.county_list, el.id, el.area_name);
      });
      // console.log(this.bm.city_list);
      // console.log(this.bm.county_list);
    },
    // 点击城市选择完成时
    confirm(val) {
      this.tem = "";
      console.log(val);
      val.forEach((el) => {
        if (el.name.indexOf("区") != -1 || el.name.indexOf("县") != -1) {
          this.tem += el.name;
        } else {
          this.tem += el.name + ",";
        }
      });
      this.cityshow = false;
    },

    // 点击改变课程类型
    changeSubject() {
      this.$router.push("/changeSubject");
    },
  },
  mounted() {
    this.$http.get("/api/app/userInfo").then((res) => {
      console.log(res);
      this.info = res.data;
      // 出生日期
      this.birthdate = this.info.birthday;
      // 所在城市
      this.tem =
        this.info.province_name +
        "," +
        this.info.city_name +
        "," +
        this.info.district_name;
      // 学科
      // this.subject = this.info.attr[1].attr_value;
      // console.log(this.subject);

    });
    this.beijing();
  },
};
</script>
<style lang="scss" soped>
.back_container {
  width: 100%;
}
.person_null {
  width: 100%;
  height: 0.1rem;
  background-color: #f0f2f5;
}
// 个人资料
.all_data_container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .all_data_wrapper {
    width: 90%;
    height: 0.7rem;
    font-size: 0.14rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f0f2f5;
    .data_right {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      //   个人资料头像
      span {
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .van-icon-arrow {
        font-size: 0.28rem;
        color: #b7b7b7;
        font-weight: 100;
      }
    }
    // 其余个人资料
    .name_data_right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #8c8c8c;
    }
  }
}
.headStyle {
  width: 100%;
  li {
    width: 100%;
    height: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.01rem solid #f0f2f5;
  }
}
.van-icon-arrow-left {
  color: #000 !important;
  font-size: 0.25rem !important;
}
.van-nav-bar__title {
  font-size: 0.22rem !important;
}
.van-field__control {
  color: #8c8c8c !important;
  font-size: 0.14rem !important;
}
</style>