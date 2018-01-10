var http = require('http');
var fs = require('fs');

var server = http.createServer( function(req, res) {
	console.log('client request URL: ', req.url);

	if (req.url === '/'){
		fs.readFile('index.html', 'utf8', function(errors, contents){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(contents);
			res.end();
		});
	}
	else if (req.url === '/ninjas'){
		fs.readFile('ninjas.html', 'utf8', function(errors, contents){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(contents);
			res.end();
		});
	}
	else if (req.url === '/dojos/new'){
		fs.readFile('dojos.html', 'utf8', function(errors, contents){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(contents);
			res.end();
		});
	}
	else{
		res.end('The URL Requested is not available.');
	}

});
server.listen(6789);
console.log('Server is running on port 6789'); 