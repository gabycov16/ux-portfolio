import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./homepage.styles.scss";
import Header from "../../components/header/header.component";

import Gab from "../../assets/logo.svg";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Navbar, Nav, Button } from "react-bootstrap";

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
      <div className="buttons">
        <form
          action="https://www.linkedin.com/in/gabriela-co"
          method="get"
          target="_blank"
        >
          <button type="submit" className="button-b">
            <a href="https://www.linkedin.com/in/gabriela-co" class="icon">
              {" "}
            </a>
            LinkedIn
          </button>
        </form>
        <button
          onClick={() => props.history.push("/ux-portfolio")}
          className="button-c"
        >
          UX Portfolio
        </button>
      </div>
    </div>
    <div className="overlay"></div>
  </div>
);

export default withRouter(HomePage);
