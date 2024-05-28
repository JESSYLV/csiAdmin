import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    // 添加请求拦截逻辑
    return config
  },
  error => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    // 处理响应数据
    return response.data
  },
  error => {
    // 处理响应错误
    return Promise.reject(error)
  }
)

export default service
