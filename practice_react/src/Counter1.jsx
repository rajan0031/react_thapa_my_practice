import React, { Component, useEffect, useState } from "react";

const Hook = () => {
  const [count, setcount] = useState(0);
  const [cnt, setcnt] = useState(0);

  const update = () => {
    // setcount(count + 1);
    // setcnt(2 * count);

    setcount((prev) => count + 1);
    setcnt((count + 1) * 2);
  };

  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={update}>+</button>
      <h1>calculation :{cnt}</h1>
    </>
  );
};
export default Hook;
