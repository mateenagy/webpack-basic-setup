var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var extractPlugin = new extractTextPlugin ({
	filename: 'main.css'
});

var config = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath : '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						}
					}
				]
			},
			{
				test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]'
						}
					}
				]
			}
		]
	},
	devServer: {
		contentBase: ['./'],
	    watchContentBase: true,
		open: true,
		hot: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
module.exports = config;
