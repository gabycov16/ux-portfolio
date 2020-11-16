import React from "react";
import "./portfolio.styles.scss";
import Mixup from "../../assets/mixup.svg";
import Ecolife from "../../assets/ecolife.svg";
import Header from "../../components/header/header.component";

const Portfolio = ({ history, linkUrl, match }) => (
  <div className="king-container">
    <div className="homepage">
      <Header />
      <div className="title-c">UX Projects:</div>
       <div className="contact">
        <span className="contact-title">Got a project in mind?</span>
        <span className="contact-subtitle">Feel free to reach me:</span>
        <a className="email" href="mailto:gabriela.co.design@gmail.com">
          gabriela.co.design@gmail.com
        </a>
      </div>
    </div>
    <div className="overlay"></div>
  </div>
);

export default Portfolio;
