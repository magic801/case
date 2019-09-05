function HelloWorldPlugin(options) {

}

HelloWorldPlugin.prototype.apply = function(compiler) {
	compiler.plugin('done', function() {
		console.log('--------in HelloWorldPlugin.---------')
	})
}

module.exports = HelloWorldPlugin
