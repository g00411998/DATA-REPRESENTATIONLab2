import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Displays the main navigation links in a blue navbar with a dark theme.
export default function NavigationBar() {
  return (
    {/* Brand link */}
     <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            {/* Navigation links aligned to the left */}
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  );
}
