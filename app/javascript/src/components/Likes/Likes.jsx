import * as React from 'react';
import { SuitHeartFill } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'
import { useMutation, useQuery } from 'react-query';

const Likes = props => {
  const [likes, setLikes] = React.useState(props.likes);
  const token = document.querySelector('meta[name="csrf-token"]').content;

  const { isLoading, data, error } = useQuery(['posts', props.postId, 'likes'], () =>
    fetch(`/posts/${props.postId}/likes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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

    setLikes(data.likes);
    console.log('Success:', data);
  }, [isLoading, data, error]);

  const handleNewLike = (e) => 
    fetch(`/posts/${props.postId}/like/`, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json());

  const addLike = useMutation(handleNewLike, {
    onError: (error) => {
      console.log('Error:', error);
    },
    onSuccess: (data) => {
      setLikes(data.likes);
      console.log('Success:', data);
    }
  });

  return (
    <div>
      <Button variant="primary" onClick={addLike.mutate} >
        <SuitHeartFill/> {likes}
      </Button>
    </div>
  );
};

export default Likes;
