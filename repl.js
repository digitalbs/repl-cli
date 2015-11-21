var repl = require('repl');

var replServer = repl.start({
	prompt: "RM >"
});

module.exports = replServer;