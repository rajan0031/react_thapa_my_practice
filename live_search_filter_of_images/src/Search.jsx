import React, { useState } from "react";
// import "./imgGen.css"; // Import the provided CSS file
import SearchResult from "./SearchResult";

const Search = () => {
  const [img, setImg] = useState("");

  const inputEvent = (event) => {
    setImg(event.target.value);
  };

  return (
    <div className="ai-image-generator">
      <div className="header">Image Generator</div>
      <div className="search">
        <input
          type="text"
          placeholder="Search your images"
          onChange={inputEvent}
          value={img}
        />
      </div>
      {img === "" ? null : <SearchResult name={img} />}
    </div>
  );
};

export default Search;
