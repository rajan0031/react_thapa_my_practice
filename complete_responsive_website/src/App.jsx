import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import Navbar from "./Navbar";
const App = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pri9cing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default App;
