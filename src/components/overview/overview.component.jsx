import React from "react";
import price from "../../assets/icons/price.png";
import holding from "../../assets/images/holding.png";
import cap from "../../assets/images/cap.png";
import pool from "../../assets/images/pool.png";
import reward from "../../assets/images/reward.png";
import locked from "../../assets/images/locked.png";
// COMPONENT
import OverviewCard from "../overview-card/overview-card.component";

import "./overview.style.scss";

export default function Overview(props) {
  return (
    <div className="ovv">
      <div className="overview">
        <p className="overview__heading1" style={{ color: "white" }}>
          SCT Overview
        </p>
        <div className="card-container">
          <OverviewCard price={cap} text={"MARKET CAP"} prize={"$1,550,000"} />
          <OverviewCard price={price} text={"SCT PRICE"} prize={"$0.0062"} />
          <OverviewCard price={holding} text={"SCT HOLDING"} prize={"0.00"} />
        </div>
      </div>
      <div className="overview">
        <p className="overview__heading2" style={{ color: "white" }}>
          Staking Overview
        </p>
        <div className="card-container">
          <OverviewCard
            price={pool}
            text={"POOL SCT AMOUNT"}
            prize={"10,012,824.5 SCT"}
          />
          <OverviewCard
            price={reward}
            text={"TOTAL STAKING REWARDS"}
            prize={"161.68.00 SCT"}
          />
          <OverviewCard
            price={locked}
            text={"TOTAL VALUE LOCKED"}
            prize={"104019.78 SCT"}
          />
        </div>
      </div>
    </div>
  );
}
