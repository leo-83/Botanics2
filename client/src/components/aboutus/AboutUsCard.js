import React from "react";

function AboutUsCard(props) {
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img src={props.image} alt="" />
        </div>
        <div className="card-content"></div>
        <div className="card-title">
          <h3>{props.name}</h3>
        </div>
        <div className="card-body">
          <p>{props.desc}</p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default AboutUsCard;

