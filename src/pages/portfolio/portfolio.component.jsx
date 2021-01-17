import React from "react";
import "./portfolio.styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/header/header.component";
import Mixup from "../../assets/mixU.svg";
import Ecolife from "../../assets/ecoL.svg";
import SoftSkills from "../../assets/soft-skill.svg";
import Bg from "../../assets/bg.svg"; 

const Portfolio = ({ history, linkUrl, match }) => (
  <div className="king-container">
    <div className="homepage">
      <Header />
      <Container>
        <Row>
          <Col onClick={() => history.push("/ux-portfolio/ecolife")}>
            <div className="image image-1">
              <img src={Ecolife} className="case-studies__image " alt=""></img>
            </div>
            <div className="image image-2">
              <div class="content linkedin">
                <p className="subtitle-info">Mobile app: A new way to help nature</p>
                <div class="case-studies__b">
                  <p className="button-text">VIEW CASE STUDY</p>
                </div>
              </div>
            </div>
          </Col>
          <Col onClick={() => history.push("/ux-portfolio/soft-skills")}>
            <div className="image image-1">
              <img src={SoftSkills} className="case-studies__image " alt=""></img>
            </div>
            <div className="image image-2">
              <div class="content linkedin">
                <p className="subtitle-info">Webpage: Helping young ones master skills and get the job </p>
                <div class="case-studies__b">
                  <p className="button-text">VIEW CASE STUDY</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col onClick={() => history.push("/ux-portfolio/mixup")}>
            <div className="image image-1">
              <img src={Mixup} className="case-studies__image " alt=""></img>
            </div>
            <div className="image image-2">
              <div class="content linkedin">
                <p className="subtitle-info">Webpage: Music & technology choice</p>
                <div class="case-studies__b">
                  <p className="button-text">VIEW CASE STUDY</p>
                </div>
              </div>
            </div>
          </Col>
          

        </Row>
      </Container>

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
