import React, { useEffect, useState } from "react";
import axios from "axios";

const CompA = () => {
  const [num, setnum] = useState();
  const [name, setname] = useState();
  const [move, setmoves] = useState();
  useEffect(() => {
    // alert("hello");
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      // const data = await res.json();
      console.log(res.data);
      setname(res.data.name);
      setmoves(res.data.moves.length);
    }
    getData();
  });
  return (
    <>
      {/* <h1>yo choose {num}</h1>
      <h1>pokemon {num}</h1> */}
      <h1>
        my name is {name} and i have {move}
      </h1>
      <select
        value={num}
        onChange={(event) => {
          setnum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};
export default CompA;
