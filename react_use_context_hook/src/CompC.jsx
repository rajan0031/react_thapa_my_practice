import { React } from "react";
import { firstname, lastname } from "./App.jsx";
//import CompC from "./CompC";
const CompC = () => {
  return (
    <>
      <firstname.Consumer>
        {(Fanme) => {
          return (
            <lastname.Consumer>
              {(lname) => {
                return (
                  <h1>
                    my name is {Fanme} {lname}
                  </h1>
                );
              }}
            </lastname.Consumer> 
          );
        }}
      </firstname.Consumer>
    </>
  );
};
export default CompC;
