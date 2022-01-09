import React from "react";
import price from "../../assets/icons/price.png";
import holding from "../../assets/images/holding.png";
import cap from "../../assets/images/cap.png";
// COMPONENT
import OverviewCard from "../overview-card/overview-card.component";

import "./overview.style.scss";

export default function Overview() {
  return (
    <div className="overview">
      <p className="overview__heading" style={{ color: "white" }}>
        SCT Overview
      </p>
      <div className="card-container">
        <OverviewCard price={cap} />
        <OverviewCard price={price} />
        <OverviewCard price={holding} />
      </div>
    </div>
  );
}
