const path = require('path');
const merge = require('webpack-merge');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackConfig = require('./webpackConfig');
const webpackBaseConfig = require('./webpack.base.config.js');

const {production} = webpackConfig.outputPath;

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, production),
    filename: '[name].bundle.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        extractComments: 'all',
        uglifyOptions: {
          warnings: false,
          mangle: false,
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  }
});
