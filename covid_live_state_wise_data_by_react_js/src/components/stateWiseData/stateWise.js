import React, { useEffect } from "react";

const App = () => {
  const getCovidDtaa = async () => {
    const res = await fetch(
      "https://api.https://data.covid19india.org/data.json.org/data.json"
    );
    const actulaData = await res;
    console.log(actulaData);
  };
  useEffect(() => {
    // alert("hello ");
    getCovidDtaa();
  }, []);

  getCovidDtaa();
  return (
    <>
      <h1>INDIA COVID-19 DASHBOARD</h1>
    </>
  );
};
export default App;
