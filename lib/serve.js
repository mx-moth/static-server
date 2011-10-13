var connect = require('connect');

var path = require('path');
var fs = require('fs');

var serve = module.exports = function(pathToServe, options) {
	var port = options.port;

	fs.stat(pathToServe, function(err, stat) {
		if (err) return console.err(err);

		if (stat.isDirectory()) {
			connect.createServer(
				connect.directory(pathToServe, {icons: true}),
				connect.static(pathToServe)
			).listen(port);
			console.log("Serving directory", pathToServe, "on port", port);
		} else {
			connect.createServer(function(req, res, next) {
				connect.static.send(req, res, next, { path: pathToServe });
			}).listen(port);
			console.log("Serving file", pathToServe, "on port", port);
		}
	});
};

