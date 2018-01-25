var path = require('path');

module.exports = (app) => {
	//Server Routes are plural

	app.all("*", (req, res, next) =>{
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}