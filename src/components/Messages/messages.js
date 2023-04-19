import messages from "../../message.json";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./messages.css";

const Messages = () => {
  return (
    <div className="messages-container">
      <h1>Messages</h1>
      {messages.map((item) => (
        <h2 id="list-message" key={item.id}>
          <Link to={`/messages/${item.id}`} className='message'>{item.subject}</Link>
        </h2>
      ))}
      <Outlet />
    </div>
  );
};

export default Messages;
