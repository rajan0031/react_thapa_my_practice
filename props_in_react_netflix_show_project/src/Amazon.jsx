import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Amazon = () => {
  return (
    <Card
      key={Sdata[1].key}
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].href}
      ott={Sdata[1].ott}
    />
  );
};

export default Amazon;
