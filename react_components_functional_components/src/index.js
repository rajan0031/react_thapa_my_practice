import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import Name, { details, father } from "./new_fun";

console.log(details);
ReactDOM.render(
  <>
    {Name + " "}
    {/* {details} */}

    {father}
    {/* <heading />
    {/* <h1>hello ji my anme is Rajan </h1>    */}
    {/* <Heading /> new way to call a react function: */}
    {/* <Heading></Heading>
    <Paragraph></Paragraph> */}
    {/* <ol>
      <li>Rajan</li>
      <li>dhananjay</li>
      <li>keshaw</li>
      <li>indradev</li>
    </ol> */}
    {/* <Ol></Ol> */}
    <App />
  </>,
  document.getElementById("root")
);

//understanding the module import and exports
