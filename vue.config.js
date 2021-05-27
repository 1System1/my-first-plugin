const NODE_ENV = process.env.NODE_ENV;
const path = require('path');
let entry= NODE_ENV === 'development' ? './src/main.js' : './plugin/index.js'

module.exports = {
  "publicPath":"/",
  pages:{
    index:{
      entry: entry,
      template: 'public/index.html',
    }
  },
  // 根据不同的执行环境配置不同的入口
  configureWebpack:{
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'hello-world.js',
      library: 'hello-world', // 指定的就是你使用require时的模块名
      libraryTarget: 'umd', // 指定输出格式
      umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    },
  }

}
