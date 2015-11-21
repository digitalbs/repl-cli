var replServer = require('../repl');

replServer.defineCommand('hello', {
	help: 'Say hello. Be sure to pass in a {name}.',
	action: function (name) {
		console.log('Hello, ' + name + '!');

		this.displayPrompt();
	}
});