import Card from 'react-bootstrap/Card';

const Message=(props)=>{
    return(
      <Card style={{ width: '100vw' }}>
        <Card.Body>
          <Card.Title> {props.message}</Card.Title>
          <Card.Text>
            {props.body}
          </Card.Text>
        </Card.Body>
      </Card>
    
   )
}

export default Message