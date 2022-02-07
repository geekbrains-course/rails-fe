import * as React from 'react';
import { Container } from 'react-bootstrap';
import contentParser from 'html-react-parser';
import { Link } from 'react-router-dom';

const PostsList = props => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch(`/posts`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      setPosts(data);
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []);

  return (
    <Container>
      {
        posts.map(post => (
          <Container 
            fluid
            key={post.id}
            className="post"
          >
            <div>
              <h2>
                <Link 
                  className="link-dark"
                  to={`/posts/${post.id}`}
                >
                  {post.title}
                </Link>
              </h2>
            </div>
            <div>
              {contentParser(post.content.body)}
            </div>
          </Container>
        ))
      }
    </Container>
  )
};

export default PostsList;
