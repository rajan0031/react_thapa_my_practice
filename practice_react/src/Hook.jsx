import React, { Component, useState } from "react";

const Hook = () => {
  const [color, setcolor] = useState();

  return (
    <>
      <h1>my color is</h1> <h1 style={{ color: `${color}` }}>dummy</h1>
      <button onClick={() => setcolor("Blue")}>blue</button>
      <button onClick={() => setcolor("red")}>red</button>
      <button onClick={() => setcolor("pink")}>pink</button>
      <button onClick={() => setcolor("green")}>Green</button>
    </>
  );
};
export default Hook;
