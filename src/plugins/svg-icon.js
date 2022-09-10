import SvgIcon from '@/components/svg-icon/main.vue'
import Vue from 'vue'

Vue.component('SvgIcon', SvgIcon)

// 遍历require.context的返回模块，并导入
const requireAll = requireContext => requireContext.keys().map(requireContext)

// import所有符合条件的svg 三个参数：文件夹、是否使用子文件夹、正则
const req = require.context('@/assets/icons', true, /\.svg$/)
requireAll(req)

