const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '../css/[name].css',
  disable: process.env.NODE_ENV === 'development',
  allChunks: true
})

module.exports = {
  context: __dirname,
  entry: [
    __dirname + '/app/client/app.js',
    __dirname + '/sass/app.scss'
  ],
  output: {
    filename: 'app.min.js',
    path: __dirname + '/public/assets/js',
    publicPath: '/assets/js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './public/assets'
  },
  module: {
    loaders: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      },
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'app/client'),
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, 'sass')
                ]
              }
            }
          ],
          fallback: ['style-loader'],
          publicPath: '/assets/css'
        })
      },
      {
        test: /\.(png|jpg|gif|woff|eot|svg|ttf)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency',
      template: __dirname + '/app/views/layout/template.pug',
      filename: __dirname + '/public/index.html',
      inject: false
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  watch: true
}
