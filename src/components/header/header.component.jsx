import React from "react";
import { withRouter } from "react-router-dom";
import Gab from "../../assets/logo.svg";

import "./header.styles.scss";

const Header = props => (
  <div className="header-container">
    <img
      src={Gab}
      className="logo"
      onClick={() => props.history.push("/")}
      alt=""
    ></img>

    <div className="menu">
      <div className="tabs">
        <button
          onClick={() => props.history.push("/ux-portfolio")}
          className="portfolio"
        >
          UX PORTFOLIO
        </button>
      </div>
      <div className="tabs">
        <button
          onClick={() => props.history.push("/about-me")}
          className="aboutme"
        >
          ABOUT ME
        </button>
      </div>
      <div className="tabs">
        <a href="mailto:gabriela.co.design@gmail.com" class="portfolio">
          {"CONTACT"}
        </a>
      </div>
    </div>
  </div>
);

export default withRouter(Header);
