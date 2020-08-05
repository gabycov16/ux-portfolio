import React from "react";
import {withRouter } from "react-router-dom";

import "./header.styles.scss";

const Header = props => (
  <div className="header-container">
    <div className="image">
      <a href="/" className="logo">
        {" "}
      </a>
    </div>
    <div className="menu">
      <div className="tabs">
      <button onClick={() => props.history.push('/')} className="portfolio">HOME</button>
      </div>
      <div className="tabs">
      <button onClick={() => props.history.push('/ux-portfolio')} className="portfolio">UX PORTFOLIO</button>
      </div>
      <div className="tabs">
        <button onClick={() => props.history.push('/about-me')} className="aboutme">ABOUT ME</button>
      </div>
    </div>
  </div>
);

export default withRouter(Header);
