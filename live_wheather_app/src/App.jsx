import React, { useState } from "react";
import Ui from "./Ui";
const App = () => {
  const [city_name, set_city_name] = useState();
  const [dataval, setdataval] = useState("delhi");
  const updateData = (event) => {
    set_city_name(event.target.value);
  };
  async function data() {
    const API_key = "ed8d9515c04d58510990bf91e1393e40";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;
    try {
      const res = await fetch(url);
      const result = await res.json();
      //  console.log(result);
      setdataval(result);
    } catch {
      console.log("err");
    }
  }

  return (
    <>
      <h1>{city_name}</h1>
      <input
        className="inp"
        type="text"
        placeholder="enter city name"
        onChange={updateData}
        value={city_name}
      ></input>
      <Ui />
    </>
  );
};
export default App;
