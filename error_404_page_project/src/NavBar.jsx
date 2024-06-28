import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container className="nav_bar">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link>
              <Link to={props.to}>Contact</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
