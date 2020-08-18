const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/root.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "index.js"
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
            },
            {
                test: /\.global\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
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
            template: "./public/index.html"
        }),
    ],
    devServer: {
        port: 3456,
        open: true,
        hot: true,
        overlay: {
            errors: true,
            warnings: true
        }
    },
    performance: {
        hints: false
    }
}
