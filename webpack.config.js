const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

// Basic Path
const PATHS = {
  src: path.join(__dirname, 'src'),
}

module.exports = {
  mode: 'development',

  entry: {
    main: './src/index.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'assets/[name][ext]', // 리소스 경로 구성
    clean: true, // 생성된 파일만 보임
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
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
    historyApiFallback: true,

    client: {
      progress: true,
      webSocketTransport: 'ws',
    },
    webSocketServer: 'ws',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: {
                auto: true,
                localIdentName: '[folder]-[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
          },
          // scss
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require.resolve('sass'),
              sassOptions: {
                fiber: require('fibers'), // 속도향상
              },
              additionalData: `
              @import "${PATHS.src}/assets/scss/variables";
              @import "${PATHS.src}/assets/scss/theme";
              `,
            },
          },
        ],
      },

      // assets
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]',
        },
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      // html
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { minimize: false },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main'],
      template: './public/index.html',
      filename: 'index.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    // * 사용안된 Css 제거 (dev)
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),

    new CleanWebpackPlugin(),
  ],
}
