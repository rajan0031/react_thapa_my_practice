import React, { Component, useState } from "react";

const Hook = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updatestatus = () => {
    setCar((prev) => {
      return { ...prev, color: "blue" };
    });
  };

  return (
    <>
      <h1>My ford</h1>
      <p>It is a {car.color} Mustang from 1964 </p>
      <button onClick={updatestatus}>blue</button>
    </>
  );
};
export default Hook;
