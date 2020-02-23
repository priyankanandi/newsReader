const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvFlow = require('dotenv-flow-webpack');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        publicPath: '/',
    },

    module: {
        rules: [
          {
            test: /\.(jsx|js)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
          {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
            ],
          },
          {
            test: /\.(sass|scss)$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true },
              },
              {
                loader: 'sass-loader',
                options: { sourceMap: true },
              },
            ],
          },
    
          {
            test: /\.woff(2)?(\?[a-z0-9]+)?$/,
            loader: 'url-loader',
          },
          {
            test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
            loader: 'file-loader',
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{ loader: 'url-loader', options: { limit: 8192 } }],
          },
        ],
      },
     resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
          assets: path.resolve('./src/assets'),
        },
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.ejs',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new DotenvFlow({
            environment:  'development',
            purge_dotenv: true,
        }),
        new CompressionPlugin(),
    ]
}