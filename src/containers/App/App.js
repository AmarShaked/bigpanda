import React, { Component } from 'react';
import CommentForm from '../../components/CommentForm';
import Comment from '../../components/Comment';
import CommentFilter from '../../components/CommentFilter';
import api from '../../utils/api';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {comments: [], filter: ''};
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleFilterChanged = this.handleFilterChanged.bind(this);
  }

  componentDidMount() {
    api.fetchComments()
      .then(function(json) {
        this.setState({comments: json});
      }.bind(this))
  }

  handleCommentSubmit (comment) {
    api.postComment(comment)
      .then(function(response) {
        let newComments = this.state.comments.concat([response]);
        this.setState({comments: newComments});
      }.bind(this))
  }

  handleFilterChanged (e) {
    this.setState({filter: e.target.value});
  }

  render() {
    const commentsList = this.state.comments.filter((comment) => {
      let filter = this.state.filter;
      return (!filter || (comment.email.indexOf(filter) !== -1 || comment.message.indexOf(filter) !== -1));
    })
    .map((comment) => {
      return ( <Comment id={comment.id} email={comment.email} gravatar={comment.gravatar} message={comment.message} />);
    })

    return (
      <div className="App">
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
          <div className="form bg-white">
            <CommentFilter onFilterChanged={this.handleFilterChanged} />
            <ul className="media-list">
              {commentsList}
            </ul>
          </div>
      </div>
    );
  }
}

export default App;
