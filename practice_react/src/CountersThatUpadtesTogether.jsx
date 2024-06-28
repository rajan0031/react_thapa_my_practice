import React, { Component, useState } from "react";

const Cnt = () => {
  const [count, setcount] = useState(0);
  return (
    <>
      <button onClick={() => setcount(count + 1)}>
        you clicked me {count}
      </button>
      <button onClick={() => setcount(count + 1)}>
        you clicked me {count}
      </button>
    </> 
  );
};
export default Cnt;
