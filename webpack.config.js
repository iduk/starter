const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',


  entry: {
    main: './src/main.js',
  },


  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "assets/[name][ext]",
    clean: true, // 생성된 파일만 보임
  },


  // optimization: {
  //   moduleIds: 'deterministic',
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },


  devtool: 'inline-source-map',
  devServer: {
    static: 'dist',
  },


  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
           "style-loader",
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ]
      },
      // assets
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator : {
          filename : 'images/[name][ext][query]',
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator : {
          filename : 'fonts/[name][ext][query]',
        }
      },
      // html
    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
      title: 'Index Template',
      template: './src/index.html',
      chunks: ['main']
      // inject : 'body',
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].[id].css",
    })
  ],
}