import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import List from "./List";
// import React, { Component, useState } from "react";
// import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import List from "./List";
// import Food from "./Food";

// this is my code

const Food = () => {
  const [items, setitems] = useState(List);
  return (
    <>
    
        <ButtonGroup size="lg" className="mb-2" id="menu_btn">
          <Button className="btn_menu">Breakfast</Button>
          <Button className="btn_menu">Lunch</Button>
          <Button className="btn_menu">Evening</Button>
          <Button className="btn_menu">Dinner</Button>
          <Button className="btn_menu">All</Button>
        </ButtonGroup>
    

      <div className="food-list">
        {items.map((ele) => {
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
// export default Food;

//
// this is chat gpt < code >

// </code >

// const Food = ({ item }) => {
//   return (
//     <div className="food-list">
//       {item.map((ele) => {
//         const { id, name, image, description, price, category } = ele;
//         return (
//           <Card className="my_card" style={{ width: "18rem" }} key={id}>
//             <Card.Img variant="top" src={image} />
//             <h4 style={{ fontSize: "30px", color: "violet" }}>
//               <b>{name}</b>
//             </h4>
//             <Card.Body>
//               <Card.Title>{price}</Card.Title>
//               <Card.Title style={{ color: "green" }}>{category}</Card.Title>
//               <Card.Text>{description}</Card.Text>
//               <Button variant="primary">Buy now</Button>
//             </Card.Body>
//           </Card>
//         );
//       })}
//     </div>
//   );
// };

export default Food;
