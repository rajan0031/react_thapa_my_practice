import React from "react";
// import "./SearchResult.css"; // Import the appropriate CSS file

const SearchResult = (props) => {
  const img = `https://source.unsplash.com/400x300?${props.name}`;

  return (
    <div className={`img ${props.theme}`}>
      <img src={img} alt="" />
    </div>
  );
};

export default SearchResult;
