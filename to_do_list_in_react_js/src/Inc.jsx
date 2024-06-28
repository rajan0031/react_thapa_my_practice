import React from "react";
import "./index.css";
import { useState } from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";

const Inc = () => {
  const [currval, setCurrval] = useState(0);
  //console.log(currval+1);
  //setCurrval(0);
  console.log(currval + 1);

  const inc = () => {
    setCurrval(currval + 1);
  };

  const dec = () => {
    if (currval > 0) {
      setCurrval(currval - 1);
    }
  };

  return (
    <>
      <h1>innc and dec</h1>

      <button onClick={inc}>
        <AddIcon />
      </button>
      <div id="field">hello ji {currval}</div>
      <button onClick={dec}>
        <RemoveIcon></RemoveIcon>
      </button>
    </>
  );
};

export default Inc;
