const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractSass = new ExtractTextPlugin({
    filename: "../css/[name].css",
    disable: process.env.NODE_ENV === "development",
    allChunks: true
})

module.exports = {
    entry: [
        __dirname + '/app/client/index.js',
        __dirname + '/sass/app.scss'
    ],
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, 'public/assets/js')
    },
    module: {
        loaders: [
            {
                test : /\.jsx?/,
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
                    publicPath: path.resolve(__dirname, 'public/assets/css')
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
            title: 'index',
            chunksSortMode: 'dependency',
            template: './app/views/index.pug',
            filename: '../../index.html',
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