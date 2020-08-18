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
                use: ['babel-loader'],
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
    }
}
