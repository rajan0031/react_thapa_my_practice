import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Ui = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="my_card">
        {/* <Card.Img variant="top" src="https://picsum.photos/200/300" /> */}

        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Ui;
