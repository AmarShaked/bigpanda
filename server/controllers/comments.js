const Comment = require('../models/comment');

exports.addComment = (req, res, next) => {
	let comment = new Comment(req.body);

	comment.save(function(err, comment){

    	if(err) { 
    		return next(err); 
    	}

    	res.json(comment);
  });
}

exports.allComments = (req, res, next) => {
	Comment.find(function(err, comments){
	    if(err){ return next(err); }

	    res.json(comments);
	  });
}