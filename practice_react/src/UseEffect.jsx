import React, { Component, useEffect, useState } from "react";

const Hook = () => {
  const [count, setcount] = useState(0);

  let cnt = 0;

  const inc = () => {
    cnt = cnt + 1;
  };

  setInterval(inc, 1000);

  return (
    <>
      <h1>i have rendered {cnt}</h1>
    </>
  );
};
export default Hook;
