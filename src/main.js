import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import httpRequest from '@/utils/api'
import { getToken } from '@/utils/tool'
import './assets/style/index.less'
import 'devextreme/dist/css/dx.generic.custom-scheme.css'
import './plugins/devextreme-vue'
import './plugins/components'
import './plugins/svg-icon'

Vue.prototype.$http = httpRequest // ajax请求方法

Vue.config.productionTip = false

const vueInstance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (process.env.NODE_ENV === 'production') {
  if (!getToken()) {
    vueInstance.$router.push({ name: 'auth' })
  }
}
