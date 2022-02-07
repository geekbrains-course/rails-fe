import React from 'react'
import Comment from './Comment'

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let commentNodes = this.props.comments.map((comment, index) => {
      return (<Comment key={index} author={comment.author}>
        {comment.text}
      </Comment>);
    });

    return (<div className="commentList">{commentNodes}</div>);
  }
}

export default Comments;
