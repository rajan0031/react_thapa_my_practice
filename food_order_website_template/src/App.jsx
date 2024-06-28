import React, { Component } from "react";
//import Food from "./Food";
import Menu from "./Menu";
import List from "./List";
const App = (props) => {
  return (
    <>
      <h1 id="h1" style={{ textAlign: "center" }}>
        Order Your Favoruite Dish
      </h1>

      <Menu />
    </>
  );
};
export default App;
