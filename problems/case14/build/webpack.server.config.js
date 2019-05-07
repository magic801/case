const merge = require('webpack-merge')
const base = require('./webpack.base.config.js')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
	target: 'node',
	entry: {
		server: path.join(__dirname, '../server-entry.js')
	},
	output: {
		filename: '[name].js',
		libraryTarget: 'commonjs2'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../index.ssr.html'),
			filename: 'index.ssr.html',
			files: {
				js: 'client.js'
			},
			excludeChunks: ['server']
		})
	]
})

// const { VueSSRServerPlugin } = require('vue-ssr-webpack-plugin')

// let config = Object.assign({}, base)
// config.entry = {
// 	server: path.join(__dirname, './server-entry.js')
// }
// // config.output.filename = 'server-bundle.js'
// config.target = 'node'
// config.output.libraryTarget = 'commonjs2'
// config.plugins.push(
//   new VueSSRServerPlugin()
// )

// module.exports = config
