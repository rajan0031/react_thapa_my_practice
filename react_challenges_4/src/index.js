import React from "react";
import ReactDOM from "react-dom";
// import Add from "./Add";
// import Sub from "./Sub";
// import Mul from "./Mul";
// import Div from "./Div";
// import Add from "./Cal";
// import Sub from "./Cal";
// import Mul from "./Cal";
// import Div from "./Cal";
import { Add, Sub, Mul, Div } from "./Cal";

console.log(Add);

ReactDOM.render(
  <>
    <h1>hello ji this is my first calculator</h1>
    <ul>
      <li>sum of two numbers is {Add(20, 20)}</li>
      <li>sub of two numbers is {Sub(2011111234, 20)}</li>
      <li>div of two numbers is {Mul(20, 20)}</li>
      <li>mult of two numbers is {Math.round(Div(20111, 20))}</li>
    </ul>
  </>,
  document.getElementById("root")
);
