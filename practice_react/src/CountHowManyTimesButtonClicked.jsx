import React, { Component, useState } from "react";

const Btn = () => {
  const [count, setcount] = useState(0);
  const handleClick = () => {
    setcount(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}>you clicked me {count}</button>
    </>
  );
};

export default Btn;
