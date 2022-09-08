import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { gameNames } from "../App";

const RotateCard = ({ imageNum }) => {
  const image = require(`../img/attackOnTitan${imageNum}.jpg`);

  // const flipCard = (e) => {
  //   e.target.parentNode.parentNode.classList.toggle('rotate')
  // }
  return (
    <div
      className="card"
      style={{
        transform: `rotateY(calc(${imageNum}*60deg)) translateZ(350px)`,
      }}
    >
      <div className="card-content">
        <div className="card-front">
          <img src={image} alt="" />
        </div>
        <div className="card-back">
          <Link to={gameNames[imageNum]}>
            <h3 style={{ color: "white" }}>{gameNames[imageNum]}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RotateCard;
