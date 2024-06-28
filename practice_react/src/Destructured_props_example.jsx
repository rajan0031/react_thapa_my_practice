import React, { Component } from "react";

const Props = ({ title, description, name, category, id }) => {
  return (
    <>
      <h1>this is my destructured props {title}</h1>
      <h1>this is my destructured props {description}</h1>
      <h1>this is my destructured props {name}</h1>
      <h1>this is my destructured props {category}</h1>
      <h1>this is my destructured props {id}</h1>
      <h1>this is my destructured props {title}</h1>
    </>
  );
};

export default Props;
