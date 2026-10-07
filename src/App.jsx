
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Read from './components/Read';
import Create from './components/Create';


import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {


  return (
    <div>
      <BrowserRouter>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="header">Header</Nav.Link>
            <Nav.Link href="/footer">Footer</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Content ></Content>}> </Route>
        <Route path="/header" element={<Header />} ></Route>
        <Route path="/footer" element={<Footer />} ></Route>
        <Route path="/read" element={<Read />} ></Route>
        <Route path="/create" element={<Create />} ></Route>
      </Routes>
      
    
     </BrowserRouter>

      </div>
      
  )
}

export default App
