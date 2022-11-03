/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const purgecss = require('@fullhuman/postcss-purgecss')
const json5 = require('json5')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, options) => {
  const isDev = options.mode !== 'production'

  return {
    mode: isDev ? 'development' : 'production',
    target: 'web',
    entry: './src/index.tsx',
    output: {
      filename: isDev ? '[name].js' : '[name].[contenthash:8].js',
      path: path.join(__dirname, '/dist'),
      assetModuleFilename: 'static/[name][ext]', // 리소스 경로 구성
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
          test: /\.ts(x)?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
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
                sourceMap: true,
                modules: {
                  auto: true,
                  localIdentName: isDev
                    ? '[local]__[sha1:hash:hex:5]'
                    : '[sha1:hash:hex:5]'
                }
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['postcss-preset-env']
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require.resolve('sass'),
                additionalData: `
              @import "./src/assets/scss/_variables.scss";
              `
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
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
    performance: {
      hints: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        minify: isDev
          ? false
          : {
              collapseWhitespace: true,
              keepClosingSlash: true,
              minifyCSS: true,
              minifyJS: true,
              minifyURLs: true,
              removeComments: true,
              removeEmptyAttributes: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true
            },
        template: './src/index.html',
        templateParameters: {
          env: process.env.NODE_ENV === 'development' ? '🚧' : '✨'
        }
      })
    ],
    stats: {
      assetsSort: '!size',
      colors: true,
      entrypoints: false,
      errors: true,
      errorDetails: true,
      groupAssetsByChunk: false,
      groupAssetsByExtension: false,
      groupAssetsByInfo: false,
      groupAssetsByPath: false,
      modules: false,
      relatedAssets: true,
      timings: false,
      version: false
    },
    devServer: {
      static: 'dist',
      historyApiFallback: true,
      hot: true,
      port: 3603,
      client: {
        progress: true,
        webSocketTransport: 'ws'
      },
      webSocketServer: 'ws'
    }
  }
}
