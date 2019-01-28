import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home.jsx";
import "../App.css";
import Navbar from "./NavbarCom.jsx";
import SearchResults from "./SearchResults.js";
import About from "./About.jsx";
import OwnerDashboard from "./OwnerDashboard.jsx";
import Book from "./book";
// import CardHome from './CardHome.jsx';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  // render routes
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/OwnerDashboard" component={OwnerDashboard} />
          <Route exact path="/SearchResults" component={SearchResults} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/About" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
