const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OCAWP = require('optimize-css-assets-webpack-plugin');

process.env.NODE_ENV = 'production';
module.exports = {
    entry: './src/root.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "lib/lib-[hash:5].js",
    },
    resolve: {
        mainFiles: ['index.js', 'index.jsx'],
        alias: {
            '@': path.resolve(__dirname,'src')
        }
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 99999,
                        encoding: false,
                    }
                }],
            },
            {
                test: /\.global\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/src',
                            hmr: true,
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    'postcss-loader',
                    'less-loader',
                    {
                        loader: 'style-resources-loader',
                        options: {
                            patterns: path.resolve(__dirname, './src/main.global.less'),
                            injector: 'append'
                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: "./public/index.html",
            minify: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/lib-[hash:5].css',
        }),
        new OCAWP()
    ],
    devServer: {
        port: 3456,
        open: true,
        hot: true,
        overlay: {
            errors: true,
            warnings: true
        },
        compress: true
    },
    performance: {
        hints: false
    },
    devtool: process.env.NODE_ENV = 'development' ? "source-map" : "hidden-source-map"
};
