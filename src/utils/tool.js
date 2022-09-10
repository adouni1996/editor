export function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16) | 0 : 'r&0x3' | '0x8').toString(
      16
    )
  })
}

// 判断是否到达底部
export function isReachBottom() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
  const { scrollHeight, clientHeight } = document.body
  if (scrollHeight === clientHeight) {
    return false
  }
  return (scrollTop + clientHeight === scrollHeight)
}

export function toBtm() {
  const dom = document.body || document.documentElement
  window.scrollTo(0, dom.scrollHeight - dom.clientHeight)
}

// 千分位
export function toLocaleString(num) {
  return Number(num).toLocaleString()
}

// 获取token
export function getToken() {
  return localStorage.getItem('xhorse-mes')
}
// 设置token
export function setToken(token) {
  localStorage.setItem('xhorse-mes', token)
}

// 获取userInfo
export function getUserInfo() {
  const userInfo = JSON.parse(localStorage.getItem('xhorse-mes'))
  return userInfo
}
// 设置userInfo
export function setUserInfo(data) {
  const userInfo = JSON.stringify(data)
  localStorage.setItem('xhorse-mes', userInfo)
}

// 格式化时间
export function format(date, fmt) {
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
