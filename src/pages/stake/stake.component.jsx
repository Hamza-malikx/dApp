import React from "react";
import styles from "./stake.module.css";
import Overview from "../../components/overview/overview.component";
import Table from "react-bootstrap/Table";
import "./stake.style.scss";
import "../../sass/typography.scss";
import tokens from "../../assets/icons/tokens.png";
export default function Stake() {
  return (
    <div className="stake">
      <div className="stake__notice">
        <div className={styles.left}>
          <div className={styles.leftImg}>
            <div className={styles.leftContent}>
              <span className={styles.safe}>Safe</span>
              <span className={styles.chain}>Chain</span>
              <span className={styles.swap}>Swap</span>
              <h5>
                Will be Live in <span className={styles.tt}>Q1/2022</span>
              </h5>
              <h5 className={styles.swapAgain}>Swap Any Token With Ease!</h5>
              <button className={styles.learnMore}>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightBgImg}>
            {/* <img src="" alt="" /> */}
            <div className={styles.leftContent}>
              <span className={styles.safe}>Safe</span>
              <span className={styles.chain}>Chain</span>
              <span className={styles.swap}>Swap</span>
              <h5>
                Will be Live in <span className={styles.tt}>Q1/2022</span>
              </h5>
              <h5 className={styles.swapAgain}>Swap Any Token With Ease!</h5>
              <button className={styles.learnMoreAgain}>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="stake__overview">
        <Overview />
        <Overview />
      </div>
      <div className="stake__history">
        <h2 className="heading" style={{ color: "white" }}>
          History
        </h2>
        <div className={styles.tableDiv}>
          <Table size="sm" className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.first}>TOKENS</th>
                <th className={styles.th2nd}>EST.APY</th>
                <th className={styles.th2nd}>DURATION</th>
                <th className={styles.th2nd}>STAKING REWARDS</th>
                <th className={styles.th2nd}>STAKED AMOUNT</th>
                <th className={styles.last}>ACTION</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td>
                  <div className={styles.td1st}>
                    <div>
                      <img src={tokens} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td2nd}>
                    <h5>15%</h5>
                  </div>
                </td>
                <td>
                  <div className={styles.td3rd}>
                    <div>
                      <h6>30 Days</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td4st}>
                    <div>
                      <h6>0 SCT</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td2nd}>
                    {/* <img src={bscIcon} alt="" /> */}
                    <h6>0 SCT</h6>
                  </div>
                </td>
                <td className={styles.tdLast}>
                  <button className="harvest">harvest</button>
                  <button className="stake1">Stake</button>
                  <button className="unstake1">Unstake</button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.td1st}>
                    <div>
                      <img src={tokens} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td2nd}>
                    <h5>34%</h5>
                  </div>
                </td>
                <td>
                  <div className={styles.td3rd}>
                    <div>{/* <img src={success} alt="" /> */}</div>
                    <div>
                      <h6>60 Days</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td4st}>
                    <div>
                      <h6>0 SCT</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td2nd}>
                    {/* <img src={bscIcon} alt="" /> */}
                    <h6>0 SCT</h6>
                  </div>
                </td>
                <td className={styles.tdLast}>
                  <button className="harvest">harvest</button>
                  <button className="stake1">Stake</button>
                  <button className="unstake1">Unstake</button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.td1st}>
                    <div>
                      <img src={tokens} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td2nd}>
                    <h5>16%</h5>
                  </div>
                </td>
                <td>
                  <div className={styles.td3rd}>
                    <div>{/* <img src={success} alt="" /> */}</div>
                    <div>
                      <h6>90 Days</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td4st}>
                    <div>
                      <h6>0 SCT</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td2nd}>
                    {/* <img src={bscIcon} alt="" /> */}
                    <h6>0 SCT</h6>
                  </div>
                </td>
                <td className={styles.tdLast}>
                  <button className="harvest">harvest</button>
                  <button className="stake1">Stake</button>
                  <button className="unstake1">Unstake</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
