import React from "react";
import { useState } from "react";
import ReactDom from "react-dom";
import css from "./index.css";

const App = () => {
  var state = useState();
  console.log(state);

  var [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
    console.log("clicked " + count++);
  };
  return (
    <>
      <div id="box">
        <h1 id="h1">{count}</h1>
        <button id="btn" onClick={IncNum}>
          click me
        </button>
      </div>
    </>
  );
};

export default App;
