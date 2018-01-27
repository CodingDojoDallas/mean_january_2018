var path = require('path');

module.export = (app) =>
{
	// Server routes will be plural
	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}