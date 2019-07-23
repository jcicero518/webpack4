const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackConfig = require('./webpackConfig');

const {development} = webpackConfig.outputPath;

const config = {
  entry: {
    'main': ['./src/js/main.js', './src/scss/main.scss']
  },

  output: {
    path: path.resolve(__dirname, development),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: [/.js$|.ts$/],
        exclude: /(node_modules)/,
        //use: ['babel-loader']
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/typescript',
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.css$|.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash.8].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    modules: [
      'node_modules',
      path.resolve(__dirname, './src')
    ],
    extensions: ['.js', '.ts']
  },
  externals: {
    'jquery': jQuery
  },

  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].bundle.css'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: false,
          annotation: true
        }
      }
    })
  ],

  watch: true,
  devtool: 'source-map'
};

module.exports = config;
