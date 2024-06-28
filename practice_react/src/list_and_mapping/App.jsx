import React, { Component } from "react";
import List from "./List";

const App = () => {
  return (
    <>
      {List.map((ele) => (
        <li>
          <span>title:---></span>
          {ele.title} <span>description:---></span>
          {ele.description}
          <span>yearOfRelease:---></span>
          {ele.yearOfRelease} <span>boxOfficeCollection:---></span>
          {ele.boxOfficeCollection} <span>writer:---></span>
          {ele.writer} <span>director:---></span>
          {ele.director}
        </li>
      ))}
    </>
  );
};
export default App;
