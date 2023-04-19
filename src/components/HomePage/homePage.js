import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../AboutUs/aboutUs";
import ContactUs from "../ContactUs/contactUs";
import Message from "../Message/message";
import Messages from "../Messages/messages";
import messages from "../../message.json";
import "./homePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="navbar-link-list">
        <div>
          <h3>
            {" "}
            <Link to="/about" id="about">
              About Us
            </Link>
          </h3>
          <h3>
            {" "}
            <Link to="/contact" id="contact">
              Contact
            </Link>
          </h3>
          <h3>
            {" "}
            <Link to="/messages" id="messages">
              Messages
            </Link>
          </h3>
        </div>
      </div>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/messages" element={<Messages />}>
          {messages.map((item) => (
            <Route
              path={`${item.id}`}
              key={item.id}
              element={<Message subject={item.subject} body={item.body} />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default HomePage;
