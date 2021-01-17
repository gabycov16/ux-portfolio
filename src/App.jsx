import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import AboutMePage from "./pages/aboutme/aboutme.component";
import Portfolio  from './pages/portfolio/portfolio.component';
import Mixup from './pages/mixup/mixup.component';
import Ecolife from './pages/ecolife/ecolife.component';
import SoftSkills from './pages/soft-skills/soft-skills.component';

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about-me" component={AboutMePage} />
          <Route exact path="/ux-portfolio" component={Portfolio} />
          <Route path="/ux-portfolio/mixup" component={Mixup} />
          <Route path="/ux-portfolio/ecolife" component={Ecolife} />
          <Route path="/ux-portfolio/soft-skills" component={SoftSkills} />
        </Switch>
      </div>
    );
  }
}

export default App;
