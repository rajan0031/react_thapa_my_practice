import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import Sdata1 from "./Sdata1";
import App from "./App";
console.log(App);
ReactDom.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);

// {
//   /* <h1 style={h1}>list of top 5 netflix shows in 2020</h1>
// <input type="text" id="text" placeholder="enter your ott platform"></input>
// <button id="btn">submit</button>
// <div style={solve}>{Sdata.map(ncard)}</div>
// <div style={solve}>{Sdata1.map(ncard1)}</div>
// <h1>hello</h1> */
// }
// {
//   /* <div style={solve}>
//   <Card
//     imgsrc={Sdata[4].imgsrc}
//     title={Sdata[4].title}
//     sname={Sdata[4].sname}
//     href={Sdata[4].href}
//   />
//   <Card
//     imgsrc={Sdata[5].imgsrc}
//     title={Sdata[5].title}
//     sname={Sdata[5].sname}
//     href={Sdata[5].href}
//   />

//   <Card
//     imgsrc={Sdata[6].imgsrc}
//     title={Sdata[6].title}
//     sname={Sdata[6].sname}
//     href={Sdata[6].href}
//   />

//   <Card
//     imgsrc={Sdata[7].imgsrc}
//     title={Sdata[7].title}
//     sname={Sdata[7].sname}
//     href={Sdata[7].href}
//   />
// </div> */
// }
