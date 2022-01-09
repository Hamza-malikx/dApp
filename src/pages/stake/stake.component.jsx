import React from "react";
import styles from "./stake.module.css";
// COMPONENT
import Notice from "../../components/notice/notice.component";
import Overview from "../../components/overview/overview.component";
import Button from "../../components/button/button.component";

// ICON
import token from "../../assets/icons/token.png";

import "./stake.style.scss";
import "../../sass/typography.scss";

export default function Stake() {
  return (
    <div className="stake">
      <div className="stake__notice">
        <Notice />
        <Notice />
      </div>
      <div className="stake__overview">
        <Overview />
        <Overview />
      </div>
      <div className="stake__history">
        <h2 className="heading" style={{ color: "white" }}>
          History
        </h2>
        <div className="table-container">
          <table style={{ color: "white" }} className="table">
            <thead className="table__head">
              <tr className="head-row">
                <th className="first-th">tokens</th>
                <th className="align-center">est. apy</th>
                <th className="align-center">duration</th>
                <th className="align-center">staking rewards</th>
                <th className="align-center">staked amount</th>
                <th className="last-th">action</th>
              </tr>
            </thead>
            <tbody className="table__body">
              <tr>
                <td>
                  <img className="token-icon" src={token} alt="token icon" />
                </td>
                <td className="align-center">15%</td>
                <td className="align-center">30 days</td>
                <td className="align-center">0 SCT</td>
                <td className="align-center">0 SCT</td>
                <td className="td-last">
                  <button className="harvest">harvest</button>
                  <button className="stake1">Stake</button>
                  <button className="unstake1">Unstake</button>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="token-icon" src={token} alt="token icon" />
                </td>
                <td className="align-center">34%</td>
                <td className="align-center">25 days</td>
                <td className="align-center">0 SCT</td>
                <td className="align-center">0 SCT</td>
                <td className="td-last">
                  <button className="harvest">harvest</button>
                  <button className="stake1">Stake</button>
                  <button className="unstake1">Unstake</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
