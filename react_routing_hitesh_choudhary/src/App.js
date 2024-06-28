import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import Projects from "./pages/Projects.js";
import Github from "./pages/Github";
import Error from "./pages/Error.jsx";
import User from "./User";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>this is my portfilio</h1>
        {/* <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/projects">Project</a> */}
        <div className="nav_menu">
          <Link to="Home">Home</Link>
          {/* <Link to="/projects">Home</Link> */}
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/User">User</Link>
        </div>
        <Routes>
          <Route path="/home" element={<Home name="Home" />}></Route>
          <Route path="/Contact" element={<Contact name="Contact" />}></Route>
          <Route
            path="/projects"
            element={<Projects name="Projects" />}
          ></Route>
          <Route path="/user/:name/:lname" Component={User}></Route>

          <Route element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
