const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  devtool: 'inline-source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.gif$/,
        type: 'asset/inline'
      },
      {
        test: /\.(ttf|eot|svg|png|jpg|jpeg)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '..', './src')
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', './dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'blood-warriors',
      filename: 'index.html',
      template: path.resolve(__dirname, '..', './src/index.html')
    })
  ]
}
