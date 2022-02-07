import React from 'react'
import { Card } from 'react-bootstrap'

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card
        bg='primary'
        text='light'
        style={{ margin: 10 }}
      >
        <Card.Header>{this.props.author}</Card.Header>
        <Card.Body>
          <Card.Text>
            {this.props.children}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Comment; 
