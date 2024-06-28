import React, { Component } from "react";

const List = () => {
  const list = [
    {
      id: 1,
      title: "cabbage",
      category: "sabji",
    },
    {
      id: 2,
      title: "garlic",
      category: "sabji",
    },
    {
      id: 3,
      title: "tomato",
      category: "sabji",
    },
    {
      id: 4,
      title: "apple",
      category: "fruits",
    },
    {
      id: 5,
      title: "banana",
      category: "fruits",
    },
    {
      id: 6,
      title: "kaju",
      category: "dry-fruits",
    },
    {
      id: 7,
      title: "badam",
      category: "dry-fruits",
    },
    {
      id: 8,
      title: "akhrot",
      category: "dry-fruits",
    },
    {
      id: 9,
      title: "grapes",
      category: "fruits",
    },
    {
      id: 10,
      title: "loki",
      category: "sabji",
    },
    {
      id: 11,
      title: "lady fingure",
      category: "sabji",
    },
  ];
  // we will filter elements whose index id is divisible by 2
  const listitems = list.filter((prod) => prod.id % 2 === 0);
  const finallist = listitems.map((prod) => <li>{prod.title}</li>);
  // new array    //ccurr arrar // mapmethod
  //   const listitems = list.filter((product) => product.category === "sabji");
  //   const finalList = listitems.map((ele) => (
  //     <li key={ele.id}>{ele.title}</li>
  //   ));
  return (
    <>
      <ul>{finallist}</ul>
    </>
  );
};

export default List;
