const mongoose = require('mongoose');
const crypto = require('crypto');


const CommentSchema = new mongoose.Schema({
	email: { type: String, required: true },
	message: { type: String, required: true },
	gravatar: String
})

CommentSchema.pre('save', function(next) {
  let comment = this;
  const md5 = crypto.createHash('md5').update(comment.email.toLowerCase()).digest('hex');
  comment.gravatar = 'https://gravatar.com/avatar/' + md5 + '?s=64&d=retro';
  return next();
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;