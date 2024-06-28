import React from "react";

function App() {
  const date = new Date();
  const time = date.getHours();

  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getHours());

  var dummy = "";
  var style;
  const morning = "Good morning";
  const after = "Good after-noon";
  const evening = "Good evening";
  const night = "Good night";

  // doing the styling in it

  const mstyle = {
    color: "green",
  };

  const astyle = {
    color: "orange",
  };

  const estyle = {
    color: "pink",
  };

  const nstyle = {
    color: "black",
  };

  if (time >= 5 && time < 12) {
    console.log(morning);
    dummy = morning;
    style = mstyle;
  } else if (time >= 12 && time < 17) {
    console.log(after);
    dummy = after;
    style = astyle;
  } else if (time >= 17 && time <= 19) {
    console.log(evening);
    dummy = evening;
    style = estyle;
  } else {
    console.log(night);
    dummy = night;
    style = nstyle;
  }

  return (
    <>
      <h1>
        hello<span id="fname">{}</span> Sir, <span style={style}>{dummy}</span>
        <input type="text" id="name" />
        <button id="btn">submit</button>
      </h1>
    </>
  );
}

export default App;
