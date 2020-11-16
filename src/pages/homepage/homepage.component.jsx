import React from "react";
import { withRouter } from "react-router-dom";
import "./homepage.styles.scss";
import Header from "../../components/header/header.component";
import Mixup from "../../assets/mixup.svg";
import Ecolife from "../../assets/ecolife.svg";

const HomePage = ({ history, linkUrl, match }) => (
  <div className="king-container">
    <div className="homepage">
      <Header />

      <div className="body">
        <p className="title-surname animate__animated animate__fadeInUp">
          <a href="/" className="gabs">
            {"Gabriela "}
          </a>
          Colín Vázquez
        </p>
        <div className="bio-homepage">
          <p className="text">
            Nice to meet you!, I'm a
            <a href="/" className="emphasis">
              {" UX designer"}
            </a>
            , currently working as a Front-End Developer at{" "}
            <a href="/" className="emphasis">
              {"Accenture"}
            </a>
            . Fond of changing the way we experience the world everyday.
          </p>
        </div>
      </div>

      <div
        className="case-studies"
        onClick={() => history.push("/ux-portfolio/ecolife")}
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
      <div
        className="case-studies"
        onClick={() => history.push("/ux-portfolio/mixup")}
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
    </div>
    <div className="overlay"></div>
  </div>
);

export default withRouter(HomePage);
