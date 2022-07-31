const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const purgecss = require('@fullhuman/postcss-purgecss')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

// Basic Path
const PATHS = {
  src: path.join(__dirname, 'src'),
}

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: './static/[name][ext]', // 리소스 경로 구성
    asyncChunks: true,
    clean: true, // 생성된 파일만 보임
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },

  // 최적화 설정
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  devtool: 'cheap-source-map',
  devServer: {
    static: './dist',
    port: 3333,
    historyApiFallback: true,
    hot: true,

    client: {
      progress: true,
      webSocketTransport: 'ws',
    },
    webSocketServer: 'ws',
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },

      // css & scss
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              esModule: true,
              modules: devMode
                ? {
                    auto: true,
                    exportGlobals: true,
                    localIdentName: '[local]__[sha1:hash:hex:5]',
                  }
                : {
                    auto: true,
                    localIdentName: '[sha1:hash:hex:5]',
                  },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          // scss
          {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('sass'),
              sassOptions: {
                fiber: require('fibers'), // 속도향상
              },
              additionalData: `
              @import "${PATHS.src}/assets/scss/_variables.scss";
              `,
            },
          },
        ],
      },

      // assets
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: devMode
                ? 'images/[name].[contenthash].[ext]'
                : 'images/[contenthash].[ext]',
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: devMode
                ? 'fonts/[name].[contenthash].[ext]'
                : 'fonts/[contenthash].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main'],
      template: './public/index.html',
      filename: 'index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'development' ? '🚧' : '✨',
      },
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].[contenthash].css',
    }),

    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),

    new CleanWebpackPlugin({}),
  ],
}
