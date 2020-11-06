import axios from "./request.js"
// import http from "axios"

export function gets(url, data) {

    return axios.get(url, {
        params: data
    })

}

export function post(url, data) {
    return axios.post(url, data)

}


// 课程首页的数据
export function all(params) {
    return axios.get('/api/app/courseBasis', {
        params
    })
}
// 课程列表页的数据
export function first(type, pages) {
    return axios.get('/api/app' + type, pages)
}
// 课程大纲的数据
export function two(type, pages) {
    return axios.post('/api/app' + type, pages)
}
// 课程评论的数据
export function treen(type, pages) {
    return axios.post('/api/app' + type, pages)
}

// 取消收藏
export function cancelCollect(id) {
    return axios.put(`/api/app/collect/cancel/${id}/1`)
}

// 立即报名
export function applyApi(id) {
    return axios.post("/api/app/order/shopInfo", {
        shop_id: id,
        type: 5
    })
}

// 提交订单
export function downOrder(params) {
    return axios.post("/api/app/order/downOrder", params)
}

// 学习
export function StudyApi(id) {
    return axios.get(`/api/app/myStudy/course/${id}?`)
}

// 评论
export function myStudyComment(params) {
    return axios.post("/api/app/myStudy/comment", params)
}

// 移除列表
export function rmList() {
    return axios("/api/app/myStudy/2?")

}

// 特色课分类接口
export function classify() {
    return axios.get("/api/app/courseClassify")
}
// 我的收藏
export function collect(params) {
    return axios.get('/api/app/collect', {
        params
    })
}

// 我的个人信息
export function userInfo() {

    return axios.get("/api/app/userInfo")


}

// 讲师信息
export function teacher(id) {

    return axios.get("/api/app/teacher/" + id)

}

// 讲师介绍
export function teacherInfo(id) {

    return axios.get("/api/app/teacher/info/" + id)

}

// 主讲课程
export function mainCourse(params) {
    return axios.post("api/app/teacher/mainCourse", params)
}

// 讲师评价
export function teacherComment(params) {
    return axios.post("api/app/teacher/comment", params)
}

// 关注老师
export function attention(id) {
    return axios.get("/api/app/teacher/collect/" + id)
}

// 取消关注
export function cancelAttention(id){
    return axios.put("/api/app/collect/cancel/"+id+"/2")
}

// 个人主要信息
export function UCenterInfo(){

   return axios.get("/api/app/getUCenterInfo")
}

// 一对一辅导列表
export function otoList(params){
    return axios.get("/api/app/otoCourse",{params})
}

// 老师条件
export function condition(){
    return axios.get("api/app/otoCourseOptions")
}

// 预约时间列表
export function invite(params){
    return axios.post("api/app/teacher/invite",params)
}

// 预约时间
export function selectTime(params){
    return axios.post("/api/app/teacher/invite",params)
}
