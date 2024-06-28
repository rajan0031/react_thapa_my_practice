import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [arr, setArr] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (editIndex !== null) {
      // If in edit mode, save the updated task
      const newArr = [...arr];
      newArr[editIndex] = task;
      setArr(newArr);
      setEditIndex(null);
    } else {
      // If not in edit mode, add a new task
      setArr((prevArr) => [...prevArr, task]);
    }
    setTask('');
  };

  const handleDelete = (index) => {
    const newArr = arr.filter((item, ind) => ind !== index);
    setArr(newArr);
    setEditIndex(null); // Exit edit mode when deleting a task
  };

  const handleUpdate = (index) => {
    setTask(arr[index]); // Populate the input box with the task being edited
    setEditIndex(index); // Enter edit mode
  };

  return (
    <>
      <h1>Todo list</h1>
      <label htmlFor="text">Enter your text</label>
      <input
        id="text"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>
        {editIndex !== null ? 'Save' : 'Add'} {/* Change button text based on edit mode */}
      </button>

      {arr.map((item, index) => (
        <div key={index}>
          <li>{item}</li>
          <span>
            <button onClick={() => handleDelete(index)}>X</button>
          </span>
          <button onClick={() => handleUpdate(index)}>Update</button>
        </div>
      ))}
    </>
  );
}

export default TodoList;
