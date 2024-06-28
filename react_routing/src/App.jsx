import React from "react";
// import { Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
const App = () => {
  return (
    <>
      {/* <h1>hello my name is Rajan this is my website</h1> */}

      <Router>
        <>
          <h1>hello </h1>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      </Router>
    </>
  );
};

export default App;
