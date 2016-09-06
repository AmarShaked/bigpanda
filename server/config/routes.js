const path = require('path');
const commentsController = require('../controllers/comments');

exports.registerRoutes = (app) => {
	app.get('/comments', commentsController.allComments)
	app.post('/comments', commentsController.addComment)
	app.get('/', function (req, res) {
	  res.sendFile(path.join(__dirname+'../../build/index.html'));
	});
}