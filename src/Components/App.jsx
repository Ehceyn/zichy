import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/myfav">
            <Checkout />
            <Footer />
          </Route>
          <Route path="/contact">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
