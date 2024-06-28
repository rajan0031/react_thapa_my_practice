import React from "react";
import { useState } from "react";
//import css from "./index.css";

const name = "Click me";
const curr = "purple";
const App = () => {
  // use of hook use State

  const purple = "#800080";

  const [bg, setbg] = useState(curr);

  const [name, setname] = useState("click");

  let upadte = () => {
    let newname = "dont click me";
    setname(newname);

    let color = "#34495e";
    setbg(color);
    // let btn = document.getElementById("btn");
    // const xbox = document.getElementById("xbox");
    // xbox.style.backgroundColor = bg;

    // btn.style.backgroundColor = bg;

    console.log("clicked");
  };

  const upadte2 = () => {
    let newcolor = "purple";
    setbg(newcolor);
  };

  const mouseEv = () => {
    let color = "#34495e";
    setbg(color);
  };
  return (
    <>
      <div style={{ backgroundColor: bg, width: "100%", height: "2000px" }}>
        <h1>hello color changet</h1>
        <button
          id="btn"
          onClick={upadte}
          onDoubleClick={upadte2}
          onMouseOver={mouseEv}
          style={{ color: "black", backgroundColor: bg }}
        >
          {name}
        </button>
      </div>
    </>
  );
};

export default App;
