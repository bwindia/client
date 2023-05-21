const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv({
      path: 'environments/.prod.env'
    })
  ]
}
