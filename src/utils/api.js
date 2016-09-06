import 'whatwg-fetch'; 


exports.fetchComments = () => {
	return fetch('/comments')
      .then(function(response) {
        return response.json();
      })
}

exports.postComment = (comment) => {
	return fetch('/comments', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(comment)
        })
		.then(function(response) {
        return response.json();
      })
}