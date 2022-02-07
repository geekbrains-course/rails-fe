import React from 'react'
import Comments from './Comments'
import CommentForm from './CommentForm'
import { useMutation, useQuery } from 'react-query'
const token = document.querySelector('meta[name="csrf-token"]').content;

const CommentBox = props => {
  const [comments, setComments] = React.useState([]);

  const { isLoading, data, error } = useQuery(['comments', props.post_id], () =>
    fetch(`${props.url}?post_id=${props.post_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
  )

  React.useEffect(() => {
    if (isLoading) {
      return
    }

    if (error) {
      console.log('Error:', error);
      return
    }

    setComments(data);
    console.log('Success:', data);
  }, [isLoading, data, error]);

  const handleCommentSubmit = (newComment) =>
    fetch('/api/v1/comments', {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...newComment,
        post_id: props.post_id
      })
    })
    .then(response => response.json());

  const addComment = useMutation(handleCommentSubmit, {
    onError: (error) => {
      console.log('Error:', error);
    },
    onSuccess: (data) => {
      let newComments = comments.concat([data]);
      setComments(newComments);
    }
  })

  return (
    <div className="container">
      <div className="commentBox panel panel-default">
        <div className="panel-body">
          <h1>Comments</h1>
          <Comments comments={comments} />
          <br />
          <CommentForm onCommentSubmit={addComment.mutate} />
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
