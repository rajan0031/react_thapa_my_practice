import logo from "./logo.svg";
import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  // use of hook useState
  const [form, setForm] = useState({});

  // ye wala state variable mapping in ul LIST ke liyea hai
  const [users, setUsers] = useState([]);

  // form jo hai yaha se uska data handle hoga jab jab click kaenge
  // ye ek function hai
  // e-->event handler hota hai

  const handleForm = (e) => {
    // console.log(e.target.value, e.target.name);
    // now ab daat ko key value pair ke form me store karenge
    setForm({
      // destructure kiya gaya hai bahi
      // matlab jo previous state hai ushe bhi rakhna hai aur current ko bhi
      // thsta why we use this type of object destructuring
      // now chijhe add aur update dono hi hongi ab
      // now ab humare pass ek object hai jishme data hai jo (form object)
      // jishe hume server per bjejna hai bahi
      // ab bs form ko server pe bhejna hai

      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // har ek chij se event aata hai bhai
  // jab bhi koi bhi change kar rahe hai web page pe to event to aata hai hao
  // form me ka jo data onSubmit se aata hai na wo rukta nahi hai
  // submit hua aur page refresh ho gaya aisa hota hai bhai
  // jabform submit hota hai to ye html ki defauly propery hai
  // form aapne target page per jata hai
  // ye html ki propery hai
  // now ye prevent default kyaa karta hai ki form ki property ko default page per hi rakhata hai
  // matlab event ko aur aage jane se rok dega
  // now ab hum api call karenge
  // jo humara backend se aa raha hai
  // fetch ek async operation hai server pe jane me time lagega
  // we use await
  // here method is get not for safety issue.. so we uses POST method

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(form), // networks me generally strings hi bheje jate hai , so we stringify it , by using the json
      headers: {
        "Content-Type": "application/json", // headers content ke bare me kuch extra informations dete hai bahi
      },
    });
    const data = await response.json();
    console.log(data);
  };

  // ab ek aur fetch request banaa padega
  // jisme hum user ke data ko dekh payenge

  const getUser = async () => {
    const response = await fetch("http://localhost:8080/demo", {
      method: "GET",
    });
    const data = await response.json();
    // console.log(data);
    // setusers(data);  aise data ko nahi dal sakate hai ,, use different way
    setUsers(data);
    console.log(users);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* // this portion i used to debug my programm */}
        {/* <p>{JSON.stringify(form)}</p> */}
        <span>username</span>
        <input type="text" name="username" onChange={handleForm}></input>
        <span>password</span>
        <input type="text" name="password" onChange={handleForm}></input>
        <input type="submit"></input>
      </form>
      <div>
        <ul>
          {users.map((user) =>
            user.username === "abc" ? (
              <li key={user._id}>
                use_name:-- {user.username}, passward:--{user.password}
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
