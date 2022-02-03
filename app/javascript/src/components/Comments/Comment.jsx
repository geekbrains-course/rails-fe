import React from 'react'
import { Card } from 'react-bootstrap'
import SubCommentForm from './CommentForm'
const token = document.querySelector('meta[name="csrf-token"]').content;

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentId: props.commentId,
      subComments: props.subComments || []
    }
  }

  handleCommentSubmit(newComment) {
    let { subComments, commentId } = this.state;

    fetch('/api/v1/comments', {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...newComment,
        comment_id: commentId
      })
    })
      .then(response => response.json())
      .then((data) => {
        let newComments = subComments.concat([data]);
        this.setState({ subComments: newComments });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    const { subComments } = this.state;

    const commentNodes = subComments.map((comment, index) => {
      return (<Comment key={index} author={comment.author} commentId={comment.id} subComments={comment.comments}>
        {comment.text}
      </Comment>);
    });

    return (
      <Card
        border={'dark'}
        text={'dark'}
        style={{ margin: 10 }}
      >
        <Card.Header>{this.props.author}</Card.Header>
        <Card.Body>
          <Card.Text>
            {this.props.children}
          </Card.Text>
        
          <SubCommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
          <br />
          <div className="commentList">{commentNodes}</div>
        </Card.Body>
      </Card>
    );
  }
}

export default Comment; 
