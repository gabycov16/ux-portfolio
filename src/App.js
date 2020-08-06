import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import AboutMePage from "./pages/aboutme/aboutme.component";
import Portfolio  from './pages/portfolio/portfolio.component';
import Mixup from './pages/mixup/mixup.component';
import Ecolife from './pages/ecolife/ecolife.component';

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about-me" component={AboutMePage} />
          <Route exact path="/case-studies" component={Portfolio} />
          <Route path="/case-studies/mixup" component={Mixup} />
          <Route path="/case-studies/ecolife" component={Ecolife} />
        </Switch>
      </div>
    );
  }
}

export default App;
