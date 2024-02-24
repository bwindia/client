const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
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
        test: /\.(ttf|eot|svg|png|jpg|jpeg|mp4)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(docx|md)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '..', './src')
    },
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      path: require.resolve('path-browserify')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', './public_html')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'blood-warriors',
      template: path.resolve(__dirname, '..', './src/index.html')
    })
  ],
  stats: 'errors-only',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}
