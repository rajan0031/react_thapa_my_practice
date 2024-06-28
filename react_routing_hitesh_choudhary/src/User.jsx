import { React } from "react";

import { useParams, useLocation, useHistory } from "react-router-dom";
const User = () => {
  const { name, lname } = useParams();
  const location = useLocation();
  const history = useHistory();

  console.log(history);
  return (
    <>
      <h1>
        hii {name} {lname} ji !.
      </h1>
      <p>
        hey user your current location is :
        <span style={{ color: "green", fontSize: "30px" }}>
          {location.pathname}
        </span>
      </p>
      {location.pathname === `/User/rajan/kushwaha` ? (
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          you got me
        </button>
      ) : null}
    </>
  );
};

export default User;
