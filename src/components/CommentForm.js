import React, { Component } from 'react';


class CommentForm extends Component {

	constructor(props) {
    super(props);
    this.state = {email: '', message: ''};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange (e) {
    this.setState({email: e.target.value});
  }

  handleMessageChange (e) {
    this.setState({message: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();

    const email = this.state.email.trim();
    const message = this.state.message.trim();

    if (!message || !email) {
      return;
    }

    this.props.onCommentSubmit({email: email, message: message});
    this.setState({email: '', message: ''});
  }

  render() {
  	return(<form className="form bg-gray" onSubmit={this.handleSubmit}>
			    <div className="form-group">
			      <label className="sr-only">Email</label>
			      <input className="form-control" 
			      			 required type="email" 
			      			 placeholder="Email" 
			      			 value={this.state.email}
			      			 onChange={this.handleEmailChange} />
			    </div>
			    <div className="form-group">
			      <label className="sr-only">Message</label>
			      <textarea className="form-control" 
			      				  required 
			      				  rows="3" 
			      				  placeholder="Message" 
			      				  value={this.state.message}
			      				  onChange={this.handleMessageChange}></textarea>
			    </div>
			    <div className="submit">
			      <button className="btn btn-primary" type="submit">SUBMIT</button>
			    </div>
		   </form>)
  }
}

export default CommentForm;
