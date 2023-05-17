const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api1': {
        target: 'http://localhost:5000',//后端接口地址
        changeOrigin: true,//是否允许跨越
        pathRewrite: {
          '^/api1': ''//重写,
        }
      },
      '/api2': {
        target: 'http://localhost:8888',//后端接口地址
        changeOrigin: true,//是否允许跨越
        pathRewrite: {
          '^/api2': ''//重写,
        }
      }
    }
  }
})
