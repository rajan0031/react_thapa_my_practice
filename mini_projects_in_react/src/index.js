import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";
ReactDom.render(<App />, document.getElementById("root"), () => {
  const name = document.getElementById("name");
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    const fname = document.getElementById("fname");
    fname.textContent = " " + name.value;
    name.disabled = true;
    btn.disabled = true;
  });
});
