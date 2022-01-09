import React from "react";
import img from "../../assets/images/Shape 3.png";
import icon from "../../assets/icons/rightDivSwap.png";
import settings from "../../assets/icons/settings.png";
import retry from "../../assets/icons/retry.png";
import bIcon from "../../assets/icons/BIcon.png";
import dIcon from "../../assets/icons/dropIcon.png";
import rrIcon from "../../assets/icons/rrIcon.png";
import bscIcon from "../../assets/icons/bscIcon.png";
import success from "../../assets/icons/success.png";
import failed from "../../assets/icons/failed.png";
import "./swap.style.scss";
import styles from "./swap.module.css";
import { DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
export default function Swap() {
  return (
    <div>
      <div className={styles.mainRow}>
        <div className={styles.leftDiv}>
          <div className={styles.leftDivContent}>
            <h2>
              <span> BNB/CAKE</span>
              <span>Basic</span>
              <span>Trading View</span>
            </h2>
            <h1>
              <span>42.77 BNB/CAKE</span>
              <span>-0.818(-1.88%)</span>
            </h1>
            <h4>
              <span>Jan 03,2022</span>
              <span> | </span>
              <span>11:36 AM</span>
            </h4>
            <ul className={styles.progress}>
              <li>24H</li>
              <li>1W</li>
              <li>1M</li>
              <li>1Y</li>
            </ul>
            <img src={img} alt="" className={styles.graph} />
            <ul className={styles.hoursProgress}>
              <li>01:00 PM </li>
              <li>04:00 PM </li>
              <li>07:00 PM </li>
              <li>10:00 PM </li>
              <li>12:00 PM </li>
              <li>03:00 AM </li>
              <li>06:00 AM </li>
              <li>09:00 AM </li>
              <li>11:36 AM </li>
            </ul>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.rightDivContent}>
            <div className={styles.firstRow}>
              <div className={styles.firstS}>
                <div>
                  <img src={icon} alt="" className={styles.swapIcon} />
                </div>
                <div>
                  <h2 className={styles.swap}>Swap</h2>
                </div>
              </div>
              <div>
                <div className={styles.firstS}>
                  <div>
                    <img
                      src={settings}
                      alt=""
                      className={`${styles.swapIcon} ${styles.swapIcon2}`}
                    />
                  </div>
                  <div>
                    <img src={retry} alt="" className={styles.swapIcon} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <DropdownButton
                id="dropdown-item-button"
                className={styles.select}
                title={
                  <>
                    <div className={styles.selectRow}>
                      <div>
                        <img src={bIcon} alt="" className={styles.selectimg} />
                        <span>BNB </span>
                        <span> | </span>
                        <span>0.0</span>
                      </div>
                      <div>
                        <img src={dIcon} alt="" className={styles.dIcon} />
                      </div>
                    </div>
                  </>
                }
              >
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className={styles.balance}>
              <div>
                <h3>Balance:68.2945</h3>
              </div>
              <div>
                <h5>Max</h5>
              </div>
            </div>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <img src={rrIcon} alt="" />
            </div>
            <div>
              <DropdownButton
                id="dropdown-item-button"
                className={styles.select}
                title={
                  <>
                    <div className={styles.selectRow}>
                      <div>
                        <img src={bIcon} alt="" className={styles.selectimg} />
                        <span>Cake </span>
                        <span> | </span>
                        <span>0.0</span>
                      </div>
                      <div>
                        <img src={dIcon} alt="" className={styles.dIcon} />
                      </div>
                    </div>
                  </>
                }
              >
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className={styles.slipageT}>
              <div>
                <h5>Slippage Tolerance</h5>
              </div>
              <div>
                <h6>12%</h6>
              </div>
            </div>
            <div className={styles.input}>
              <input type="text" placeholder="asjd" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ color: "white", marginTop: "10px" }}>
          Transaction History
        </h3>
        <div className={styles.tableDiv}>
          <Table size="sm" className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.first}>SWAPPED TOKENS</th>
                <th className={styles.th2nd}>BSCSCAN</th>
                <th className={styles.th2nd}>Validation</th>
                <th>SWAPPED TOKENS</th>
                <th className={styles.th2nd}>BSCSCAN</th>
                <th className={styles.last}>Validation</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td>
                  <div className={styles.td1st}>
                    <div>
                      <img src={bIcon} alt="" />
                    </div>
                    <div>
                      <h6>Swap 0.0117 BNB for 1000 SCT</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td2nd}>
                    <img src={bscIcon} alt="" />
                  </div>
                </td>
                <td>
                  <div className={styles.td3rd}>
                    <div>
                      <img src={success} alt="" />
                    </div>
                    <div>
                      <h6>Success</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td1st}>
                    <div>
                      <img src={bIcon} alt="" />
                    </div>
                    <div>
                      <h6>Swap 0.0117 BNB for 1000 SCT</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td2nd}>
                    <img src={bscIcon} alt="" />
                  </div>
                </td>
                <td>
                  <div className={styles.td3rd}>
                    <div>
                      <img src={success} alt="" />
                    </div>
                    <div>
                      <h6>Success</h6>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.td1st}>
                    <div>
                      <img src={bIcon} alt="" />
                    </div>
                    <div>
                      <h6>Swap 0.0117 BNB for 1000 SCT</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td2nd}>
                    <img src={bscIcon} alt="" />
                  </div>
                </td>
                <td>
                  <div className={styles.td3rd}>
                    <div>
                      <img src={failed} alt="" />
                    </div>
                    <div>
                      <h6>Failed</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td1st}>
                    <div>
                      <img src={bIcon} alt="" />
                    </div>
                    <div>
                      <h6>Swap 0.0117 BNB for 1000 SCT</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td2nd}>
                    <img src={bscIcon} alt="" />
                  </div>
                </td>
                <td>
                  <div className={styles.td3rd}>
                    <div>
                      <img src={failed} alt="" />
                    </div>
                    <div>
                      <h6>Failed</h6>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.td1st}>
                    <div>
                      <img src={bIcon} alt="" />
                    </div>
                    <div>
                      <h6>Swap 0.0117 BNB for 1000 SCT</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td2nd}>
                    <img src={bscIcon} alt="" />
                  </div>
                </td>
                <td>
                  <div className={styles.td3rd}>
                    <div>
                      <img src={success} alt="" />
                    </div>
                    <div>
                      <h6>Success</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td1st}>
                    <div>
                      <img src={bIcon} alt="" />
                    </div>
                    <div>
                      <h6>Swap 0.0117 BNB for 1000 SCT</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.td2nd}>
                    <img src={bscIcon} alt="" />
                  </div>
                </td>
                <td>
                  <div className={styles.td3rd}>
                    <div>
                      <img src={success} alt="" />
                    </div>
                    <div>
                      <h6>Success</h6>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
