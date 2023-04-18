// import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const HomePage = () => {
    return (<>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                    <Nav.Link href="/contact-us">Contact</Nav.Link>
                    <Nav.Link href="/messages">Messages</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>)
}

export default HomePage