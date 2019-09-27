const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: { main: ['src/jquery-3.4.1.min.js', 'src/mine.js', 'popper.min.js', 'src/bootstrap.min.js'] },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: ['src/index.html', 'src/home.html'],
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],

};