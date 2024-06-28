import React from "react";
import "./index.css";

const ToDoList = (props) => {
  return (
    <>
      <div className="List_style">
        <button
          id="btn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          -
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default ToDoList;
