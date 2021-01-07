module.exports = {
  configureWebpack: {
    resolve: {//路径相关
      // extensions: ['.js', '.css','.vue'],//省略后缀名,默认配置过了
      alias: {
        // '@':'src',//默认配置过的
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views'
        /*
        所有文件里都能
        this.$router
        this.$store
        所以这两个不需要配别名
         */
      }

    }
  }
}
