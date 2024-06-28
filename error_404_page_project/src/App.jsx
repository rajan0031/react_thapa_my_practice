import React from "react";
// import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Error from "./pages/Error";
import Services from "./pages/Services";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container className="nav_bar">
            <Nav className="me-auto">
              <Nav.Link className="home">
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link className="home">
                <Link to="/services">Services</Link>
              </Nav.Link>
              <Nav.Link className="about">
                <Link to="/About">About</Link>
              </Nav.Link>
              <Nav.Link className="contact">
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          {/* <Route path="*" element={<Home />}></Route> */}
          {/*this is used when no error page*/}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          <Route path="*" element={<Error to={"./home"} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
