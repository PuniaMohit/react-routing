import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../AboutUs/aboutUs";
import ContactUs from "../ContactUs/contactUs";
import Message from "../Message/message";
import Messages from "../Messages/messages";
import Nav from "../Nav/nav";
import messages from "../../message.json";
import "./homePage.css";
import Home from "../Home/home";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
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
    </div>
  );
};

export default HomePage;
