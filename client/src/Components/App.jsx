import React, { useEffect } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import Footer from "./Footer";
import ReactGA from "react-ga";
ReactGA.initialize("UA-181717739-1");

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log(window.location.pathname);
    // eslint-disable-next-line
  }, []);

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
