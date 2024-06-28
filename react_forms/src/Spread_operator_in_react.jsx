import React from "react";

const App = () => {
  const numbersOne = [1, 2, 3];
  const numbersTwo = [4, 5, 6];
  const numbersCombined = [...numbersOne, ...numbersTwo];

  const numbers = [1, 2, 3, 4, 5, 6];

  // example of destructuring
  //const [one, two, ...rest] = numbers;
  //   console.log(one);
  //   console.log(two);
  //   console.log(rest);

  const fullanme = {
    name: "rajan",
    sir_name: "kushwaha",
  };

  console.log(fullanme);

  const biodata = {
    id: 1,
    ...fullanme,
    age: 20,
    gender: "male",
  };
  console.log(biodata);

  //console.log(numbersCombined);
  return (
    <>
      <h1>{numbersOne}</h1>
      <br></br>
      <hr></hr>
      <h1>{numbersTwo}</h1>
      <br></br>
      <hr></hr>
      <h1>{numbersCombined}</h1>
      <br></br>
      <hr></hr>
    </>
  );
};
export default App;
