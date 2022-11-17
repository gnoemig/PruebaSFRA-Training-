'use strict';

var server = require('server');

server.get('Start', function (req, res, next) {

	/*within the function, render the hello.isml template, 
	 and declare the value of param1 which you saw 
	 in hello.isml.  param1 should equal "Hello from ISML"
	*/
	res.render('hello', {param1:'Hello from Viseo'} );
                                                                                                                                                                                                            res.print('<h2>Hello Viseo</h2>');
	next();
	
});

module.exports = server.exports();