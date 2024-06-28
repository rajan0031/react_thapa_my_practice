import React from "react";
import { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    sir_name: "",
    email: "",
    mobile: "",
  });
  // name ke liyea

  // for email

  const inputEvent = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    const value = e.target.value;
    const name = e.target.name;

    setFullName((preVal) => {
      //console.log(preVal);
      //   if (name === "fname") {
      //     return {
      //       fname: value,
      //       sir_name: preVal.sir_name,
      //       email: preVal.email,
      //       mobile: preVal.mobile,
      //     };
      //   } else if (name === "sir_name") {
      //     return {
      //       fname: preVal.fname,
      //       sir_name: value,
      //       email: preVal.email,
      //       mobile: preVal.mobile,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       fname: preVal.fname,
      //       sir_name: preVal.sir_name,
      //       email: value,
      //       mobile: preVal.mobile,
      //     };
      //   } else if (name === "mobile") {
      //     return {
      //       fname: preVal.fname,
      //       sir_name: preVal.sir_name,
      //       email: preVal.email,
      //       mobile: value,
      //     };
      //   }

      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  return (
    <>
      <h1>
        hello ji my NAME: {fullName.fname} <br></br>
        sirName: {fullName.sir_name}
        <br></br>
        email: {fullName.email}
        <br></br>
        mobile: {fullName.mobile}
      </h1>
      <input
        type="text"
        placeholder=" enter your name"
        name="fname"
        onChange={inputEvent}
        value={fullName.fname}
      />
      <input
        type="text"
        placeholder=" your sir name"
        name="sir_name"
        onChange={inputEvent}
        value={fullName.sir_name}
      />
      <input
        type="text"
        placeholder=" your email id"
        name="email"
        onChange={inputEvent}
        value={fullName.email}
      />
      <input
        type="text"
        placeholder=" your mobile no"
        name="mobile"
        onChange={inputEvent}
        value={fullName.phone}
      />
      <button onClick={() => alert("form submitted successsfuluytryy")}>
        SUBMIT
      </button>
    </>
  );
};

export default App;
