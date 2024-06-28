import React from "react";
import css from "./index.css";
import SlotM from "./SlotMACH";

const App = (props) => {
  console.log(props);
  return (
    <>
      <p id="heading">
        🎰 let play with the{" "}
        <span style={{ fontWeight: "bolder", fontSize: "30px" }}>
          $lot machine
        </span>
        🎰
      </p>
      <div className="slotmachine">
        <SlotM x="😆" y="😆" z="😆" />
        <SlotM x="😆" y="😍" z="😘" />
        <SlotM x="😩" y="💕" z="💐" />
        <SlotM x="💐" y="💐" z="💐" />
      </div>
    </>
  );
};

export default App;
