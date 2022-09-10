const UglifyjsPlugin = require('uglifyjs-webpack-plugin')

const {
  getNow,
  resolve
} = require('./utils')
module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: './',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  outputDir: `dist/${process.env.NODE_ENV}/${process.env.NODE_ENV}_editor_${getNow()}`,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: process.env.VUE_APP_TITLE,
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  chainWebpack: config => {
    const Timestamp = new Date().getTime()
    config.output.filename('js/[name].' + Timestamp + '.js').end()
    config.output.chunkFilename('js/[name].' + Timestamp + '.js').end()

    config.plugin('eslint').tap(options => {
      options[0].fix = true
      return options
    })

    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
  },
  configureWebpack: config => {
    config['performance'] = {
      hints: 'warning',
      maxEntrypointSize: 1000000000,
      maxAssetSize: 3000000000,
      assetFilter: function(assetFileName) {
        return assetFileName.endsWith('.css') || assetFileName.endsWith('.js')
      }
    }
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new UglifyjsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_debugger: true,
              drop_console: false
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
      config.optimization = {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            devextreme: {
              name: 'devextreme',
              test: /[\\/]node_modules[\\/]devextreme[\\/]/,
              priority: -10
            },
            'vendors': {
              name: 'vendors',
              test: /[\\/]node_modules[\\/]/,
              priority: -20
            }
          }
        }
      }
    }
  },
  devServer: {
    open: true,
    port: 8021,
    https: false
  }
}
