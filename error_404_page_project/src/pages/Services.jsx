import React from "react";
import Product from "../Product";
const Services = () => {
  return (
    <>
      <h1 className="h1">Our Services</h1>
      <div className="services">
        <Product
          className="product"
          title={"web devlopment"}
          name={
            "./img/hr.jpeg"
          }
        />
        <Product
          name={
            "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
        />
        <Product
          name={
            "https://images.pexels.com/photos/1267315/pexels-photo-1267315.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
        />
        <Product name="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <Product
          name={
            "https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
        />
        <Product
          name={
            "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
        />
        <Product
          name={
            "https://images.pexels.com/photos/2159129/pexels-photo-2159129.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
        />
        <Product
          name={
            "https://images.pexels.com/photos/260367/pexels-photo-260367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Product
          name={
            "https://images.pexels.com/photos/2165933/pexels-photo-2165933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Product
          name={
            "https://images.pexels.com/photos/2165933/pexels-photo-2165933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Product
          name={
            "https://images.pexels.com/photos/2165933/pexels-photo-2165933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Product
          name={
            "https://images.pexels.com/photos/2165933/pexels-photo-2165933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </div>
      <div style={{ textAlign: "center" }}>
        we are comming with more services
      </div>
    </>
  );
};

export default Services;
