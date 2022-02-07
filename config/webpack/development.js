process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()


// this is used as an example for lesson 5 only for Webpack Bundle Analyzer!
// please, do not used this in real project
// if you want to add some plugins or rules to your project - see environment.js for the reference

// const webpack = require('webpack')
// const environment = require('./environment')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const webpackConfig = environment.toWebpackConfig()
// webpackConfig.plugins = [
//   ...webpackConfig.plugins,
//   new webpack.ProgressPlugin(),
//   new BundleAnalyzerPlugin()
// ]

// module.exports = webpackConfig