import React, { Component } from "react";
import List from "./List";

const App = () => {
  console.log(List);
  return (
    <>
      <h1>
        Resume
        <br></br>
        <h>Emily</h>
        <hr></hr>
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <ul>
        <h1>
          <li>{List[0].category}</li>
        </h1>
        <li>{List[0].name1}</li>
        <li>{List[0].name2}</li>
        <li>{List[0].name3}</li>
        <li>{List[0].name4}</li>
        <li>{List[0].name5}</li>
      </ul>
      <ul>
        <h1>
          <li>{List[1].category}</li>
        </h1>
        <li>{List[1].name1}</li>
      </ul>
      <ul>
        <h1>
          <li>{List[2].category}</li>
        </h1>
        <li>{List[2].name1}</li>
        <li>{List[2].name2}</li>
        <li>{List[2].name3}</li>
      </ul>
      <ul>
        <h1>
          <li>{List[3].category}</li>
        </h1>
        <li>{List[3].name1}</li>
        <li>{List[3].name2}</li>
      </ul>
      <ul>
        <h1>
          <li>{List[4].category}</li>
        </h1>
        <li>{List[4].name1}</li>
        <li>{List[4].name2}</li>
        <li>{List[4].name3}</li>
      </ul>
    </>
  );
};
export default App;
