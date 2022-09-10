import router from './router.js'
import allRouterArr from './all-router'

router.beforeEach(async(to, from, next) => {
  validate(to, from, next)
})

async function validate(to, from, next) {
  if (router.options.isGetRouter) {
    next()
    return
  }

  // http get router
  const res = allRouterArr
  const list = [...addComponent(res), {
    path: '*',
    redirect: {
      path: '/404'
    }
  }]

  list.forEach(item => {
    router.addRoute('/', item)
  })
  router.options.isGetRouter = true
  next({ ...to })
}

// list格式转换
// 将component处理为一个函数
function addComponent(arr) {
  for (const item of arr) {
    item['component'] = () => import(/* webpackChunkName: "home" */ `@/views${item.path}/index.vue`)
    item.meta = {
      title: item.name
    }
    item['name'] = item['path']
    if (item['children']) {
      addComponent(item['children'])
    }
  }
  return arr
}

export default router
