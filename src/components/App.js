/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import AboutPage from "../views/AboutPage/AboutPage";
import HomePage from "../views/HomePage/HomePage";
import NotFoundPage from "../views/NotFoundPage/NotFoundPage";



// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.PureComponent {
  render() {
    const activeStyle = { color: "blue" };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
          {" | "}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>
            Demo App
          </NavLink>
          {" | "}
          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
};

export default App;
