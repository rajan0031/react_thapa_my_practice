import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const App = () => {
  const [num, setnum] = useState(0);
  // use of the  use effect in react
  // this says that ye wala code to chalega hi chalega whaen your page will be render

  useEffect(() => {
    alert("hello i have been clicked");
  },[]);
  //   const inc = () => {
  //     setnum(num + 1);
  //   };
  //   const dec = () => {
  //     if (num > 0) {
  //       setnum(num - 1);
  //     }
  //   };

  return (
    <>
      <h1>rajan </h1>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        +
      </button>
      <div>{num}</div>
      <button
        onClick={() => {
          if (num > 0) {
            setnum(num - 1);
          }
        }}
      >
        -
      </button>
    </>
  );
};
export default App;
