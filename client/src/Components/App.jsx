import React from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/myfav">
          <Favorites />
          <Footer />
        </Route>
        <Route path="/contact">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
