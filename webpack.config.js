const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const json5 = require('json5')

module.exports = (env, options) => {
  const isDev = options.mode !== 'production'

  return {
    mode: isDev ? 'development' : 'production',
    entry: {
      main: './src/index.tsx'
    },
    output: {
      filename: isDev ? '[name].[contenthash:8].js' : '[name].[bundle].js',
      path: path.join(__dirname, 'dist'),
      assetModuleFilename: 'assets/[name][ext]', // 리소스 경로 구성
      asyncChunks: true,
      clean: true // 생성된 파일만 보임
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.tsx', '.ts', '.js']
    },

    module: {
      rules: [
        {
          test: /\.[jt]s?(x)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              cacheDirectory: true
            }
          }
        },
        // assets
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: false,
                modules: {
                  auto: true,
                  localIdentName: isDev
                    ? '[local]--[hash:base64:5]'
                    : '[hash:base64:7]'
                }
              }
            },
            {
              loader: 'postcss-loader',
              options: { implementation: require('postcss') }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
                warnRuleAsWarning: true,
                additionalData: `
                @import "./src/assets/scss/_variables.scss";
                `
              }
            }
          ]
        },
        {
          test: /\.(?:ico|jpe?g|png|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline'
        },
        {
          test: /\.json5$/i,
          type: 'json',
          parser: {
            parse: json5.parse
          }
        }
      ]
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : 'nosources-source-map',
    optimization: {
      runtimeChunk: {
        name: 'runtime'
      },
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          defaultVendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/
          }
        },
        name: false
      }
    },
    // performance: {
    //   hints: false
    // },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        templateParameters: {
          env: process.env.NODE_ENV === 'development' ? '🚧' : '✨'
        }
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      historyApiFallback: true,
      hot: true,
      compress: true,
      port: 3603,
      client: {
        progress: true,
        webSocketTransport: 'ws'
      },
      webSocketServer: 'ws'
    }
  }
}
