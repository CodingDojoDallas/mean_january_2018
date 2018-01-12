var http = require('http');
var fs = require('fs');


var server = http.createServer( function(req, res) {
	console.log('client request URL: ', req.url);
	if (req.url === '/'){
		fs.readFile('views/cars.html', 'utf8', function(errors, contents){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(contents);
			res.end();
		});
	}
	else if (req.url === '/cars'){
		fs.readFile('views/cars.html', 'utf8', function(errors, contents){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(contents);
			res.end();
		});
	}
	else if (req.url === '/cats'){
		fs.readFile('views/cats.html', 'utf8', function(errors, contents){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(contents);
			res.end();
		});
	}
	else if (req.url === '/cars/new'){
		fs.readFile('views/cars_new.html', 'utf8', function(errors, contents){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(contents);
			res.end();
		});
	}
	else if(req.url === '/stylesheets/style.css'){
    	fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
     		res.writeHead(200, {'Content-type': 'text/css'});
     		res.write(contents);
     		res.end();
    	});
	}
	else if(req.url === '/images/ferrari.jpg'){
    // notice we won't include the utf8 encoding
    	fs.readFile('./images/ferrari.jpg', function(errors, contents){
        	res.writeHead(200, {'Content-type': 'image/jpg'});
        	res.write(contents);
        	res.end();
    	});
  	}
  	else if(req.url === '/images/roadster.jpg'){
    // notice we won't include the utf8 encoding
    	fs.readFile('./images/roadster.jpg', function(errors, contents){
        	res.writeHead(200, {'Content-type': 'image/jpg'});
        	res.write(contents);
        	res.end();
    	});
  	}
  	else if(req.url === '/potato'){
    // notice we won't include the utf8 encoding
    	fs.readFile('./images/mclaren.jpg', function(errors, contents){
        	res.writeHead(200, {'Content-type': 'image/jpg'});
        	res.write(contents);
        	res.end();
    	});
  	}
  	else if(req.url === '/images/lambo.jpg'){
    // notice we won't include the utf8 encoding
    	fs.readFile('./images/lambo.jpg', function(errors, contents){
        	res.writeHead(200, {'Content-type': 'image/jpg'});
        	res.write(contents);
        	res.end();
    	});
  	}
  	else if(req.url === '/images/kit1.jpg'){
    // notice we won't include the utf8 encoding
    	fs.readFile('./images/kit1.jpg', function(errors, contents){
        	res.writeHead(200, {'Content-type': 'image/jpg'});
        	res.write(contents);
        	res.end();
    	});
  	}
  	else if(req.url === '/images/kit2.jpg'){
    // notice we won't include the utf8 encoding
    	fs.readFile('./images/kit2.jpg', function(errors, contents){
        	res.writeHead(200, {'Content-type': 'image/jpg'});
        	res.write(contents);
        	res.end();
    	});
  	}
  	else if(req.url === '/images/kit3.jpg'){
    // notice we won't include the utf8 encoding
    	fs.readFile('./images/kit3.jpg', function(errors, contents){
        	res.writeHead(200, {'Content-type': 'image/jpg'});
        	res.write(contents);
        	res.end();
    	});
  	}
  	else if(req.url === '/images/kit4.jpg'){
    // notice we won't include the utf8 encoding
    	fs.readFile('./images/kit4.jpg', function(errors, contents){
        	res.writeHead(200, {'Content-type': 'image/jpg'});
        	res.write(contents);
        	res.end();
    	});
  	}
	else{
		res.end('The URL Requested is not available.');
	}

});
server.listen(7077);
console.log('Server is running on port 7077'); 