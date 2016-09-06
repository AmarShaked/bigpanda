import React, { Component } from 'react';


class CommentFilter extends Component {
  render() {
  	return(<div className="form-group has-feedback">
              <input className="form-control" onChange={this.props.onFilterChanged} type="text" placeholder="Filter" />
              <i className="glyphicon glyphicon-search form-control-feedback text-muted"></i>
            </div>)
  }
}

export default CommentFilter;
