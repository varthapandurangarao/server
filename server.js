var express = require('express');
var app = express();
var PORT = 8080;

var middleware = require('./moddleware.js');

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req , res){
	res.send('<h1>ABOUT US!<h1>');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT ,function(){
	console.log('express server started on port'+ PORT +'!');
});