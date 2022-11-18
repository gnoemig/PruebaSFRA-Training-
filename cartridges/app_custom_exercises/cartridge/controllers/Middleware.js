'use strict';

var server = require('server');
//Define a variable named userLoggedIn that requires the userLoggedIn script
 var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');

server.get('Start', //Invoke the middleware step that validates login
    userLoggedIn.validateLoggedIn,
	function   (req, res, next) {

	res.print('<html><body><h1>Probando la practca de LoggedIn!</h1></body></html>');
    next();
	 
});

module.exports = server.exports();