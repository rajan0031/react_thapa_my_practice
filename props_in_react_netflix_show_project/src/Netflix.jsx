import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Netflix = () => {
  return (
    <Card
      key={Sdata[4].key}
      imgsrc={Sdata[4].imgsrc}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].href}
      ott={Sdata[4].ott}
    />
  );
};

export default Netflix;
