const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new Dotenv({
      path: 'environments/.prod.env'
    })
  ]
}
