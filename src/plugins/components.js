
import Vue from 'vue'

const req = require.context('@/components', true, /\.js$/)

// 批量导入components中的组件
req.keys().forEach(item => {
  Vue.use(req(item).default)
})
