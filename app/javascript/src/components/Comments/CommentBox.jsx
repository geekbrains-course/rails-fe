import React from 'react'
import Comments from './Comments'
import CommentForm from './CommentForm'
const token = document.querySelector('meta[name="csrf-token"]').content;

class CommentBox extends React.Component {
  constructor (props) {
  	super(props);
    this.state = {comments : []};
  }


  componentDidMount() {
    fetch(`${this.props.url}?post_id=${this.props.post_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({comments: data});
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  handleCommentSubmit(newComment) {
    let comments = this.state.comments;
    fetch('/api/v1/comments/', {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...newComment,
        post_id: this.props.post_id
      })
    })
    .then(response => response.json())
    .then((data) => {
      let newComments = comments.concat([data]);
      this.setState({comments : newComments});
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="commentBox panel panel-default">
          <div className="panel-body">
            <h1>Comment Box</h1>
            <Comments comments={this.state.comments} />
            <br/>
            <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

}

export default CommentBox;
