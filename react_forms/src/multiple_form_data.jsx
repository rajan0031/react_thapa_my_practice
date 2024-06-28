import React from "react";
import { useState } from "react";

const App = () => {
  // name ke liyea
  const [name, setName] = useState("");
  const [myfullname, setmyfullname] = useState("");
  // surname ke liyea
  const [sirname, setsirname] = useState();
  const [myfullsirname, setmyfullsirname] = useState("");

  // email ke liyea state ka use

  const [curremail, setcurremail] = useState();
  const [newemail, setnewemail] = useState();

  // for email
  const update_email = (event) => {
    console.log(event.target.value);
    setcurremail(event.target.value);
  };

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
    setnewemail(curremail);
  };

  return (
    <>
      <h1>
        hello ji i am {myfullname} {myfullsirname}
        {newemail}
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
      <input
        type="text"
        placeholder=" your email id"
        onChange={update_email}
        value={newemail}
      />
      <button onClick={update_name}>SUBMIT</button>
    </>
  );
};

export default App;
