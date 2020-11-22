import React from "react";
import "./portfolio.styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/header/header.component";
import Mixup from "../../assets/mixup.svg";
import Ecolife from "../../assets/ecolife.svg";

const Portfolio = ({ history, linkUrl, match }) => (
  <div className="king-container">
    <div className="homepage">
      <Header />
      <Container>
        <Row  onClick={() => history.push("/ux-portfolio/ecolife")}>
          <Col xs={12} sm={6} md={6} xl={6}  lg={6} className="left-info">
            <Col >
              <p className="subtitle-info">A new way to help nature</p>
            </Col>
            <Col>
              <div class="case-studies__b" >
                <p className="button-text">VIEW CASE STUDY</p>
              </div>
            </Col>
          </Col>
          <Col className="right-info">
            <div
              className="case-studies__image"
              style={{ backgroundImage: `url(${Ecolife})` }}
            ></div>
          </Col>
        </Row>
      
        <Row onClick={() => history.push("/ux-portfolio/mixup")}>
          <Col xs={12} sm={6} md={6} xl={6}  lg={6} className="left-info">
            <Col >
              <p className="subtitle-info">Music & technology choice</p>
            </Col>
            <Col>
              <div class="case-studies__b" >
                <p className="button-text">VIEW CASE STUDY</p>
              </div>
            </Col>
          </Col>
          <Col className="right-info">
            <div
              className="case-studies__image"
              style={{ backgroundImage: `url(${Mixup})` }}
            ></div>
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
