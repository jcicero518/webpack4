const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const webpackConfig = require('./webpackConfig');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const {proxy, files, port} = webpackConfig.browerSync;

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  plugins: [
    new BrowserSyncPlugin({
      proxy: proxy,
      port: port,
      files: files,
      injectCss: true,
      reload: false
    })
  ]
});
