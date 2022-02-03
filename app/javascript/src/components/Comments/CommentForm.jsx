import React from 'react'
import { Button } from 'react-bootstrap'

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    let text = e.target[0].value;
    if(!text) {
      alert("Please enter your comment");
      return;
    }
    this.props.onCommentSubmit({text:text});
  }

  render() {
    return (
      <div className="commentForm panel panel-default">
        <div className="panel-body">
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <input className="form-control" type="text" placeholder="Say somthing here..." ref="text" /><br/>
            <Button className="btn btn-default" type="submit" > New Comment </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
