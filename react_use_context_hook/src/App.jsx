import { React } from "react";
import CompA from "./CompA";
import { createContext } from "react";

const firstname = createContext();
const lastname = createContext();
const App = () => {
  return (
    <>
      <firstname.Provider value={"rajan"}>
        <lastname.Provider value={"live"}>
          <CompA />
        </lastname.Provider>
      </firstname.Provider>
    </>
  );
};
export default App;
export { firstname, lastname };
