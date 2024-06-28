import React from "react";
import { useState } from "react";

const App = () => {
  const time = new Date().toLocaleTimeString();

  const [ctime, currctime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    currctime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <>
      <h1>{time}</h1>
    </>
  );
};

export default App;
