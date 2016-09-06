import React, { Component } from 'react';


class Comment extends Component {
  render() {
  	return(<li className="media">
                <div className="media-left">
                  <img role="presentation" className="media-object img-rounded" src={this.props.gravatar} />
                </div>
                <div className="media-body">
                  <h5><strong>{this.props.email}</strong></h5>
                  <span className="text-muted">{this.props.message}</span>
                </div>
              </li>)
  }
}

export default Comment;
