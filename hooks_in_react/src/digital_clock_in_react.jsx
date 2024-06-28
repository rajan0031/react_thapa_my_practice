import React from "react";
import { useState } from "react";

const App = () => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const [ctime, setctime] = useState(time);

  const UpdateTime = () => {
    const uptime = new Date().toLocaleTimeString();
    setctime(uptime);
  };

 // setInterval(UpdateTime, 1000);

  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
};

export default App;
