import axios from 'axios'

const httpRequest = axios.create({
  timeout: 30000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

const CORPID = process.env.VUE_APP_CORPID
const REDIRECT_URI = encodeURIComponent(process.env.VUE_APP_SERVER_API + '/#/home')
export function getAuthToken() {
  return httpRequest({
    url: `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${CORPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_base#wechat_redirect`,
    method: 'get'
  })
}

const BASE_URL = process.env.VUE_APP_BASE_API
export function getAuthUserInfo(code) {
  return httpRequest({
    url: `${BASE_URL}/getUserInfo?code=${code}`,
    method: 'get'
  })
}

