import React from "react";
import { Link } from "react-router-dom";
const Error = (props) => {
  return (
    <>
      <div className="error_page">
        <div className="error_content">
          <h1>Oops! Something went wrong.</h1>
          <p>
            We're sorry, but it seems there was an error. Please try again
            later.
          </p>

          {/* <a href="/home" className="home_button">

            Go to Home Page
          </a> */}
          <Link to={props.to}>
            <button className="home_button">Go Back HOME</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Error;
