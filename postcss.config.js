module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      // 该项仅在使用 Vant circle 时需要，原因见http://github.com/youzan/vant/issues/1948
      selectorBlackList: ['van-circle__layer', 'pc']
      // exclude: (e) => {
      //   if (/src(\\|\/)views(\\|\/)404/.test(e)) {
      //     return false
      //   }
      //   return true
      // }
    }
  }
}
