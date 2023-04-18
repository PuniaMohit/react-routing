import ListGroup from 'react-bootstrap/ListGroup';
import messages from '../../message.json'
const Messages = () => {
    
    return (
        <div>
            {messages.map((item) => (
                <ListGroup>
                    <ListGroup.Item action href={`/messages/${item.id}`}>
                        {item.subject}
                    </ListGroup.Item>
                </ListGroup>))}
        </div>
    )
}

export default Messages