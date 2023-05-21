const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, '..', './dist'),
    historyApiFallback: true,
    hot: true,
    open: true,
    allowedHosts: 'all'
  },
  plugins: [
    new Dotenv({
      path: 'environments/.dev.env'
    })
  ]
}
