import React, { Component } from "react";

const App = () => {
  let comp;
  let val = true;

  if (val === true) {
    comp = <li>this is {val}</li>;
  } else {
    comp = <li>this is {val}</li>;
  }

  return (
    <>
      <h1>hello ji</h1>
      {comp}
    </>
  );
};

export default App;
