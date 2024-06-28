import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import List from "./List";

const Food = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState(List);

  const filterItems = () => {
    if (selectedCategory === "All") {
      return items;
    } else {
      return items.filter((item) => item.category === selectedCategory);
    }
  };

  return (
    <>
      <ButtonGroup size="lg" className="mb-2" id="menu_btn">
        <Button
          className="btn_menu"
          onClick={() => setSelectedCategory("breakfast")}
        >
          Breakfast
        </Button>
        <Button
          className="btn_menu"
          onClick={() => setSelectedCategory("lunch")}
        >
          Lunch
        </Button>
        <Button
          className="btn_menu"
          onClick={() => setSelectedCategory("evening")}
        >
          Evening
        </Button>
        <Button
          className="btn_menu"
          onClick={() => setSelectedCategory("dinner")}
        >
          Dinner
        </Button>
        <Button className="btn_menu" onClick={() => setSelectedCategory("All")}>
          All
        </Button>
      </ButtonGroup>

      <div className="food-list">
        {filterItems().map((ele) => {
          const { id, name, image, description, price, category } = ele;
          return (
            <Card className="my_card" style={{ width: "18rem" }} key={id}>
              <Card.Img variant="top" src={image} />
              <h4 style={{ fontSize: "30px", color: "violet" }}>
                <b>{name}</b>
              </h4>
              <Card.Body>
                <Card.Title>{price}</Card.Title>
                <Card.Title style={{ color: "green" }}>{category}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Buy now</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Food;
