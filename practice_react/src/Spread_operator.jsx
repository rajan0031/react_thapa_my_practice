import React, { Component } from "react";

const Spread = ({ title, description, name, id, category }) => {
  return (
    <>
      {/* <h1>hello {props.title}</h1>
      <h1>hello {props.description}</h1>
      <h1>hello {props.name}</h1>
      <h1>hello {props.category}</h1>
      <h1>hello {props.id}</h1> */}
      <h1>hello ji {title}</h1>
      <h1>hello ji {description}</h1>
      <h1>hello ji {name}</h1>
      <h1>hello ji {id}</h1>
      <h1>hello ji {category}</h1>
    </>
  );
};
export default Spread;
