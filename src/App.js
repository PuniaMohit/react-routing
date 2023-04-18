import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/homePage'
import AboutUs from './components/AboutUs/aboutUs'
import ContactUs from './components/ContactUs/contactUs'
import Messages from './components/Messages/messages'
import Message from './components/Message/message';
import messages from './message.json'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/messages' element={<Messages />} />
        {messages.map((item) => (
          <Route path={`/messages/${item.id}`} element={<Message message={item.subject} body={item.body}/>} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
