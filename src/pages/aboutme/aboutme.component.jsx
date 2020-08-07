import React from "react";
import { withRouter } from "react-router-dom";

import "./aboutme.styles.scss";
import Header from "../../components/header/header.component";
import Portrait from "../../assets/moi.jpg";
import Accenture from "../../assets/97-975298_image-result-for-accenture-logo-accenture-logo-lgbt.png";
import Anahuac from "../../assets/1200px-Logo_Universidad_Anahuac.svg.png";
import Acomer from "../../assets/imagotiponaranjacool.svg";
import Cefim from "../../assets/LOGO-VERTICAL-2009p.jpg";
import Idf from "../../assets/idf.jpg";
import LineGreen from "../../assets/line.svg";

const AboutMePage = () => (
  <div className="king-container">
    <div className="homepage">
      <Header />
      <div className="bio">
        <img src={Portrait} className="portrait"  alt=""></img>
        <p className="text">
          Hi there!, I'm{" "}
          <a href="/" className="name">
            {"Gabriela"}
          </a>
          .
        </p>
        <p className="text">
          {" "}
          <a href="/" className="emphasis">
            {"UX designer"}
          </a>
          , writer and entrepreneur based in Mexico.{" "}
        </p>
        <p className="text">
          I currently work empowering front-end developing solutions at
          <a href="/" className="emphasis">
            {" Accenture"}
          </a>
          .
        </p>
        <p className="text">
          Aside from soothing the life of people, I live to write poetry and
          make social & emotional connections all around the world.
        </p>
      </div>
      <div className="buttons">
        <form
          action="https://www.linkedin.com/in/gabriela-colín-b80781117"
          method="get"
          target="_blank"
        >
          <button type="submit" className="button-b">
            <a
              href="https://www.linkedin.com/in/gabriela-colín-b80781117"
              class="icon"
            >
              {" "}
            </a>
            LinkedIn
          </button>
        </form>

        <form
          action="mailto:gabriela.co.design@gmail.com"
          method="get"
          target="_blank"
        >
          <button type="submit" className="button-c">
            <a href="mailto:gabriela.co.design@gmail.com" class="icon">
              {" "}
            </a>
            Drop me an email
          </button>
        </form>
      </div>

      <p className="section-title">WORK</p>
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
        <img src={Acomer}  alt=""></img>
        <div className="text-wrapper">
          <p className="title">A comer!</p>
          <p className="subtitle">Graphic designer · 2016 - 2019</p>
        </div>
      </div>

      <p className="section-title">VOLUNTEERING</p>
      <div className="image-text">
        <img src={Cefim} alt=""></img>
        <div className="text-wrapper">
          <p className="title">CEFIM</p>
          <p className="subtitle">Graphic designer · 2017 - 2018</p>
        </div>
      </div>
      <p className="section-title">CERTIFICATIONS</p>
      <div className="image-text">
        <img src={Idf} alt=""></img>
        <div className="text-wrapper">
          <p className="title">Interaction Design Foundation</p>
          <p className="subtitle">Become a UX Designer from Scratch · 2020</p>
          <a href="https://www.interaction-design.org/gabriela-colin/certificate/course/e783747b-87b4-4d75-80a9-1e801c875f5e">
            Course certificate
          </a>
        </div>
      </div>
      <div className="image-text">
        <img src={Idf}  alt=""></img>
        <div className="text-wrapper">
          <p className="title">Interaction Design Foundation</p>
          <p className="subtitle">Conducting Usability Testing · 2020</p>
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
            UI Design Patterns for Successful Software · 2020
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
          <p className="subtitle">Mobile User Experience (UX) Design · 2020</p>
        </div>
      </div>
      <p className="section-title">EDUCATION</p>
      <div className="image-text">
        <img src={Anahuac} alt=""></img>
        <div className="text-wrapper">
          <p className="title">Universidad Anáhuac México Norte</p>
          <p className="subtitle">
            Telecommunications and Technology Information Engineering · 2018
          </p>
        </div>
      </div>
      <div className="contact">
        <img src={LineGreen} alt=""></img>
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
