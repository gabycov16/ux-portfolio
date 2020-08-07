import React from "react";
import { withRouter } from "react-router-dom";
import "./homepage.styles.scss";
import Header from "../../components/header/header.component";

const HomePage = props => (
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
      <div className="buttons-homepage">
        <button
          className="button-a"
          onClick={() => props.history.push("/about-me")}
        >
          Read more...
        </button>
      </div>
    </div>
    <div className="overlay"></div>
  </div>
);

export default withRouter(HomePage);
