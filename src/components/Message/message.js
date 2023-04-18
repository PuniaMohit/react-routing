import Card from "react-bootstrap/Card";

const Message = (props) => {
  return (
    <div>
      <h1>Single Messages</h1>
      <Card style={{ width: "100vw" }}>
        <Card.Body>
          <Card.Title> {props.subject}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Message;
