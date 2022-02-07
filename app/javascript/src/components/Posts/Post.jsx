import * as React from 'react';
import { Card } from 'react-bootstrap'
import CommentBox from '../Comments/CommentBox'
import { useParams } from 'react-router-dom';
import Likes from '../Likes/Likes';
import contentParser from 'html-react-parser';
import { useQuery } from 'react-query';

const Post = props => {
  const { id } = useParams();
  const [title, setTitle] = React.useState('None');
  const [desc, setDesc] = React.useState('Empty');

  const { isLoading, data, error } = useQuery(['post', id], () =>
    fetch(`/posts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
  )

  React.useEffect(() => {
    if (isLoading) {
      return
    }

    if (error) {
      console.error('Error:', error);
      return;
    }
    
    setTitle(data.title);
    setDesc(data.content.body || 'Empty');
    console.log('Success:', data);
  }, [isLoading, data, error])

  return (
    <div className="container">
      <Card className='text-center'>
        <Card.Header>
          <div> Title: {title} </div>
        </Card.Header>
        <Card.Body>
          {contentParser(desc)}
        </Card.Body>
        <Card.Footer className='text-muted'>
          <CommentBox url='/api/v1/comments' post_id={id} />
          <br/>
          <Likes postId={id} />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Post;
