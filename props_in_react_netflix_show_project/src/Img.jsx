import React from "react";
import Card from "./Card";

const styleing = {
  width: "100%",
  height: "auto",
};

const Img = (props) => {
  return <img src={props.imgsrc} alt="Netflix Show" style={styleing} />;
};

export default Img;
