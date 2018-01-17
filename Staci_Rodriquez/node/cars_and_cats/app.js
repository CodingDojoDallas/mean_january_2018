var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res) {
	console.log('client request URL: ', req.url);

	if (req.url === '/'){
		fs.readFile('views/index.html', 'utf8', function (errors, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(contents); 
			res.end();
		});
	}

	else if(req.url === '/stylesheets/style.css'){
		fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents) {
		 res.writeHead(200, {'Content-type': 'text/css'});
		 res.write(contents);
		 res.end();
		});
	}

	else if (req.url === '/cars'){
		fs.readFile('views/cars.html', function (errors, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(contents); 
			res.end();
		});
	}

	else if (req.url === '/images/kia_optima.jpg'){
		fs.readFile('./images/kia_optima.jpg', function (errors, contents) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(contents); 
			res.end();
		});
	}

	else if (req.url === '/images/kia_sorento.jpg'){
		fs.readFile('./images/kia_sorento.jpg', function (errors, contents) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(contents); 
			res.end();
		});
	}

	else if (req.url === '/cats'){
		fs.readFile('views/cats.html', function (errors, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(contents); 
			res.end();
		});
	}

	else if (req.url === '/images/naked_cat.jpg'){
		fs.readFile('./images/naked_cat.jpg', function (errors, contents) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(contents); 
			res.end();
		});
	}

	else if (req.url === '/images/furry_cat.jpg'){
		fs.readFile('./images/furry_cat.jpg', function (errors, contents) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(contents); 
			res.end();
		});
	}

	else if (req.url === '/cars/new'){
		fs.readFile('views/new.html', 'utf8', function (errors, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(contents); 
			res.end();
		});
	}

	else {
		res.writeHead(404);
		res.write("File Not Found");
		res.end();
	}
});

server.listen(7077);

console.log("Server is running on port 7077");