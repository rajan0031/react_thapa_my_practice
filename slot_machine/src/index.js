import React from "react";
import ReactDom from "react-dom";

import App from "./App.jsx";
console.log(App);
ReactDom.render(
  <>
    {/* <div className="data">
      <input
        type="text"
        id="input1"
        placeholder="enter your emoji --1st"
      ></input>
      <input
        type="text"
        id="input2"
        placeholder="enter your emoji --2nd"
      ></input>
      <input
        type="text"
        id="input3"
        placeholder="enter your emoji --3rd"
      ></input>

      <button id="btn">submit</button>
    </div> */}
    <App />
  </>,
  document.getElementById("root")
);

// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// const input3 = document.getElementById("input3");

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   console.log(input1.value, input2.value, input3.value);
//   <App input1 input2 input3 />;
// });
