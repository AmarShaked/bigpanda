var bodyParser = require('body-parser');

exports.registerMiddlewares = (app) => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
}