import React from "react";
//import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
//import AddIcon from "@mui/icons-material/Add";
const ToDoList = () => {
  const [item, setItem] = useState("buy an apple");
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br></br>
          <h1>ToDo List</h1>
          <br></br>
          <input type="text" placeholder="Add an items"></input>
          <Button variant="contained">
            Add
            {/* <AddIcon /> */}
          </Button>
          <ol>
            <li>{item}</li>
          </ol>
        </div>
      </div>
    </>
  );
};
export default ToDoList;
