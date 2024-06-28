import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";

const Product = (props) => {
  return (
    <Card className="my_card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.name} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Check Now</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
