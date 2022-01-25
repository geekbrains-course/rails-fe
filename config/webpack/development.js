process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const webpack = require('webpack')
const environment = require('./environment')
const webpackConfig = environment.toWebpackConfig()

webpackConfig.plugins = [
  ...webpackConfig.plugins,
  new webpack.ProgressPlugin()
]

module.exports = webpackConfig
