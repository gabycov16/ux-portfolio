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
      <div
        className="case-studies"
        onClick={() => history.push(`${match.url}/mixup`)}     
      >
        <div
          className="case-studies__image"
          id="cs"
          style={{ backgroundImage: `url(${Mixup})` }}
        >
          <div className="info-container">
            <div class="case-studies__info case-studies__location">
              <p className="subtitle-info">Music & technology choice</p>
              <div class="case-studies__b">
                <p className="button-text">VIEW CASE STUDY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="case-studies"
        onClick={() => history.push(`${match.url}/ecolife`)}
      >
        <div
          className="case-studies__image"
          style={{ backgroundImage: `url(${Ecolife})` }}
        >
          <div className="info-container">
            <div class="case-studies__info case-studies__location">
              <p className="subtitle-info">A new way to help nature</p>
              <div class="case-studies__b">
                <p className="button-text">VIEW CASE STUDY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
