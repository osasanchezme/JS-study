const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');

// Get the HTML body in a variable
const htmlBody = fs.readFileSync(__dirname + '/src/html/body.html');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output : {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist'),
          },
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/html/index.html',
			body: htmlBody,
        }),
        new CopyPlugin({
			patterns: [{ from: 'src/styles/style.css', to: '' }],
			options: {
				concurrency: 100,
			},
		})
    ],
    module: {
        rules: [
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,// Look for all js files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}