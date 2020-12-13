import React from "react";
import "./soft-skills.styles.scss";
import Header from "../../components/header/header.component";
import { withRouter } from "react-router-dom";


const SoftSkills = props => (
  <div className="king-container">
    <div className="homepage">
      <Header />
      <p>Hi there! Thank you for visiting.</p>
    </div>
  </div>
);

export default withRouter(SoftSkills);
