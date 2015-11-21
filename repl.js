var repl = require('repl');

var replServer = repl.start({
	prompt: "Release Manager >"
});

module.exports = replServer;