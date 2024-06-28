import { React } from "react";
import CompC from "./CompC";
import { firstname, lastname } from "./App.jsx";
import { useContext } from "react";
const CompB = () => {
  const Fanme = useContext(firstname);
  const lname = useContext(lastname);
  return (
    <h1>
      my name is {Fanme} {lname}
    </h1>
  );
};
export default CompB;
