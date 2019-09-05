const merge = require('webpack-merge')
const base = require('./webpack.base.config.js')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = merge(base, {
// 	target: 'node',
// 	entry: {
// 		server: path.join(__dirname, '../server-entry.js')
// 	},
// 	output: {
// 		filename: '[name].js',
// 		libraryTarget: 'commonjs2'
// 	},
// 	plugins: [
// 		new HtmlWebpackPlugin({
// 			template: path.join(__dirname, '../index.ssr.html'),
// 			filename: 'index.ssr.html',
// 			files: {
// 				js: 'client.js'
// 			},
// 			excludeChunks: ['server']
// 		})
// 	]
// })


const { VueSSRServerPlugin } = require('vue-ssr-webpack-plugin')

module.exports = merge(base, {
	target: 'node',
	entry: path.join(__dirname, '../server-entry.js'),
	output: {
		filename: '[name].js',
		libraryTarget: 'commonjs2'
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: path.join(__dirname, '../index.ssr.html'),
		// 	filename: 'index.ssr.html',
		// 	files: {
		// 		js: 'client.js'
		// 	},
		// 	excludeChunks: ['server']
		// }),
		new VueSSRServerPlugin({
			filename: 'vue-ssr-server-bundle.json'
		})
	]
})
