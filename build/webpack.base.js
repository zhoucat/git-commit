const path = require('path')
// 清理打包目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  // 入口文件，即需要处理的文件
  entry: {
    index: './src/index.js'
  },
  // 输出文件配置
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
