import axios from 'axios'
import Vue from 'vue'
import { getToken, getUUID } from '@/utils/tool'

const httpRequest = axios.create({
  timeout: 30000, // 请求超时时间
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 添加请求拦截器
httpRequest.interceptors.request.use(config => {
  config.headers['token'] = getToken() || getUUID()
  return config
})
// 添加响应拦截器
httpRequest.interceptors.response.use(
  ({ data }) => {
    if (data && data.code === 401) {
      Vue.prototype.$toast.fail(data.msg)
    }
    return data
  },
  error => {
    Vue.prototype.$toast.fail(error)
    return Promise.reject(error)
  }
)
export default httpRequest
