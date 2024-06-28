import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
// import Counter from "./Counter";
//import Hook from "./UseEffect";
// import Cnt from "./CountersThatUpadtesTogether";
//import Props from "./Destructured_props_example";
import Spread from "./Spread_operator";
import App from "./resume2/App";
const obj = {
  title: "xst props",
  description: "this is my description here",
  id: `this is my id props here with value ${12} `,
  name: "this is my name props",
  category: "this is a film category ",
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
