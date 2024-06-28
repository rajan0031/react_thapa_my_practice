import React from "react";
import { useState } from "react";
import ToDoList from "./ToDoLists";
import "./index.css";
const App = () => {
  // use of the useState in Hooks
  const [inputList, setInputList] = useState();
  const [Items, setItems] = useState([]); // here the input is an array

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    console.log("del");
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="centre_div">
          <br />
          <h1>ToDo List </h1>
          <br />
          <input
            type="text"
            placeholder="Add a items"
            name="item"
            onChange={itemEvent}
            value={inputList}
          />
          <button id="btn1" onClick={listOfItems}>
            +
          </button>
          <ol>
            {/* <li>{}</li> */}
            {Items.map((itemval, index) => {
              return (
                <ToDoList
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
          <button
            id="btn_clear"
            onClick={() => {
              setItems([]);
            }}
          >
            clear ALL
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
