import React, { Component } from "react";
import {
  Intrest,
  Skills,
  Education,
  Experience,
  Extracurriculars,
} from "./List";

const App = () => {
  var intrest = Intrest.my_list;
  var skill = Skills.my_list;
  var education = Education.my_list;
  var experience = Experience.my_list;
  var extracurriculars = Extracurriculars.my_list;
  //   console.log(Intrest.id, Intrest.my_list[0]);
  return (
    <>
      <h1>Resume</h1>
      <h3>Emily</h3>
      <h4>Intrests</h4>
      <ul id={Intrest.id}>
        {intrest.map((ele) => (
          <li>{ele}</li>
        ))}
      </ul>
      <h4>Skills</h4>
      <ul id={skill.id}>
        {skill.map((ele) => (
          <li>{ele}</li>
        ))}
      </ul>{" "}
      <h4>education</h4>
      <ul id={education.id}>
        {education.map((ele) => (
          <li>{ele}</li>
        ))}
      </ul>{" "}
      <h4>experience</h4>
      <ul id={experience.id}>
        {experience.map((ele) => (
          <li>{ele}</li>
        ))}
      </ul>{" "}
      <h4>extracurriculars</h4>
      <ul id={extracurriculars.id}>
        {extracurriculars.map((ele) => (
          <li>{ele}</li>
        ))}
      </ul>
    </>
  );
};
export default App;
