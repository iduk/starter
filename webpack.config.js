const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

const PATHS = {
  src: path.join(__dirname, 'src'),
}

module.exports = {
  mode: 'development',

  entry: {
    main: './src/index.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'assets/[name][ext]', // 리소스 경로 구성
    clean: true, // 생성된 파일만 보임
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
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      // css & scss
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      'postcss-import': {},
                    },
                  ],
                ],
              },
            },
          },
          // scss
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require.resolve('sass'),
              additionalData: `
              @import "~bootstrap/scss/functions";
              @import '~bootstrap/scss/mixins';
              @import './src/assets/scss/_theme-variables.scss';
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
          filename: 'images/[name][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
      // hbs
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
    ],
  },

  plugins: [
    // HtmlWebpackPlugin => 여러개를 생성해서 html 파일을 추출하는수밖에 없다
    // 이게 싫다면 ejs, handlebars 등의 플러그인 사용
    new HtmlWebpackPlugin({
      title: 'Static Page',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),

    new HtmlWebpackPlugin({
      title: 'Content Page',
      template: './src/content.html',
      filename: 'content.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    // * 사용안된 Css 제거
    // new PurgecssPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    // }),

    new CleanWebpackPlugin(),
  ],
}
