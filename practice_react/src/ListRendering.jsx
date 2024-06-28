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
  // new array    //ccurr arrar // mapmethod
  const listitems = list.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return (
    <>
      <ul>{listitems}</ul>
    </>
  );
};

export default List;
