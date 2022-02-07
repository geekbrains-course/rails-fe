import * as React from 'react';
import { SuitHeartFill } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'

const Likes = props => {
  const [likes, setLikes] = React.useState(props.likes);
  const token = document.querySelector('meta[name="csrf-token"]').content;

  React.useEffect(() => {
    fetch(`/posts/${props.postId}/likes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      setLikes(data.likes);
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  const handleNewLike = (e) => {
    fetch(`/posts/${props.postId}/like/`, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      setLikes(data.likes);
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
      <Button variant="primary" onClick={handleNewLike} >
        <SuitHeartFill/> {likes}
      </Button>
    </div>
  );
};

export default Likes;
