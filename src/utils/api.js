import axios from "./request.js"
import http from "axios"

export function gets(url, data) {

    return axios.get(url, {
        params: data
    })

}

export function post(url, data) {
    return axios.post(url, data)

}


// 课程首页的数据
export function all(type,pages) {
    return axios.get('/api/app/courseBasis',pages)
}
// 课程列表页的数据
export function first(type,pages) {
    return axios.get('/api/app'+type,pages)
}
// 课程大纲的数据
export function two(type,pages) {
    return axios.post('/api/app'+type,pages)
}
// 课程评论的数据
export function treen(type,pages) {
    return axios.post('/api/app'+type,pages)
}