import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Hero } from "./pages/Hero";

const RouterHero = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/hero/:heroId" component={Hero} />
    </Router>
  );
};

export default RouterHero;
