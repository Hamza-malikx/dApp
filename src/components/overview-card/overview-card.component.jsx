import React from "react";

import cap from "../../assets/icons/overview-cap.png";

import "./overview-card.style.scss";

export default function OverviewCard(props) {
  return (
    <div className="overview-card">
      <img className="icon" src={props.price} alt="icon" />
      <div className="text-container" style={{ color: "white" }}>
        <p className="text">{props.text}</p>
        <span className="number">{props.prize}</span>
      </div>
    </div>
  );
}
