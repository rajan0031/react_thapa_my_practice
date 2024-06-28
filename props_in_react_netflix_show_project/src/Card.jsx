import React from "react";
import Images from "./Img";

function Card(props) {
  const box = {
    display: "flex",
    backgroundColor: "aquablue",
    border: "2px solid black",
    justifyContent: "center",
    padding: "10px 10px 10px 10px ",
    margin: "10px 10px 10px 10px ",
  };
  const cardStyle = {
    backgroundColor: "#333",
    maxWidth: "300px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
  };

  const cardContentStyle = {
    padding: "16px",
    color: "#fff",
  };

  const showTitleStyle = {
    fontSize: "1.5rem",
    margin: "0",
  };

  const showDescriptionStyle = {
    fontSize: "0.875rem",
    margin: "10px 0",
  };

  const playButtonStyle = {
    backgroundColor: "#e50914",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };

  const onPlayButtonClick = () => {
    window.location.href = props.href;
  };

  return (
    <div style={box}>
      <div style={cardStyle} className="card">
        <div style={cardContentStyle} className="card-content">
          <Images imgsrc={props.imgsrc} style={imgStyle} />
          <h2 style={showTitleStyle} className="show-title">
            {props.title}
          </h2>
          <p>{props.ott}</p>
          <p style={showDescriptionStyle} className="show-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button
            style={playButtonStyle}
            className="play-button"
            onClick={onPlayButtonClick}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
