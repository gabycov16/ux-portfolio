import React from "react";
import {withRouter } from "react-router-dom";
import Gab from '../../assets/logo.svg'

import "./header.styles.scss";

const Header = (props) => (
  <div className="header-container">
    <div className="image">
    <img src={Gab} className="logo" onClick={() => props.history.push('/')}></img>
     
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
