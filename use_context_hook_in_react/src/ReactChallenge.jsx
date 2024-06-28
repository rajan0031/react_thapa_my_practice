import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  useEffect(() => {
    document.title = `you clicked me ${num}`;
    document.getElementById(
      "root1"
    ).innerHTML = `the title is changing by ${num} times`;
  });
  return (
    <>
      <body>
        <div class="container">
          <h1>{num}</h1>
          <button
            onClick={() => {
              setnum(num + 1);
              //   document.title = `you  clicked me ${num}`;
            }}
          >
            Click Me
          </button>
        </div>
      </body>
    </>
  );
};
export default App;
