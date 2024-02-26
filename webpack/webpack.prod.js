const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new Dotenv({
      path: 'environments/.prod.env'
    })
  ],
  optimization: {
    minimize: true,
    mergeDuplicateChunks: true,
    removeEmptyChunks: true,
    sideEffects: false,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          enforce: true,
          name: (module) => {
            const [, match] = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]([^\\/]*)([\\/]([^\\/]*))?([\\/]([^\\/]*))?|$)/
            )

            return `vendors/${match.replace('@', '')}`
          }
        }
      }
    }
  },

  performance: {
    maxEntrypointSize: Infinity,
    maxAssetSize: 1024 ** 2
  }
}
