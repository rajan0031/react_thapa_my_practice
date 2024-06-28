import React from "react";
import { useState } from "react";


const App = () => {
  const [name, setName] = useState("");
  const [myfullname, setmyfullname] = useState("");

  const [sirname, setsirname] = useState();
  const [myfullsirname, setmyfullsirname] = useState("");

  const update1 = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
    //console.log(setName);
  };
  const update2 = (event) => {
    console.log(event.target.value);
    setsirname(event.target.value);
  };
  // const update_sir_name = () => {};
  const update_name = () => {
    setmyfullname(name);
    setmyfullsirname(sirname);
  };
  return (
    <>
      <h1>
        hello ji i am {myfullname} {myfullsirname}{" "}
      </h1>
      <input
        type="text"
        placeholder=" your name"
        onChange={update1}
        value={name}
      />
      <input
        type="text"
        placeholder=" your sir name"
        onChange={update2}
        value={sirname}
      />
      
      <button onClick={update_name}>SUBMIT</button>
    </>
  );
};

export default App;
