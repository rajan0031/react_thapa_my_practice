import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import employees from "./Employee";
import { useState } from "react";
// import exp from "constants";

function Home() {
  const [employees, setEmployees] = useState({});

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <>
      <h1>hello</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <Button
                    onClick={() =>
                      alert(`sute want to delete theid : ${item.id}`)
                    }
                  >
                    Edit
                  </Button>
                  &nbsp;
                  {/*these keyword are used to give the gap between buttons  */}
                  <Button onClick={handleDelete(item.id)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
export default Home;
