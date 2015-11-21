#!/usr/bin/env node
var replServer = require('./repl');

//require start module 
require('./start');
require('./hello');



replServer.on('exit', function () {
	console.log("I'm exiting now!");
	process.exit();
});