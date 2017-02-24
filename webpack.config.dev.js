var path    = require('path');
var webpack = require('webpack');

console.log(path.join(__dirname, 'dist'));


module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/App'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'client')
        },{
            test: /\.styl$/,
            include: path.join(__dirname, 'client'),
            loader: 'style!css!stylus?resolve url'
        },{
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=public/fonts/[name].[ext]'
        },{
            test: /\.(jpg|jpeg|png)$/,
            loader: 'url-loader'
        }]
    }
};
