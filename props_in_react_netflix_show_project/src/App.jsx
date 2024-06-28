import React from "react";
// import ReactDom from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import Netflix from "./Netflix";
import Amaz from "./Amaz";
// import Sdata1 from "./Sdata1";

// const favSeries = "netflix";
// const disp = {
//   display: "none",
//   backgroundColor: "red",
// };
// const solve = {
//   display: "flex",
//   padding: "10px 10px 10px 10px ",
//   margin: "10px 10px 10px 10px ",
// };
// const h1 = {
//   textAlign: "center",
// };
const favSeries = "netflix";
// const Favs = () => {
//   if (favSeries === "netflix") {
// <Card
//   key={Sdata[1].key}
//   imgsrc={Sdata[1].imgsrc}
//   title={Sdata[1].title}
//   sname={Sdata[1].sname}
//   link={Sdata[1].href}
//   ott={Sdata[1].ott}
// />
//   return <Netflix />;
// } else {
// <Card
//   key={Sdata[4].key}
//   imgsrc={Sdata[4].imgsrc}
//   title={Sdata[4].title}
//   sname={Sdata[4].sname}
//   link={Sdata[4].href}
//   ott={Sdata[4].ott}
// />
//     return <Amaz />;
//   }
// };

const App = () => (
  <>
    <h1 className="heading_style">List of top 5 net flix shows</h1>
    {/* <Favs /> */}
    {favSeries === "netflix" ? <Netflix /> : <Amaz />}
  </>
);
export default App;
