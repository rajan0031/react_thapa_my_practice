import React, { Component, useEffect, useState } from "react";

const Hook = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setcount(count + 1);
    }, 1000);
  });

  return (
    <>
      <h1>i have been rendered {count}</h1>
    </>
  );
};
export default Hook;
