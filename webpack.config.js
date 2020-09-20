const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = (env) => ({
    entry: [
        'react-hot-loader/patch',
        './src/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'eval-source-map',
    watch: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ts(x)?$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: [
            '*',
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        host: 'localhost',
        hot: true
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new CopyPlugin({
            patterns: [{from: 'src/index.html'}],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            appMountId: 'app',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
});
