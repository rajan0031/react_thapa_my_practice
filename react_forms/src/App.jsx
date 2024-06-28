import React from "react";
import { useState } from "react";
// import Form from "./Form";

// use of useState of react HOOKS
let data;
const App = () => {
  const [name, upname] = useState("");

  const [fullname, setmyName] = useState();
  // const val = document.getElementById("name");
  //   const data = val;
  //   console.log(data);
  //   const btn = document.getElementById("btn");
  // function handleInput(e) {
  //     upname(e.tar)
  // }

  const showdata = (e) => {
    upname(e.target.value);
    console.log(e.target.value);
  };
  const onSubmit = () => {
    setmyName(name);
  };
  return (
    <>
      <>
        <h1>hello {fullname} ji welcome to karachi</h1>
        <input id="name" placeholder="Enter your name" onChange={showdata} />
        <button id="btn" onClick={onSubmit}>
          SUBMIT
        </button>
      </>
    </>
  );
};

export default App;
