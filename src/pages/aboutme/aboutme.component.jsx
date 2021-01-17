import React from "react";
import { withRouter } from "react-router-dom";
import "./aboutme.styles.scss";
import Header from "../../components/header/header.component";
import Portrait from "../../assets/avatar.png";
import Accenture from "../../assets/accenture.png";
import Anahuac from "../../assets/1200px-Logo_Universidad_Anahuac.svg.png";
import Acomer from "../../assets/imagotiponaranjacool.svg";
import Cefim from "../../assets/LOGO-VERTICAL-2009p.jpg";
import Idf from "../../assets/idf.jpg";
import Bg from "../../assets/bg-aboutme.svg";
import Paint from "../../assets/paint.svg";

const AboutMePage = props => (
  <div className="king-container">
    <div className="homepage">
      <Header />
      <div className="vh100" style={{ backgroundImage: `url(${Bg})` }}>
        <div className="bio">
          <img src={Portrait} className="portrait" alt=""></img>
          <div className="intro-container">
            <div className="intro">
              <p className="text">
                Hi there!, I'm{" "}
                <a href="/" className="name">
                  {"Gabriela"}
                </a>
                .
              </p>
              <p className="text">
                Curious{" "}
                <a href="/" className="emphasis">
                  {"UX designer"}{" "}
                </a>
                based in Mexico.{" "}
              </p>
              <p className="text">
                I currently work empowering front-end developing solutions at
                <a href="/" className="emphasis">
                  {" Accenture"}
                </a>
                .
              </p>
              <p className="text">
                Aside from soothing the life of people, I live to write poetry
                and make social & emotional connections all around the world.
              </p>
              <p className="text">This website is coded by me.</p>
              <div className="buttons-ab">
                <form
                  action="https://www.linkedin.com/in/gabriela-co"
                  method="get"
                  target="_blank"
                >
                  <button type="submit" className="button-b">
                    <a
                      href="https://www.linkedin.com/in/gabriela-co"
                      class="icon"
                    >
                      {" "}
                    </a>
                    LinkedIn
                  </button>
                </form>
                <button
                  onClick={() => props.history.push("/ux-portfolio")}
                  className="button-a"
                >
                  UX Portfolio
                </button>
              </div>
              <div className="buttons-mobile">
                <form
                  action="https://www.linkedin.com/in/gabriela-co"
                  method="get"
                  target="_blank"
                >
                  <button type="submit" className="button-a">
                    <a
                      href="https://www.linkedin.com/in/gabriela-co"
                      class="icon"
                    >
                      {" "}
                    </a>
                  </button>
                </form>
                <button
                  onClick={() => props.history.push("/ux-portfolio")}
                  className="button-a"
                >
                  <img src={Paint} alt=""></img>
                </button>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="buttons-hide">
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
            className="button-a"
          >
            UX Portfolio
          </button>
        </div>
      </div>
      <div className="section-container" data-aos="fade-up">
        <p className="section-title">Work</p>
        <div className="image-text">
          <img src={Accenture} alt=""></img>
          <div className="text-wrapper">
            <p className="title">Accenture</p>
            <p className="subtitle">
              Application Development Analyst · 2018 - Now
            </p>
          </div>
        </div>
        <div className="image-text">
          <img src={Acomer} alt=""></img>
          <div className="text-wrapper">
            <p className="title">A comer!</p>
            <p className="subtitle">Graphic designer · 2016 - 2019</p>
          </div>
        </div>
      </div>
      <div className="section-container" data-aos="fade-up">
        <p className="section-title">Volunteering</p>
        <div className="image-text">
          <img src={Cefim} alt=""></img>
          <div className="text-wrapper">
            <p className="title">CEFIM</p>
            <p className="subtitle">Graphic designer · 2017 - 2018</p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <p className="section-title">Certifications</p>
        <div className="image-text">
          <img src={Idf} alt=""></img>
          <div className="text-wrapper">
            <p className="title">Interaction Design Foundation</p>
            <p className="subtitle">Become a UX Designer from Scratch</p>
            <a href="https://www.interaction-design.org/gabriela-colin/certificate/course/e783747b-87b4-4d75-80a9-1e801c875f5e">
              Course certificate
            </a>
          </div>
        </div>
        <div className="image-text">
          <img src={Idf} alt=""></img>
          <div className="text-wrapper">
            <p className="title">Interaction Design Foundation</p>
            <p className="subtitle">Conducting Usability Testing</p>
            <a href="https://www.interaction-design.org/gabriela-colin/certificate/course/d2c9e958-0985-4117-834a-1de5c6fc3f37">
              Course certificate
            </a>
          </div>
        </div>
        <div className="image-text">
          <img src={Idf} alt=""></img>
          <div className="text-wrapper">
            <p className="title">Interaction Design Foundation</p>
            <p className="subtitle">
              UI Design Patterns for Successful Software
            </p>
            <a href="https://www.interaction-design.org/gabriela-colin/certificate/course/d45a2ea7-b6f7-4646-b7c6-a5b927befc16">
              Course certificate
            </a>
          </div>
        </div>
        <div className="image-text">
          <img src={Idf} alt=""></img>
          <div className="text-wrapper">
            <p className="title">Interaction Design Foundation</p>
            <p className="subtitle">Mobile User Experience (UX) Design</p>
            <a href="https://www.interaction-design.org/gabriela-colin/certificate/course/b0a6afc1-995a-4cbc-a0ef-e979f5c0325e">
              Course certificate
            </a>
          </div>
        </div>
        <div className="image-text">
          <img src={Idf} alt=""></img>
          <div className="text-wrapper">
            <p className="title">Interaction Design Foundation</p>
            <p className="subtitle">Information Visualization</p>
            <a href="https://www.interaction-design.org/gabriela-colin/certificate/course/41a3b4dd-b762-4b3d-a8f9-2aef5eb58d54">
              Course certificate
            </a>
          </div>
        </div>
        <div className="image-text">
          <img src={Idf} alt=""></img>
          <div className="text-wrapper">
            <p className="title">Interaction Design Foundation</p>
            <p className="subtitle">
              The Ultimate Guide to Visual Perception and Design
            </p>
            <a href="https://www.interaction-design.org/gabriela-colin/certificate/course/ce841f5b-9ff7-46e1-937a-059995685386">
              Course certificate
            </a>
          </div>
        </div>
      </div>
      <div className="section-container">
        <p className="section-title">Education</p>
        <div className="image-text">
          <img src={Anahuac} alt=""></img>
          <div className="text-wrapper">
            <p className="title">Universidad Anáhuac México Norte</p>
            <p className="subtitle">
              Telecommunications and Technology Information Engineering · 2018
            </p>
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

export default withRouter(AboutMePage);
