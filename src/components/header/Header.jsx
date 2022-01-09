import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import stack from "../../assets/images/stake.png";
import swap from "../../assets/images/swap.png";
import doc from "../../assets/images/doc.png";
import reddit from "../../assets/icons/raddit.png";
import git from "../../assets/icons/github.png";
import tw from "../../assets/icons/twitter.png";
import tl from "../../assets/icons/telegram.png";
import m from "../../assets/icons/medium.png";
import insta from "../../assets/icons/insta.png";

const Header = () => {
  const [hamburger, setHamburger] = useState("false");
  const clickHandler = () => {
    if (hamburger === "true") {
      setHamburger("false");
    } else {
      setHamburger("true");
    }
  };
  return (
    <div className={styles.header}>
      <div className="container">
        <nav className={styles.headerWrapper}>
          <div className={styles.logo}>
            {/* <img src="/images/Quick Logo.png" alt="" /> */}
          </div>
          <div className={styles.navbar}>
            <ul className={styles.navbar_nav}>
              <li className={styles.navItems}>
                <a className={styles.navLink} href="/">
                  Overview
                </a>
              </li>
              <li className={styles.navItems}>
                <a className={styles.navLink} href="/">
                  Landing
                </a>
              </li>
              <li className={styles.navItems}>
                <a className={styles.navLink} href="/">
                  Pages
                </a>
              </li>
              <li className={styles.navItems}>
                <a className={styles.navLink} href="/">
                  Docs
                </a>
              </li>
              <li>
                <label
                  className={
                    hamburger === "false"
                      ? `${styles.humbergButton}`
                      : `${styles.humbergButton}`
                  }
                  onClick={clickHandler}
                >
                  <span
                    className={
                      hamburger === "false"
                        ? `${styles.topbar}`
                        : `${styles.topbarab}`
                    }
                  ></span>
                  <span
                    className={
                      hamburger === "false"
                        ? `${styles.middlebar}`
                        : `${styles.middlebarab}`
                    }
                  ></span>
                  <span
                    className={
                      hamburger === "false"
                        ? `${styles.bottombar}`
                        : `${styles.bottombarab}`
                    }
                  ></span>
                </label>
              </li>
            </ul>
            {hamburger === "true" ? (
              <div className={styles.wrapper}>
                <div className={styles.wrapperItems}>
                  <div className={styles.wrapperLogo}>
                    <img src={logo} alt="" />
                  </div>

                  <Link to="/">
                    <div style={{ display: "flex", marginLeft: "40px" }}>
                      <div>
                        <img style={{ width: "40px" }} src={stack} alt="" />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "38px", marginLeft: "10px" }}>
                          Stake
                        </h4>
                      </div>
                    </div>
                  </Link>
                  <Link to="/swap">
                    <div style={{ display: "flex", marginLeft: "40px" }}>
                      <div>
                        <img style={{ width: "40px" }} src={swap} alt="" />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "38px", marginLeft: "10px" }}>
                          Swap
                        </h4>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <h5
                      style={{
                        fontSize: "20px",
                        color: "white",
                        marginTop: "70px",
                        marginRight: "120px",
                      }}
                    >
                      Stack your SCT & Earn Daily!
                    </h5>
                  </div>
                  <button className={styles.btnbtn}>LEARN MORE</button>
                  <div className={styles.imgsss}>
                    <img src={doc} alt="" />
                    <img src={reddit} alt="" />
                    <img src={git} alt="" />
                    <img src={tw} alt="" />
                    <img src={tl} alt="" />
                    <img src={m} alt="" />
                    <img src={insta} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.wrapperab}>
                <div className={styles.wrapperItems}>
                  <div className={styles.wrapperLogo}>
                    <img src={logo} alt="" />
                  </div>

                  <Link to="/">
                    <div
                      style={{ display: "flex", marginLeft: "40px" }}
                      className={styles.ss}
                    >
                      <div>
                        <img style={{ width: "40px" }} src={stack} alt="" />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "38px", marginLeft: "10px" }}>
                          Stake
                        </h4>
                      </div>
                    </div>
                  </Link>
                  <Link to="/swap">
                    <div
                      style={{ display: "flex", marginLeft: "40px" }}
                      className={styles.ss}
                    >
                      <div>
                        <img style={{ width: "40px" }} src={swap} alt="" />
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "38px",
                            marginLeft: "10px",
                          }}
                        >
                          Swap
                        </h4>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <h5
                      style={{
                        fontSize: "20px",
                        color: "white",
                        marginTop: "70px",
                        marginRight: "120px",
                      }}
                    >
                      Stack your SCT & Earn Daily!
                    </h5>
                  </div>
                  <button className={styles.btnbtn}>LEARN MORE</button>
                  <div className={styles.imgsss}>
                    <img src={doc} alt="" />
                    <img src={reddit} alt="" />
                    <img src={git} alt="" />
                    <img src={tw} alt="" />
                    <img src={tl} alt="" />
                    <img src={m} alt="" />
                    <img src={insta} alt="" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
